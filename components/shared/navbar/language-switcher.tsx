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

export const LanguageSwitcher = () => {
  const router = useRouter();
  const locale = useLocale();

  const onLanguageChange = (localeProps: LocaleProps) => {
    router.replace(`/${localeProps}`);
  };

  return (
    <Select onValueChange={onLanguageChange} defaultValue={locale}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="pt">Portuguese</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
