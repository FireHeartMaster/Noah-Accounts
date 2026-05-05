"use client";

import { REGIONS, GlobeRegion } from "@/types/globe";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type RegionFilterProps = {
  selected: "All" | GlobeRegion;
  onSelect: (region: "All" | GlobeRegion) => void;
};

export function RegionFilter({ selected, onSelect }: RegionFilterProps) {
  return (
    <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 sm:mx-0 sm:flex-wrap sm:justify-center sm:gap-3 sm:overflow-visible sm:px-0 sm:pb-0">
      {REGIONS.map((region) => {
        const active = region === selected;

        return (
          <Button
            key={region}
            variant={active ? "default" : "outline"}
            size="sm"
            onClick={() => onSelect(region)}
            className={cn(
              "shrink-0 min-w-[5.75rem] px-3 text-[11px] sm:min-w-[7.75rem] sm:px-4 sm:text-sm",
              active && "border-cyan-100/30 bg-cyan-300/20 text-white",
            )}
          >
            {region}
          </Button>
        );
      })}
    </div>
  );
}
