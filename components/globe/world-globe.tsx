"use client";

import {
  Billboard,
  Html,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ExternalLink } from "lucide-react";
import {
  AdditiveBlending,
  BackSide,
  BufferGeometry,
  CanvasTexture,
  Color,
  DoubleSide,
  Float32BufferAttribute,
  LinearFilter,
  MathUtils,
  Mesh,
  Points,
  SRGBColorSpace,
  Spherical,
  Euler,
  Vector3,
} from "three";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { geoEquirectangular, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import landTopology from "world-atlas/land-110m.json";

import {
  AppLocale,
  GlobeEntry,
  GlobeRegion,
  localizeEntry,
  normalizeRegion,
} from "@/types/globe";
import { localizedRegionName, uiText } from "@/data/ui-translations";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const GLOBE_RADIUS = 2.35;
const RESUME_DELAY_MS = 30_000;
const MARKER_ALTITUDE = 0.055;
const GLOBE_TILT_X = 0.08;

const REGION_FOCUS: Record<GlobeRegion, { latitude: number; longitude: number }> = {
  Africa: { latitude: 6, longitude: 20 },
  Asia: { latitude: 34, longitude: 96 },
  "Central America": { latitude: 13, longitude: -87 },
  Europe: { latitude: 51, longitude: 12 },
  "North America": { latitude: 39, longitude: -98 },
  "South America": { latitude: -16, longitude: -60 },
  Oceania: { latitude: -24, longitude: 134 },
  Mesopotamia: { latitude: 33.3, longitude: 43.8 },
};

type WorldGlobeProps = {
  entries: GlobeEntry[];
  selectedEntry: GlobeEntry | null;
  selectedRegion: "All" | GlobeRegion;
  selectedLocale: AppLocale;
  idleRotationEnabled?: boolean;
  focusRequestKey?: number;
  frontMostRequestKey?: number;
  onSelectEntry: (entry: GlobeEntry | null) => void;
};

type MarkerProps = {
  entry: GlobeEntry;
  position: Vector3;
  isSelected: boolean;
  isDimmed: boolean;
  onSelect: (entry: GlobeEntry) => void;
};

type PointerMissEvent = {
  clientX?: number;
  clientY?: number;
  offsetX?: number;
  offsetY?: number;
  pointerType?: string;
};

type PointerMissResolver = (event: PointerMissEvent) => GlobeEntry | null;

type GlobeSceneProps = WorldGlobeProps & {
  registerPointerMissResolver: (resolver: PointerMissResolver | null) => void;
};

function latLonToVector3(
  latitude: number,
  longitude: number,
  radius: number,
  altitude = 0,
) {
  const lat = MathUtils.degToRad(latitude);
  const lon = MathUtils.degToRad(longitude);
  const adjustedRadius = radius + altitude;

  return new Vector3(
    adjustedRadius * Math.cos(lat) * Math.sin(lon),
    adjustedRadius * Math.sin(lat),
    adjustedRadius * Math.cos(lat) * Math.cos(lon),
  );
}

function buildLatitudeRing(radius: number, latitude: number, segments = 180) {
  const points: Vector3[] = [];

  for (let index = 0; index <= segments; index += 1) {
    const longitude = (index / segments) * 360 - 180;
    points.push(latLonToVector3(latitude, longitude, radius));
  }

  return points;
}

function buildLongitudeRing(radius: number, longitude: number, segments = 180) {
  const points: Vector3[] = [];

  for (let index = 0; index <= segments; index += 1) {
    const latitude = (index / segments) * 180 - 90;
    points.push(latLonToVector3(latitude, longitude, radius));
  }

  return points;
}

function createWorldMapTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 2048;
  canvas.height = 1024;

  const context = canvas.getContext("2d");

  if (!context) {
    return null;
  }

  const { width, height } = canvas;

  const landFeature: any = feature(
    landTopology as never,
    (landTopology as { objects: { land: object } }).objects.land as never,
  );
  const projection = geoEquirectangular().fitExtent(
    [
      [20, 20],
      [width - 20, height - 20],
    ],
    landFeature,
  );
  const path = geoPath(projection, context);

  context.clearRect(0, 0, width, height);

  context.save();
  context.fillStyle = "rgba(9, 18, 32, 0.32)";
  context.fillRect(0, 0, width, height);
  context.restore();

  context.save();
  context.strokeStyle = "rgba(105, 223, 255, 0.08)";
  context.lineWidth = 1;

  for (let x = 0; x <= width; x += 128) {
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, height);
    context.stroke();
  }

  for (let y = 0; y <= height; y += 128) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(width, y);
    context.stroke();
  }
  context.restore();

  context.save();
  context.shadowColor = "rgba(102, 233, 255, 0.42)";
  context.shadowBlur = 18;
  context.fillStyle = "rgba(61, 223, 255, 0.18)";
  context.strokeStyle = "rgba(158, 244, 255, 0.82)";
  context.lineWidth = 1.35;
  context.beginPath();
  path(landFeature);
  context.fill();
  context.stroke();
  context.restore();

  context.save();
  context.strokeStyle = "rgba(197, 248, 255, 0.26)";
  context.lineWidth = 0.85;
  context.beginPath();
  path(landFeature);
  context.stroke();
  context.restore();

  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.minFilter = LinearFilter;
  texture.magFilter = LinearFilter;
  texture.needsUpdate = true;

  return texture;
}

function HudBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(43,197,255,0.18),_transparent_36%),radial-gradient(circle_at_bottom,_rgba(6,120,255,0.16),_transparent_26%),linear-gradient(160deg,#050816_0%,#07101d_48%,#02040b_100%)]" />
      <div className="absolute inset-0 bg-hud-grid bg-[size:56px_56px] opacity-[0.16]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-300/12 to-transparent blur-3xl" />
      <div className="absolute bottom-[-15%] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-[120px]" />
    </>
  );
}

function SceneInteractionLayer({
  onInteract,
}: {
  onInteract: (cancelFocus?: boolean) => void;
}) {
  const { gl } = useThree();
  const draggingRef = useRef(false);

  useEffect(() => {
    const target = gl.domElement;

    const handlePointerDown = () => {
      draggingRef.current = true;
      onInteract(true);
    };

    const handlePointerMove = () => {
      if (draggingRef.current) {
        onInteract(true);
      }
    };

    const handlePointerUp = () => {
      draggingRef.current = false;
      onInteract(true);
    };

    const handleWheel = () => {
      onInteract(true);
    };

    target.addEventListener("pointerdown", handlePointerDown, { passive: true });
    target.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointercancel", handlePointerUp, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    target.addEventListener("wheel", handleWheel, { passive: true });
    target.addEventListener("touchstart", handlePointerDown, { passive: true });
    target.addEventListener("touchmove", handlePointerMove, { passive: true });
    window.addEventListener("touchcancel", handlePointerUp, { passive: true });
    window.addEventListener("touchend", handlePointerUp, { passive: true });

    return () => {
      target.removeEventListener("pointerdown", handlePointerDown);
      target.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointercancel", handlePointerUp);
      window.removeEventListener("pointerup", handlePointerUp);
      target.removeEventListener("wheel", handleWheel);
      target.removeEventListener("touchstart", handlePointerDown);
      target.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("touchcancel", handlePointerUp);
      window.removeEventListener("touchend", handlePointerUp);
    };
  }, [gl, onInteract]);

  return null;
}

function OrbitalParticles() {
  const geometry = useMemo(() => {
    const particleGeometry = new BufferGeometry();
    const positions: number[] = [];
    const colors: number[] = [];
    const tint = new Color("#7fe7ff");
    const secondary = new Color("#5f7dff");

    for (let index = 0; index < 280; index += 1) {
      const radius = GLOBE_RADIUS * MathUtils.randFloat(1.15, 1.65);
      const theta = MathUtils.randFloatSpread(Math.PI * 2);
      const phi = Math.acos(MathUtils.randFloatSpread(2));
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);
      const color = index % 3 === 0 ? secondary : tint;

      positions.push(x, y, z);
      colors.push(color.r, color.g, color.b);
    }

    particleGeometry.setAttribute(
      "position",
      new Float32BufferAttribute(positions, 3),
    );
    particleGeometry.setAttribute(
      "color",
      new Float32BufferAttribute(colors, 3),
    );

    return particleGeometry;
  }, []);

  const pointsRef = useRef<Points>(null);

  useFrame((_, delta) => {
    if (!pointsRef.current) {
      return;
    }

    pointsRef.current.rotation.y += delta * 0.028;
    pointsRef.current.rotation.x += delta * 0.008;
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.035}
        sizeAttenuation
        transparent
        vertexColors
        opacity={0.75}
        depthWrite={false}
        blending={AdditiveBlending}
      />
    </points>
  );
}

