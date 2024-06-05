import { Container } from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import HeroImage from '@/public/home-hero.png';
import { LocaleProps } from '@/types';

export const Hero = () => {
  const hero = useTranslations('home.hero');
  const locale = useLocale() as LocaleProps;

  return (
    <Container>
      <div className="w-full h-[500px] sm:h-[600px] md:h-[700px] relative">
        <div className="absolute size-full z-10 bg-gradient-to-br from-background/80 md:from-background/70 to-background/0" />
        <Image
          alt="mercedes benz car"
          src={HeroImage}
          placeholder="blur"
          fill
          className="object-cover object-center rounded-xl"
        />
        <div className="absolute z-20 space-y-8 p-6 sm:p-8 md:p-16 lg:p-24 w-full">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold max-w-md"
            style={{ fontFamily: 'Times New Roman' }}
          >
            {locale === 'en' ? (
              <>
                The Excelence of{' '}
                <span className="text-accent">Being Driven</span>
              </>
            ) : (
              <>
                <span className="text-accent">A Excelência de</span> Ser
                Conduzido
              </>
            )}
          </h1>
          <p className="text-sm text-foreground/80 max-w-md">
            {hero('subtitle')}
          </p>
          <Button variant="accent" asChild>
            <Link href={`/${locale}/contacts`}>{hero('button')}</Link>
          </Button>
        </div>
      </div>
    </Container>
  );
};
