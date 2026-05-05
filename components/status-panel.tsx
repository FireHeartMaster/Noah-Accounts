import { Activity, Radar } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GlobeRegion } from "@/types/globe";

type StatusPanelProps = {
  selectedRegion: "All" | GlobeRegion;
  visibleCount: number;
  totalCount: number;
};

export function StatusPanel({
  selectedRegion,
  visibleCount,
  totalCount,
}: StatusPanelProps) {
  return (
    <Card className="relative overflow-hidden border-cyan-300/15 bg-slate-950/55">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/80 to-transparent" />
      <div className="absolute right-1/2 top-0 hidden h-20 w-px translate-x-1/2 bg-cyan-200/20 sm:block" />
      <CardContent className="grid gap-3 p-4 sm:grid-cols-2 sm:gap-4 sm:p-6">
        <div className="space-y-2">
          <Badge>Scan Status</Badge>
          <div className="flex flex-col gap-1 text-xs text-cyan-50/72 sm:flex-row sm:items-center sm:gap-2 sm:text-sm">
            <Radar className="h-4 w-4 text-cyan-300" />
            Region focus: <span className="text-cyan-50">{selectedRegion}</span>
          </div>
        </div>
        <div className="space-y-2 sm:text-right">
          <Badge>Visible Markers</Badge>
          <div className="flex flex-col gap-1 text-xs text-cyan-50/72 sm:flex-row sm:items-center sm:justify-end sm:gap-2 sm:text-sm">
            <Activity className="h-4 w-4 text-cyan-300" />
            {visibleCount} active of {totalCount}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
