import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export type LocaleProps = 'en' | 'pt';

export type Fleet = {
  imageUrl: StaticImport;
  carName: string;
  carDescriptionLabel: string;
  availablePlaces: number;
  availableBags: number;
  images: StaticImport[];
};
