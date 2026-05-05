"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronRight, Sparkles } from "lucide-react";

import { globeEntries } from "@/data/globe-entries";
import { EntryDetailsPanel } from "@/components/entry-details-panel";
import { RegionFilter } from "@/components/region-filter";
import { StatusPanel } from "@/components/status-panel";
import {
  HudBackground,
  WorldGlobe,
} from "@/components/globe/world-globe";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { uiText } from "@/data/ui-translations";
import {
  AppLocale,
  GlobeEntry,
  GlobeRegion,
  LOCALE_OPTIONS,
  normalizeRegion,
} from "@/types/globe";

export function LandingPage() {
  const [selectedRegion, setSelectedRegion] = useState<"All" | GlobeRegion>("All");
  const [selectedEntry, setSelectedEntry] = useState<GlobeEntry | null>(null);
  const [selectedLocale, setSelectedLocale] = useState<AppLocale>("en");
  const [idleRotationEnabled, setIdleRotationEnabled] = useState(true);
  const [focusRequestKey, setFocusRequestKey] = useState(0);
  const [frontMostRequestKey, setFrontMostRequestKey] = useState(0);
  const text = uiText(selectedLocale);

  const visibleEntries = useMemo(
    () =>
      selectedRegion === "All"
        ? globeEntries
        : globeEntries.filter(
            (entry) => normalizeRegion(entry.region) === selectedRegion,
          ),
    [selectedRegion],
  );

  useEffect(() => {
    if (
      selectedEntry &&
      selectedRegion !== "All" &&
      normalizeRegion(selectedEntry.region) !== selectedRegion
    ) {
      setSelectedEntry(null);
    }
  }, [selectedEntry, selectedRegion]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <HudBackground />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1500px] flex-col px-3 pb-3 pt-3 sm:px-4 sm:pb-4 sm:pt-4 lg:px-6 lg:pb-6">
        <section className="mb-3 flex items-start justify-between gap-4 px-2 sm:mb-4">
          <div className="space-y-2">
            <Badge className="animate-pulse-soft gap-2 border-cyan-100/20 bg-cyan-300/12">
              <Sparkles className="h-3.5 w-3.5" />
              {text.holographicWorldInterface}
            </Badge>
            <div>
              <h1 className="font-display text-sm uppercase tracking-[0.28em] text-cyan-50 sm:text-base">
                {text.globalSignalMap}
              </h1>
              <p className="mt-1 max-w-2xl text-xs leading-6 text-cyan-50/62 sm:text-sm">
                {text.dragZoomFilter}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="hidden rounded-full border border-cyan-300/15 bg-slate-950/35 px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-cyan-100/56 backdrop-blur-xl sm:block">
              {text.interactive3dGlobe}
            </div>
            <label className="flex items-center gap-2 rounded-full border border-cyan-300/15 bg-slate-950/45 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-cyan-100/72 backdrop-blur-xl">
              <span className="hidden sm:inline">{text.language}</span>
              <select
                value={selectedLocale}
                onChange={(event) => setSelectedLocale(event.target.value as AppLocale)}
                className="rounded-full border border-cyan-300/12 bg-slate-950/85 px-3 py-1 text-[11px] normal-case tracking-normal text-cyan-50 outline-none transition hover:border-cyan-300/30"
                aria-label={text.selectLanguage}
              >
                {LOCALE_OPTIONS.map((locale) => (
                  <option key={locale.value} value={locale.value}>
                    {locale.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </section>

        <section className="grid flex-1 gap-4 lg:grid-cols-[minmax(0,1fr)_24rem] lg:gap-5">
          <div className="flex min-h-0 min-w-0 flex-col">
            <div className="mb-3 px-2 sm:px-4 lg:hidden">
              <div className="rounded-[1.25rem] border border-cyan-300/12 bg-slate-950/38 p-3 shadow-panel backdrop-blur-xl sm:p-4">
                <RegionFilter
                  selected={selectedRegion}
                  onSelect={setSelectedRegion}
                  locale={selectedLocale}
                />
              </div>
            </div>

            <div className="relative">
              <WorldGlobe
                entries={globeEntries}
                selectedEntry={selectedEntry}
                selectedRegion={selectedRegion}
                selectedLocale={selectedLocale}
                idleRotationEnabled={idleRotationEnabled}
                focusRequestKey={focusRequestKey}
                frontMostRequestKey={frontMostRequestKey}
                onSelectEntry={setSelectedEntry}
              />

              <div className="pointer-events-none absolute inset-x-2 top-2 z-10 hidden sm:inset-x-4 sm:top-4 lg:block lg:inset-x-6 lg:top-6">
                <div className="pointer-events-auto mx-auto w-full max-w-4xl rounded-[1.5rem] border border-cyan-300/12 bg-slate-950/38 p-3 shadow-panel backdrop-blur-xl sm:p-4">
                  <RegionFilter
                    selected={selectedRegion}
                    onSelect={setSelectedRegion}
                    locale={selectedLocale}
                  />
                </div>
              </div>
            </div>

            <div className="mt-3 px-2 sm:px-4 lg:relative lg:z-10 lg:mx-6 lg:-mt-32 lg:px-0">
              <div className="grid gap-3 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)_auto]">
                <div className="pointer-events-auto lg:max-w-[22rem]">
                  <StatusPanel
                    selectedRegion={selectedRegion}
                    visibleCount={visibleEntries.length}
                    totalCount={globeEntries.length}
                    locale={selectedLocale}
                  />
                </div>

                <div className="hidden lg:block" />

                <div className="pointer-events-auto flex justify-start lg:ml-auto lg:justify-end">
                  <div className="flex w-full flex-wrap items-center justify-start gap-2 rounded-[1rem] border border-cyan-300/15 bg-slate-950/45 p-2 shadow-panel backdrop-blur-xl sm:w-auto sm:gap-3 sm:rounded-[1.25rem] sm:p-2.5 sm:justify-end">
                    <label className="flex cursor-pointer items-center gap-2 rounded-full border border-cyan-300/12 bg-slate-950/45 px-2.5 py-1.5 text-[9px] uppercase tracking-[0.16em] text-cyan-100/72 sm:px-3 sm:py-2 sm:text-[10px] sm:tracking-[0.2em]">
                      <input
                        type="checkbox"
                        checked={idleRotationEnabled}
                        onChange={(event) => setIdleRotationEnabled(event.target.checked)}
                        className="h-3 w-3 rounded border-cyan-300/30 bg-slate-950 accent-cyan-300 sm:h-3.5 sm:w-3.5"
                      />
                      {text.idleRotation}
                    </label>
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="hidden px-2 text-[10px] uppercase tracking-[0.24em] text-cyan-100/56 sm:block">
                        {text.focus}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="justify-between px-3 text-[10px] normal-case tracking-[0.08em] sm:px-4 sm:text-xs sm:uppercase sm:tracking-[0.22em]"
                        onClick={() => {
                          setFrontMostRequestKey((current) => current + 1);
                          setFocusRequestKey((current) => current + 1);
                        }}
                      >
                        {text.frontMostRecord}
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <EntryDetailsPanel
              entry={selectedEntry}
              selectedLocale={selectedLocale}
              selectedRegion={selectedRegion}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