function SurfaceMap() {
  const texture = useMemo(() => createWorldMapTexture(), []);

  useEffect(() => {
    return () => {
      texture?.dispose();
    };
  }, [texture]);

  if (!texture) {
    return null;
  }

  return (
    <mesh scale={1.002} rotation={[0, -Math.PI / 2, 0]}>
      <sphereGeometry args={[GLOBE_RADIUS, 72, 72]} />
      <meshBasicMaterial
        map={texture}
        transparent
        opacity={0.72}
        blending={AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}

function shortestAngleDelta(from: number, to: number) {
  return Math.atan2(Math.sin(to - from), Math.cos(to - from));
}

function WireframeShell() {
  const latitudeLines = useMemo(
    () =>
      [-72, -54, -36, -18, 0, 18, 36, 54, 72].map((latitude) =>
        buildLatitudeRing(GLOBE_RADIUS, latitude),
      ),
    [],
  );

  const longitudeLines = useMemo(
    () =>
      Array.from({ length: 12 }, (_, index) => index * 30 - 180).map(
        (longitude) => buildLongitudeRing(GLOBE_RADIUS, longitude),
      ),
    [],
  );

  return (
    <group>
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS, 48, 48]} />
        <meshBasicMaterial
          color="#56d7ff"
          wireframe
          transparent
          opacity={0.09}
        />
      </mesh>
      <mesh scale={1.018}>
        <sphereGeometry args={[GLOBE_RADIUS, 48, 48]} />
        <meshBasicMaterial
          color="#35d6ff"
          transparent
          opacity={0.045}
          blending={AdditiveBlending}
        />
      </mesh>
      <mesh scale={1.09}>
        <sphereGeometry args={[GLOBE_RADIUS, 48, 48]} />
        <meshBasicMaterial
          color="#2cb8ff"
          transparent
          opacity={0.04}
          side={BackSide}
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      {latitudeLines.map((line, index) => (
        <line key={`lat-${index}`}>
          <bufferGeometry>
            <primitive
              attach="attributes-position"
              object={
                new Float32BufferAttribute(
                  line.flatMap((point) => point.toArray()),
                  3,
                )
              }
            />
          </bufferGeometry>
          <lineBasicMaterial color="#82ebff" transparent opacity={0.42} />
        </line>
      ))}
      {longitudeLines.map((line, index) => (
        <line key={`lon-${index}`}>
          <bufferGeometry>
            <primitive
              attach="attributes-position"
              object={
                new Float32BufferAttribute(
                  line.flatMap((point) => point.toArray()),
                  3,
                )
              }
            />
          </bufferGeometry>
          <lineBasicMaterial color="#5cd9ff" transparent opacity={0.22} />
        </line>
      ))}
    </group>
  );
}

