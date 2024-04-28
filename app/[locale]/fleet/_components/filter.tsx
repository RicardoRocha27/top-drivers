"use client";

import { Input } from "@/components/ui/input";
import { BriefcaseBusiness, Users } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import qs from "query-string";

export const Filter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const current = qs.parse(searchParams.toString());

  const [availablePlaces, setAvailablePlaces] = useState(
    current["availablePlaces"] || "1"
  );
  const [availableBags, setAvailableBags] = useState(
    current["availableBags"] || "1"
  );

  useEffect(() => {
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
        ["availablePlaces"]: availablePlaces,
      };
    } else {
      delete query["availablePlaces"];
    }

    if (availableBags !== "0") {
      query = {
        ...query,
        ["availableBags"]: availableBags,
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
  }, [availableBags, availablePlaces, router, current]);

  return (
    <div className="space-x-2 flex items-center gap-2">
      <div className="relative">
        <Users className="absolute top-1/2 -translate-y-1/2 left-2" size={16} />
        <Input
          type="number"
          className="pl-8 w-14"
          min={1}
          defaultValue={parseInt(availablePlaces as string)}
          onChange={(e) => setAvailablePlaces(e.target.value)}
        />
      </div>
      <div className="relative">
        <BriefcaseBusiness
          className="absolute top-1/2 -translate-y-1/2 left-2"
          size={16}
        />
        <Input
          type="number"
          className="pl-8 w-14"
          min={1}
          defaultValue={parseInt(availableBags as string)}
          onChange={(e) => setAvailableBags(e.target.value)}
        />
      </div>
    </div>
  );
};
