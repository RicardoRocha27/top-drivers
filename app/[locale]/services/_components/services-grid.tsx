import { Container } from '@/components/shared/container';
import { ServiceItem } from './service-item';
import { useTranslations } from 'next-intl';

import Executive1Image from '@/public/executive-1.jpg';
import Executive2Image from '@/public/executive-2.jpg';
import Tours1Image from '@/public/tours-1.jpg';
import Tours2Image from '@/public/tours-2.jpg';
import NightLife1Image from '@/public/nightlife-1.jpg';
import NightLife2Image from '@/public/nightlife-2.jpg';
import Events1Image from '@/public/events-1.jpg';
import Events2Image from '@/public/events-2.jpg';

export const ServicesGrid = () => {
  const t = useTranslations('services.items');

  return (
    <Container>
      <div className="my-32 space-y-32">
        <div className="bg-secondary rounded-lg w-full pt-16 pb-16 lg:pb-32 px-4">
          <div className="max-w-6xl mx-auto">
            <ServiceItem
              firstImageUrl={Executive1Image}
              secondImageUrl={Executive2Image}
              title={t('executive.title')}
              subtitle={t('executive.subtitle')}
              firstDescriptionTitle={t('executive.firstDescriptionTitle')}
              firstDescription={t('executive.firstDescription')}
              secondDescriptionTitle={t('executive.secondDescriptionTitle')}
              secondDescription={t('executive.secondDescription')}
              thirdDescriptionTitle={t('executive.thirdDescriptionTitle')}
              thirdDescription={t.raw('executive.thirdDescription')}
              id="executive"
              hasExtra
            />
          </div>
        </div>
        <div className="max-w-6xl mx-auto">
          <ServiceItem
            firstImageUrl={Tours1Image}
            secondImageUrl={Tours2Image}
            title={t('tours.title')}
            subtitle={t('tours.subtitle')}
            firstDescriptionTitle={t('tours.firstDescriptionTitle')}
            firstDescription={t('tours.firstDescription')}
            secondDescriptionTitle={t('tours.secondDescriptionTitle')}
            secondDescription={t('tours.secondDescription')}
            thirdDescriptionTitle={t('tours.thirdDescriptionTitle')}
            thirdDescription={t.raw('tours.thirdDescription')}
            id="tours"
            isReversed
            hasExtra
          />
        </div>
        <div className="bg-secondary rounded-lg w-full pt-16 pb-32 px-4">
          <div className="max-w-6xl mx-auto">
            <ServiceItem
              firstImageUrl={NightLife1Image}
              secondImageUrl={NightLife2Image}
              title={t('nightLife.title')}
              subtitle={t('nightLife.subtitle')}
              firstDescriptionTitle={t('nightLife.firstDescriptionTitle')}
              firstDescription={t('nightLife.firstDescription')}
              secondDescriptionTitle={t('nightLife.secondDescriptionTitle')}
              secondDescription={t('nightLife.secondDescription')}
              id="night-life"
            />
          </div>
        </div>
        <div className="max-w-6xl mx-auto">
          <ServiceItem
            firstImageUrl={Events1Image}
            secondImageUrl={Events2Image}
            title={t('weddings.title')}
            subtitle={t('weddings.subtitle')}
            firstDescriptionTitle={t('weddings.firstDescriptionTitle')}
            firstDescription={t('weddings.firstDescription')}
            secondDescriptionTitle={t('weddings.secondDescriptionTitle')}
            secondDescription={t('weddings.secondDescription')}
            id="weddings"
            isReversed
          />
        </div>
      </div>
    </Container>
  );
};
