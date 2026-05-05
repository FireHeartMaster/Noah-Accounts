"use client";

import { ExternalLink, LocateFixed, ScrollText } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AppLocale,
  buildLocalizedDetailFallback,
  GlobeEntry,
  GlobeRegion,
  localizeEntry,
  normalizeRegion,
} from "@/types/globe";
import { localizedRegionName, uiText } from "@/data/ui-translations";

type EntryDetailsPanelProps = {
  entry: GlobeEntry | null;
  selectedLocale: AppLocale;
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
  selectedLocale,
  selectedRegion,
}: EntryDetailsPanelProps) {
  const text = uiText(selectedLocale);

  if (!entry) {
    return (
      <Card className="min-w-0 min-h-[16rem] overflow-hidden border-cyan-300/15 bg-slate-950/52 lg:h-full lg:min-h-[18rem]">
        <CardHeader className="gap-3">
          <Badge>{text.detailsPanel}</Badge>
          <CardTitle className="text-base text-cyan-50">
            {text.selectMarkerToInspect}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm leading-7 text-cyan-50/72">
          <p>{text.panelHint}</p>
          <p>
            {text.currentRegionFilter}:{" "}
            <span className="text-cyan-100">
              {localizedRegionName(selectedRegion, selectedLocale)}
            </span>
          </p>
        </CardContent>
      </Card>
    );
  }

  const localizedEntry = localizeEntry(entry, selectedLocale);
  const fallback =
    selectedLocale === "en"
      ? buildFallback(localizedEntry)
      : buildLocalizedDetailFallback(localizedEntry, selectedLocale);
  const normalizedRegion = normalizeRegion(localizedEntry.region);
  const displayRegion = normalizedRegion
    ? localizedRegionName(normalizedRegion, selectedLocale)
    : localizedEntry.region;
  const details = {
    classification: localizedEntry.details?.classification ?? fallback.classification,
    geographicLocation:
      localizedEntry.details?.geographicLocation ?? fallback.geographicLocation,
    mapPlacement: localizedEntry.details?.mapPlacement ?? fallback.mapPlacement,
    narrative: localizedEntry.details?.narrative ?? fallback.narrative,
    chronology: localizedEntry.details?.chronology ?? fallback.chronology,
    evidence: localizedEntry.details?.evidence ?? fallback.evidence,
    references: localizedEntry.details?.references ?? localizedEntry.links ?? [],
  };

  return (
    <Card className="min-w-0 min-h-[16rem] overflow-hidden border-cyan-300/15 bg-slate-950/58 lg:h-full lg:min-h-[18rem]">
      <CardHeader className="gap-3 border-b border-cyan-300/10 pb-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <Badge>{displayRegion}</Badge>
          <span className="text-[11px] uppercase tracking-[0.24em] text-cyan-50/48">
            {localizedEntry.date}
          </span>
        </div>
        <div className="space-y-1">
          <CardTitle className="text-base leading-6 text-cyan-50 sm:text-lg">
            {localizedEntry.title}
          </CardTitle>
          <p className="text-[11px] uppercase tracking-[0.22em] text-cyan-200/72 sm:text-xs">
            {localizedEntry.subtitle}
          </p>
        </div>
      </CardHeader>

      <CardContent className="space-y-5 p-5 text-sm leading-7 text-cyan-50/78 sm:p-6">
        <section className="space-y-1.5">
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/54">
            {text.classification}
          </div>
          <p>{details.classification}</p>
        </section>

        <section className="space-y-1.5">
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/54">
            {text.geographicLocation}
          </div>
          <p>{details.geographicLocation}</p>
        </section>

        <section className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/54">
            <LocateFixed className="h-3.5 w-3.5" />
            {text.mapPlacementCoordinates}
          </div>
          <p>{details.mapPlacement}</p>
        </section>

        <section className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/54">
            <ScrollText className="h-3.5 w-3.5" />
            {text.narrativeSummary}
          </div>
          <p>{details.narrative}</p>
        </section>

        <section className="space-y-1.5">
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/54">
            {text.dateEraRecording}
          </div>
          <p>{details.chronology}</p>
        </section>

        <section className="space-y-1.5">
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/54">
            {text.relevantEvidenceNotes}
          </div>
          <p>{details.evidence}</p>
        </section>

        <section className="space-y-2">
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/54">
            {text.sourcesReferences}
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
                      <div className="text-[10px] uppercase tracking-[0.22em] text-cyan-100/48">{text.source}</div>
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
                      aria-label={`${text.openSourceAriaPrefix} ${reference.label}`}
                    >
                      <ExternalLink className="h-3.5 w-3.5 shrink-0" />
                    </button>
                  </div>
                  <div className="mt-2 border-t border-cyan-300/10 pt-2">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-cyan-100/40">{text.url}</div>
                    <p className="mt-1 whitespace-normal break-words font-mono text-[11px] leading-5 text-cyan-100/52">
                      {reference.url}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-cyan-50/62">
              {text.noReferencesYet}
            </p>
          )}
        </section>
      </CardContent>
    </Card>
  );
}
