import { Activity, Radar } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AppLocale, GlobeRegion } from "@/types/globe";
import { localizedRegionName, uiText } from "@/data/ui-translations";

type StatusPanelProps = {
  selectedRegion: "All" | GlobeRegion;
  visibleCount: number;
  totalCount: number;
  locale: AppLocale;
};

export function StatusPanel({
  selectedRegion,
  visibleCount,
  totalCount,
  locale,
}: StatusPanelProps) {
  const text = uiText(locale);

  return (
    <Card className="relative overflow-hidden border-cyan-300/15 bg-slate-950/55">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/80 to-transparent" />
      <div className="absolute right-1/2 top-0 hidden h-20 w-px translate-x-1/2 bg-cyan-200/20 sm:block" />
      <CardContent className="grid gap-3 p-4 sm:grid-cols-2 sm:gap-4 sm:p-6">
        <div className="space-y-2">
          <Badge>{text.scanStatus}</Badge>
          <div className="flex flex-col gap-1 text-xs text-cyan-50/72 sm:flex-row sm:items-center sm:gap-2 sm:text-sm">
            <Radar className="h-4 w-4 text-cyan-300" />
            {text.regionFocus}:{" "}
            <span className="text-cyan-50">{localizedRegionName(selectedRegion, locale)}</span>
          </div>
        </div>
        <div className="space-y-2 sm:text-right">
          <Badge>{text.visibleMarkers}</Badge>
          <div className="flex flex-col gap-1 text-xs text-cyan-50/72 sm:flex-row sm:items-center sm:justify-end sm:gap-2 sm:text-sm">
            <Activity className="h-4 w-4 text-cyan-300" />
            {visibleCount} {text.activeOf} {totalCount}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
