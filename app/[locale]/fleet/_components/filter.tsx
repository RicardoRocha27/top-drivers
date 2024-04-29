"use client";

import { CircleMinus, CirclePlus, FilterIcon } from "lucide-react";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export const Filter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const current = qs.parse(searchParams.toString());

  const [open, setOpen] = useState(false);

  const [availablePlaces, setAvailablePlaces] = useState<string | number>(
    (current["availablePlaces"] as string) || 1
  );
  const [availableBags, setAvailableBags] = useState<string | number>(
    (current["availableBags"] as string) || 1
  );

  const submitFilters = () => {
    let query = {
      ...current,
    };

    if (
      current["availablePlaces"] === availablePlaces &&
      current["availableBags"] === availableBags
    ) {
      return;
    }

    if (availablePlaces !== "0") {
      query = {
        ...query,
        ["availablePlaces"]: availablePlaces as string,
      };
    } else {
      delete query["availablePlaces"];
    }

    if (availableBags !== "0") {
      query = {
        ...query,
        ["availableBags"]: availableBags as string,
      };
    } else {
      delete query["availableBags"];
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url, { scroll: false });
    setOpen(false);
  };

  const updateFilters = (shouldIncrease: boolean, isPlaces: boolean) => {
    if (isPlaces) {
      if (shouldIncrease && parseInt(availablePlaces as string) < 4) {
        setAvailablePlaces((curr) => parseInt(curr as string) + 1);
      } else if (!shouldIncrease && parseInt(availablePlaces as string) > 1) {
        setAvailablePlaces((curr) => parseInt(curr as string) - 1);
      }
    } else {
      if (shouldIncrease && parseInt(availableBags as string) < 4) {
        setAvailableBags((curr) => parseInt(curr as string) + 1);
      } else if (!shouldIncrease && parseInt(availableBags as string) > 1) {
        setAvailableBags((curr) => parseInt(curr as string) - 1);
      }
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="background" className="flex items-center gap-2">
          <FilterIcon />
          Filter
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[140px] p-0" align="end">
        <Command>
          <CommandList>
            <CommandGroup heading="Filters">
              <CommandItem className="flex flex-col justify-start gap-1">
                <p className="text-xs w-full">Number of seats</p>
                <div className="flex items-center gap-2 w-full">
                  <CircleMinus
                    size={20}
                    className={cn(
                      "cursor-pointer",
                      availablePlaces === 1 &&
                        "text-muted-foreground opacity-50 cursor-default"
                    )}
                    onClick={() => updateFilters(false, true)}
                  />
                  {availablePlaces}
                  {/* TODO: change the compare value for the one of the max available places */}
                  <CirclePlus
                    size={20}
                    className={cn(
                      "cursor-pointer",
                      (availablePlaces as number) > 3 &&
                        "text-muted-foreground opacity-50 cursor-default"
                    )}
                    onClick={() => updateFilters(true, true)}
                  />
                </div>
              </CommandItem>
              <CommandItem className="flex flex-col justify-start gap-1">
                <p className="text-xs w-full">Number of bags</p>
                <div className="flex items-center gap-2 w-full">
                  <CircleMinus
                    size={20}
                    className={cn(
                      "cursor-pointer",
                      availableBags === 1 &&
                        "text-muted-foreground opacity-50 cursor-default"
                    )}
                    onClick={() => updateFilters(false, false)}
                  />
                  {availableBags}
                  {/* TODO: change the compare value for the one of the max available bags */}
                  <CirclePlus
                    size={20}
                    className={cn(
                      "cursor-pointer",
                      (availableBags as number) > 3 &&
                        "text-muted-foreground opacity-50 cursor-default"
                    )}
                    onClick={() => updateFilters(true, false)}
                  />
                </div>
              </CommandItem>
            </CommandGroup>
            <Button
              className="w-full rounded-e-none rounded-t-none"
              variant="accent"
              onClick={submitFilters}
            >
              Filter
            </Button>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