function GlobeMarker({
  entry,
  position,
  isSelected,
  isDimmed,
  onSelect,
}: MarkerProps) {
  const [hovered, setHovered] = useState(false);
  const pulseRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (!pulseRef.current) {
      return;
    }

    const time = clock.getElapsedTime();
    const baseScale = isSelected ? 1.8 : hovered ? 1.55 : 1.25;
    const pulse = 1 + Math.sin(time * 2.6 + position.x) * 0.16;
    pulseRef.current.scale.setScalar(baseScale * pulse);
  });

  return (
    <group position={position.toArray()}>
      <Billboard follow lockX={false} lockY={false} lockZ={false}>
        <mesh
          onPointerOver={(event) => {
            event.stopPropagation();
            setHovered(true);
          }}
          onPointerOut={() => setHovered(false)}
          onClick={(event) => {
            event.stopPropagation();
            if (!isDimmed) {
              onSelect(entry);
            }
          }}
          onPointerDown={(event) => event.stopPropagation()}
        >
          <sphereGeometry args={[isSelected ? 0.05 : 0.038, 18, 18]} />
          <meshBasicMaterial
            color={isSelected ? "#d8ffff" : hovered ? "#9bf4ff" : "#4fe5ff"}
            transparent
            opacity={isDimmed ? 0.2 : 0.95}
          />
        </mesh>
        <mesh ref={pulseRef}>
          <ringGeometry args={[0.075, isSelected ? 0.115 : 0.102, 48]} />
          <meshBasicMaterial
            color={isSelected ? "#7ee8ff" : "#2ce2ff"}
            transparent
            opacity={isDimmed ? 0.12 : isSelected ? 0.72 : 0.42}
            blending={AdditiveBlending}
            depthWrite={false}
            side={DoubleSide}
          />
        </mesh>
      </Billboard>
    </group>
  );
}

function SelectionConnector({
  entry,
  selectedLocale,
}: {
  entry: GlobeEntry;
  selectedLocale: AppLocale;
}) {
  const text = uiText(selectedLocale);
  const localizedEntry = localizeEntry(entry, selectedLocale);
  const normalizedRegion = normalizeRegion(localizedEntry.region);
  const displayRegion = normalizedRegion
    ? localizedRegionName(normalizedRegion, selectedLocale)
    : localizedEntry.region;
  const markerPoint = useMemo(
    () => latLonToVector3(entry.latitude, entry.longitude, GLOBE_RADIUS, MARKER_ALTITUDE),
    [entry.latitude, entry.longitude],
  );

  const connectorPoints = useMemo(() => {
    const midpoint = markerPoint.clone().normalize().multiplyScalar(GLOBE_RADIUS + 0.36);
    const endpoint = markerPoint.clone().normalize().multiplyScalar(GLOBE_RADIUS + 0.82);

    return [markerPoint, midpoint, endpoint];
  }, [markerPoint]);

  const cardPosition = connectorPoints[2];

  return (
    <group>
      <line>
        <bufferGeometry>
          <primitive
            attach="attributes-position"
            object={
              new Float32BufferAttribute(
                connectorPoints.flatMap((point) => point.toArray()),
                3,
              )
            }
          />
        </bufferGeometry>
        <lineBasicMaterial color="#93f3ff" transparent opacity={0.9} />
      </line>
      <mesh position={cardPosition.toArray()}>
        <sphereGeometry args={[0.03, 16, 16]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      <Html
        position={cardPosition.toArray()}
        className="pointer-events-auto"
        style={{
          transform: "translate3d(9px, calc(-100% - 9px), 0)",
        }}
      >
        <Card className="relative w-[min(11.55rem,calc(50vw-1rem))] overflow-hidden border-cyan-200/25 bg-slate-950/88 shadow-glow sm:w-[min(23.1rem,calc(100vw-2rem))]">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(94,231,255,0.16),_transparent_48%)]" />
          <CardHeader className="relative gap-1.5 p-2 sm:gap-2 sm:p-4">
            <div>
              <Badge>{displayRegion}</Badge>
            </div>
            <CardTitle className="text-[8px] leading-3 text-cyan-50 sm:text-base sm:leading-5">
              {localizedEntry.title}
            </CardTitle>
            <p className="text-[6px] uppercase tracking-[0.18em] text-cyan-200/72 sm:text-xs sm:tracking-[0.22em]">
              {localizedEntry.subtitle}
            </p>
            <CardDescription className="text-[6px] leading-3 sm:text-sm sm:leading-5">
              {localizedEntry.text}
            </CardDescription>
            <p className="text-[5px] uppercase tracking-[0.18em] text-cyan-50/48 sm:text-[10px] sm:tracking-[0.24em]">
              {localizedEntry.date}
            </p>
          </CardHeader>
          {localizedEntry.links?.length ? (
            <CardContent className="relative flex flex-col gap-1.5 px-2 pb-2 sm:gap-2 sm:px-4 sm:pb-4">
              <div className="text-[5px] uppercase tracking-[0.18em] text-cyan-100/52 sm:text-[10px] sm:tracking-[0.22em]">
                {text.someReferences}
              </div>
              {localizedEntry.links.map((link, index) => (
                <Button
                  key={`${link.url}-${index}`}
                  variant="outline"
                  size="sm"
                  className="h-auto w-full items-start justify-between gap-1.5 px-2 py-1 text-left text-[5px] sm:gap-3 sm:px-3 sm:py-2 sm:text-[10px]"
                  onClick={() => window.open(link.url, "_blank", "noopener,noreferrer")}
                >
                  <span className="min-w-0 flex-1 whitespace-normal break-words leading-3 sm:leading-5">
                    {link.label}
                  </span>
                  <ExternalLink className="mt-0.5 h-2 w-2 shrink-0 sm:h-3.5 sm:w-3.5" />
                </Button>
              ))}
            </CardContent>
          ) : null}
        </Card>
      </Html>
    </group>
  );
}

