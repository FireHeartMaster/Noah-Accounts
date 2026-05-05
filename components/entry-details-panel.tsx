"use client";

import { ExternalLink, LocateFixed, ScrollText } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GlobeEntry, GlobeRegion, normalizeRegion } from "@/types/globe";

type EntryDetailsPanelProps = {
  entry: GlobeEntry | null;
  selectedRegion: "All" | GlobeRegion;
};

function formatCoordinate(value: number, positive: string, negative: string) {
  const suffix = value >= 0 ? positive : negative;
  return `${Math.abs(value).toFixed(4)}° ${suffix}`;
}

function buildFallback(entry: GlobeEntry) {
  const displayRegion = normalizeRegion(entry.region) ?? entry.region;

  return {
    classification: `${displayRegion} knowledge node`,
    geographicLocation: `Regional marker within ${displayRegion}, positioned near ${formatCoordinate(entry.latitude, "N", "S")} and ${formatCoordinate(entry.longitude, "E", "W")}.`,
    mapPlacement: `Approximate marker: ${entry.latitude.toFixed(4)}, ${entry.longitude.toFixed(4)}.`,
    narrative: entry.text,
    chronology: `Mock dataset record dated ${entry.date}. Replace with your real chronology or earliest attested source later.`,
    evidence:
      "This is placeholder descriptive content in the mock dataset. Replace with source-backed notes, archaeological context, or document references when your real material is ready.",
  };
}

export function EntryDetailsPanel({
  entry,
  selectedRegion,
}: EntryDetailsPanelProps) {
  if (!entry) {
    return (
      <Card className="min-w-0 min-h-[16rem] overflow-hidden border-cyan-300/15 bg-slate-950/52 lg:h-full lg:min-h-[18rem]">
        <CardHeader className="gap-3">
          <Badge>Details Panel</Badge>
          <CardTitle className="text-base text-cyan-50">
            Select a marker to inspect the full entry.
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm leading-7 text-cyan-50/72">
          <p>
            The globe keeps the quick summary in-scene. This panel is reserved
            for longer structured information so the map stays visible.
          </p>
          <p>
            Current region filter: <span className="text-cyan-100">{selectedRegion}</span>
          </p>
        </CardContent>
      </Card>
    );
  }

  const fallback = buildFallback(entry);
  const displayRegion = normalizeRegion(entry.region) ?? entry.region;
  const details = {
    classification: entry.details?.classification ?? fallback.classification,
    geographicLocation:
      entry.details?.geographicLocation ?? fallback.geographicLocation,
    mapPlacement: entry.details?.mapPlacement ?? fallback.mapPlacement,
    narrative: entry.details?.narrative ?? fallback.narrative,
    chronology: entry.details?.chronology ?? fallback.chronology,
    evidence: entry.details?.evidence ?? fallback.evidence,
    references: entry.details?.references ?? entry.links ?? [],
  };

  return (
    <Card className="min-w-0 min-h-[16rem] overflow-hidden border-cyan-300/15 bg-slate-950/58 lg:h-full lg:min-h-[18rem]">
      <CardHeader className="gap-3 border-b border-cyan-300/10 pb-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <Badge>{displayRegion}</Badge>
          <span className="text-[11px] uppercase tracking-[0.24em] text-cyan-50/48">
            {entry.date}
          </span>
        </div>
        <div className="space-y-1">
          <CardTitle className="text-base leading-6 text-cyan-50 sm:text-lg">
            {entry.title}
          </CardTitle>
          <p className="text-[11px] uppercase tracking-[0.22em] text-cyan-200/72 sm:text-xs">
            {entry.subtitle}
          </p>
        </div>
      </CardHeader>

      <CardContent className="space-y-5 p-5 text-sm leading-7 text-cyan-50/78 sm:p-6">
        <section className="space-y-1.5">
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/54">
            Classification
          </div>
          <p>{details.classification}</p>
        </section>

        <section className="space-y-1.5">
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/54">
            Geographic Location
          </div>
          <p>{details.geographicLocation}</p>
        </section>

        <section className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/54">
            <LocateFixed className="h-3.5 w-3.5" />
            Map Placement Coordinates
          </div>
          <p>{details.mapPlacement}</p>
        </section>

        <section className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/54">
            <ScrollText className="h-3.5 w-3.5" />
            Narrative Summary
          </div>
          <p>{details.narrative}</p>
        </section>

        <section className="space-y-1.5">
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/54">
            Date / Era / Recording
          </div>
          <p>{details.chronology}</p>
        </section>

        <section className="space-y-1.5">
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/54">
            Relevant Evidence / Notes
          </div>
          <p>{details.evidence}</p>
        </section>

        <section className="space-y-2">
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/54">
            Sources / References
          </div>
          {details.references.length ? (
            <div className="flex flex-col gap-2">
              {details.references.map((reference, index) => (
                <div
                  key={`${reference.url}-${index}`}
                  className="rounded-xl border border-cyan-300/12 bg-slate-950/38 p-3"
                >
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3">
                    <div className="min-w-0">
                      <div className="text-[10px] uppercase tracking-[0.22em] text-cyan-100/48">
                        Source
                      </div>
                      <button
                        type="button"
                        className="mt-1 block w-full whitespace-normal break-words text-left text-sm leading-6 text-cyan-50 transition hover:text-cyan-200"
                        onClick={() =>
                          window.open(reference.url, "_blank", "noopener,noreferrer")
                        }
                      >
                        {reference.label}
                      </button>
                    </div>
                    <button
                      type="button"
                      className="mt-1 rounded-full p-1 text-cyan-100/58 transition hover:text-cyan-200"
                      onClick={() =>
                        window.open(reference.url, "_blank", "noopener,noreferrer")
                      }
                      aria-label={`Open ${reference.label}`}
                    >
                      <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                    </button>
                  </div>
                  <div className="mt-2 border-t border-cyan-300/10 pt-2">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-cyan-100/40">
                      URL
                    </div>
                    <p className="mt-1 whitespace-normal break-words font-mono text-[11px] leading-5 text-cyan-100/52">
                      {reference.url}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-cyan-50/62">
              No references are attached to this mock record yet.
            </p>
          )}
        </section>
      </CardContent>
    </Card>
  );
}
