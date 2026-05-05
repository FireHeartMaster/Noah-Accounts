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
      <div className="absolute right-6 top-0 h-24 w-px bg-cyan-200/20" />
      <CardContent className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6">
        <div className="space-y-2">
          <Badge>Scan Status</Badge>
          <div className="flex items-center gap-2 text-sm text-cyan-50/72">
            <Radar className="h-4 w-4 text-cyan-300" />
            Region focus: <span className="text-cyan-50">{selectedRegion}</span>
          </div>
        </div>
        <div className="space-y-2 sm:text-right">
          <Badge>Visible Markers</Badge>
          <div className="flex items-center gap-2 text-sm text-cyan-50/72 sm:justify-end">
            <Activity className="h-4 w-4 text-cyan-300" />
            {visibleCount} active of {totalCount}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