function GlobeSceneContents({
  entries,
  selectedEntry,
  selectedRegion,
  selectedLocale,
  idleRotationEnabled = true,
  focusRequestKey = 0,
  frontMostRequestKey = 0,
  onSelectEntry,
  registerPointerMissResolver,
}: GlobeSceneProps) {
  const { camera, gl, size } = useThree();
  const controlsRef = useRef<any>(null);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const desiredOrbitRef = useRef<{ azimuthal: number; polar: number } | null>(null);
  const lastFocusKeyRef = useRef<string | null>(null);
  const lastFrontMostRequestKeyRef = useRef(0);
  const [autoRotate, setAutoRotate] = useState(true);

  const markerPositions = useMemo(
    () =>
      entries.map((entry) => ({
        entry,
        position: latLonToVector3(
          entry.latitude,
          entry.longitude,
          GLOBE_RADIUS,
          MARKER_ALTITUDE,
        ),
      })),
    [entries],
  );

  const resolveNearestMarker = useCallback(
    (event: PointerMissEvent) => {
      const bounds = gl.domElement.getBoundingClientRect();
      const pointerX =
        typeof event.offsetX === "number" ? event.offsetX : event.clientX != null
          ? event.clientX - bounds.left
          : null;
      const pointerY =
        typeof event.offsetY === "number" ? event.offsetY : event.clientY != null
          ? event.clientY - bounds.top
          : null;

      if (pointerX == null || pointerY == null) {
        return null;
      }

      const thresholdPx = event.pointerType === "touch" ? 81 : 48;
      const cameraDirection = camera.position.clone().normalize();
      const globeRotation = new Euler(GLOBE_TILT_X, 0, 0);

      let bestEntry: GlobeEntry | null = null;
      let bestDistance = Number.POSITIVE_INFINITY;

      for (const { entry, position } of markerPositions) {
        if (
          selectedRegion !== "All" &&
          normalizeRegion(entry.region) !== selectedRegion
        ) {
          continue;
        }

        const direction = position
          .clone()
          .normalize()
          .applyEuler(globeRotation)
          .normalize();

        // Ignore markers on the back half of the globe when snapping a tap.
        if (direction.dot(cameraDirection) <= 0) {
          continue;
        }

        const projected = position.clone().applyEuler(globeRotation).project(camera);
        const screenX = (projected.x * 0.5 + 0.5) * size.width;
        const screenY = (-projected.y * 0.5 + 0.5) * size.height;
        const distance = Math.hypot(screenX - pointerX, screenY - pointerY);

        if (distance < bestDistance) {
          bestDistance = distance;
          bestEntry = entry;
        }
      }

      return bestDistance <= thresholdPx ? bestEntry : null;
    },
    [camera, gl.domElement, markerPositions, selectedRegion, size.height, size.width],
  );

  useEffect(() => {
    registerPointerMissResolver(resolveNearestMarker);

    return () => {
      registerPointerMissResolver(null);
    };
  }, [registerPointerMissResolver, resolveNearestMarker]);

  const signalInteraction = useCallback((cancelFocus = false) => {
    if (cancelFocus) {
      desiredOrbitRef.current = null;
    }

    setAutoRotate((current) => (current ? false : current));

    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }

    if (!idleRotationEnabled) {
      return;
    }

    resumeTimerRef.current = setTimeout(() => {
      setAutoRotate(true);
    }, RESUME_DELAY_MS);
  }, [idleRotationEnabled]);

  useEffect(() => {
    if (!idleRotationEnabled) {
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
        resumeTimerRef.current = null;
      }

      setAutoRotate(false);
      return;
    }

    if (!desiredOrbitRef.current) {
      setAutoRotate(true);
    }
  }, [idleRotationEnabled]);

  const focusCoordinates = useCallback(
    (latitude: number, longitude: number) => {
      const direction = latLonToVector3(latitude, longitude, 1);
      direction.applyAxisAngle(new Vector3(1, 0, 0), GLOBE_TILT_X);

      const spherical = new Spherical().setFromVector3(direction.normalize());

      desiredOrbitRef.current = {
        azimuthal: spherical.theta,
        polar: MathUtils.clamp(spherical.phi, 0.42, Math.PI - 0.42),
      };

      signalInteraction(false);
    },
    [signalInteraction],
  );

  useEffect(() => {
    const focusTarget =
      selectedEntry &&
      (selectedRegion === "All" ||
        normalizeRegion(selectedEntry.region) === selectedRegion)
        ? {
            key: `entry:${selectedEntry.id}:${focusRequestKey}`,
            latitude: selectedEntry.latitude,
            longitude: selectedEntry.longitude,
          }
        : selectedRegion !== "All"
          ? {
              key: `region:${selectedRegion}`,
              latitude: REGION_FOCUS[selectedRegion].latitude,
              longitude: REGION_FOCUS[selectedRegion].longitude,
            }
          : null;

    if (!focusTarget) {
      lastFocusKeyRef.current = null;
      return;
    }

    if (lastFocusKeyRef.current === focusTarget.key) {
      return;
    }

    lastFocusKeyRef.current = focusTarget.key;
    focusCoordinates(focusTarget.latitude, focusTarget.longitude);
  }, [focusCoordinates, focusRequestKey, selectedEntry, selectedRegion]);

  useEffect(() => {
    if (frontMostRequestKey === 0) {
      return;
    }

    if (lastFrontMostRequestKeyRef.current === frontMostRequestKey) {
      return;
    }

    lastFrontMostRequestKeyRef.current = frontMostRequestKey;

    const visibleEntries =
      selectedRegion === "All"
        ? entries
        : entries.filter(
            (entry) => normalizeRegion(entry.region) === selectedRegion,
          );

    const cameraDirection = camera.position.clone().normalize();
    const globeRotation = new Euler(GLOBE_TILT_X, 0, 0);

    const frontMostEntry = visibleEntries.reduce<GlobeEntry | null>((best, entry) => {
      const currentDirection = latLonToVector3(
        entry.latitude,
        entry.longitude,
        1,
      ).applyEuler(globeRotation).normalize();
      const currentScore = currentDirection.dot(cameraDirection);

      if (!best) {
        return entry;
      }

      const bestDirection = latLonToVector3(
        best.latitude,
        best.longitude,
        1,
      ).applyEuler(globeRotation).normalize();
      const bestScore = bestDirection.dot(cameraDirection);

      return currentScore > bestScore ? entry : best;
    }, null);

    if (!frontMostEntry) {
      return;
    }

    onSelectEntry(frontMostEntry);
  }, [
    camera.position,
    entries,
    focusRequestKey,
    frontMostRequestKey,
    onSelectEntry,
    selectedRegion,
  ]);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  useFrame((_, delta) => {
    const controls = controlsRef.current;
    const targetOrbit = desiredOrbitRef.current;

    if (!controls || !targetOrbit) {
      return;
    }

    const currentAzimuthal = controls.getAzimuthalAngle();
    const currentPolar = controls.getPolarAngle();
    const nextAzimuthal =
      currentAzimuthal + shortestAngleDelta(currentAzimuthal, targetOrbit.azimuthal) * Math.min(1, delta * 3.2);
    const nextPolar = MathUtils.damp(currentPolar, targetOrbit.polar, 5.5, delta);

    controls.setAzimuthalAngle(nextAzimuthal);
    controls.setPolarAngle(nextPolar);
    controls.update();

    const azimuthalError = Math.abs(
      shortestAngleDelta(nextAzimuthal, targetOrbit.azimuthal),
    );
    const polarError = Math.abs(nextPolar - targetOrbit.polar);

    if (azimuthalError < 0.003 && polarError < 0.003) {
      desiredOrbitRef.current = null;
    }
  });

  return (
    <>
      <color attach="background" args={["#020611"]} />
      <fog attach="fog" args={["#020611", 6.5, 12]} />
      <PerspectiveCamera makeDefault position={[0, 0.45, 7]} fov={38} />
      <SceneInteractionLayer onInteract={signalInteraction} />
      <ambientLight intensity={1.2} />
      <pointLight position={[0, 0, 6]} intensity={1.8} color="#69ddff" />
      <pointLight position={[-5, 2, -4]} intensity={0.8} color="#244bff" />

      <group rotation={[GLOBE_TILT_X, 0, 0]}>
        <SurfaceMap />
        <WireframeShell />
        <OrbitalParticles />

        {markerPositions.map(({ entry, position }) => {
          const entryRegion = normalizeRegion(entry.region);
          const isDimmed =
            selectedRegion !== "All" && entryRegion !== selectedRegion;

          return (
            <GlobeMarker
              key={entry.id}
              entry={entry}
              position={position}
              isSelected={selectedEntry?.id === entry.id}
              isDimmed={isDimmed}
              onSelect={(nextEntry) => {
                signalInteraction();
                onSelectEntry(nextEntry);
              }}
            />
          );
        })}

        {selectedEntry ? (
          <SelectionConnector
            entry={selectedEntry}
            selectedLocale={selectedLocale}
          />
        ) : null}
      </group>

      <OrbitControls
        ref={controlsRef}
        enablePan={false}
        enableDamping
        dampingFactor={0.06}
        rotateSpeed={0.58}
        zoomSpeed={0.7}
        minDistance={4.6}
        maxDistance={8.4}
        autoRotate={autoRotate}
        autoRotateSpeed={-0.32}
      />
    </>
  );
}

