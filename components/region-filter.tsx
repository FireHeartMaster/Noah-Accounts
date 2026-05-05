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
    <div className="flex flex-wrap justify-center gap-3">
      {REGIONS.map((region) => {
        const active = region === selected;

        return (
          <Button
            key={region}
            variant={active ? "default" : "outline"}
            size="sm"
            onClick={() => onSelect(region)}
            className={cn(
              "min-w-[7.75rem]",
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
