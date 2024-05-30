import { Container } from '@/components/shared/container';
import { Header } from '@/components/shared/header';
import { FleetGrid } from './fleet-grid';
import { useTranslations } from 'next-intl';

export const Fleet = () => {
  const t = useTranslations('home.fleet');

  return (
    <Container>
      <div className="rounded-lg bg-secondary py-16 px-4 my-32">
        <div className="max-w-6xl mx-auto space-y-28 md:space-y-12">
          <div className="gap-4 flex flex-col lg:flex-row justify-between">
            <div className="md:max-w-md">
              <Header translationKeyword="home.fleet" />
            </div>
          </div>
          <FleetGrid />
        </div>
        <div className="max-w-6xl mx-auto my-8">
          <p className="text-xs text-foreground/80">*{t('disclaimer')}</p>
        </div>
      </div>
    </Container>
  );
};