export function WorldGlobe(props: WorldGlobeProps) {
  const pointerMissResolverRef = useRef<PointerMissResolver | null>(null);

  return (
    <div className="relative overflow-hidden rounded-[1.5rem] border border-cyan-300/15 bg-slate-950/45 shadow-panel sm:rounded-[2rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(67,212,255,0.12),_transparent_50%)]" />
      <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-cyan-100/80 to-transparent sm:inset-x-8" />
      <div className="relative h-[62svh] min-h-[22rem] w-full touch-none sm:h-[72svh] sm:min-h-[28rem] lg:h-[86vh] lg:min-h-[32rem]">
        <Canvas
          dpr={[1, 1.75]}
          gl={{ antialias: true, alpha: true }}
          onPointerMissed={(event) => {
            const pointerEvent = event as MouseEvent & {
              offsetX?: number;
              offsetY?: number;
              pointerType?: string;
            };
            const matchedEntry = pointerMissResolverRef.current?.({
              clientX: pointerEvent.clientX,
              clientY: pointerEvent.clientY,
              offsetX: pointerEvent.offsetX,
              offsetY: pointerEvent.offsetY,
              pointerType: pointerEvent.pointerType,
            });

            props.onSelectEntry(matchedEntry ?? null);
          }}
        >
          <GlobeSceneContents
            {...props}
            registerPointerMissResolver={(resolver) => {
              pointerMissResolverRef.current = resolver;
            }}
          />
        </Canvas>
      </div>
    </div>
  );
}

export { HudBackground, latLonToVector3, RESUME_DELAY_MS, GLOBE_RADIUS };
