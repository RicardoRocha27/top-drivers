"use client";

import { Button } from "@/components/ui/button";
import { FilterIcon } from "lucide-react";

export const Filter = () => {
  const setFilter = () => {};

  return (
    <div className="space-x-2 flex items-center gap-2">
      <Button variant="outline" size="icon">
        <FilterIcon className="cursor-pointer" onClick={setFilter} />
      </Button>
    </div>
  );
};
