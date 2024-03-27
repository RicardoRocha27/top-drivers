"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

type LanguagesSwitcherProps = {
  languagesNames: {
    pt: string;
    en: string;
  };
};

export const LanguageSwitcher = ({
  languagesNames,
}: LanguagesSwitcherProps) => {
  const router = useRouter();
  const locale = useLocale();

  const onLanguageChange = (localeProps: LocaleProps) => {
    router.replace(`/${localeProps}`);
  };

  return (
    <Select onValueChange={onLanguageChange} defaultValue={locale}>
      <SelectTrigger className="w-[170px]">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="en">
            <span className="fi fi-gb mr-2"></span> {languagesNames.en}
          </SelectItem>
          <SelectItem value="pt">
            <span className="fi fi-pt mr-2"></span> {languagesNames.pt}
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
