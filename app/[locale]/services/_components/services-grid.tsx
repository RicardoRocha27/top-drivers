import { Container } from '@/components/shared/container';
import { ServiceItem } from './service-item';
import { useTranslations } from 'next-intl';

export const ServicesGrid = () => {
  const t = useTranslations('services.items');

  return (
    <Container>
      <div className="my-32 space-y-32">
        <div className="bg-secondary rounded-lg w-full pt-16 pb-16 lg:pb-32 px-4">
          <div className="max-w-6xl mx-auto">
            <ServiceItem
<<<<<<< Updated upstream
              firstImageUrl="/home-hero.png"
              secondImageUrl="/home-hero.png"
              title={t("executive.title")}
              subtitle={t("executive.subtitle")}
              firstDescriptionTitle={t("executive.firstDescriptionTitle")}
              firstDescription={t("executive.firstDescription")}
              secondDescriptionTitle={t("executive.secondDescriptionTitle")}
              secondDescription={t("executive.secondDescription")}
=======
              firstImageUrl="/home-hero.jpg"
              secondImageUrl="/home-hero.jpg"
              title={t('executive.title')}
              subtitle={t('executive.subtitle')}
              firstDescriptionTitle={t('executive.firstDescriptionTitle')}
              firstDescription={t('executive.firstDescription')}
              secondDescriptionTitle={t('executive.secondDescriptionTitle')}
              secondDescription={t('executive.secondDescription')}
              thirdDescriptionTitle={t('executive.thirdDescriptionTitle')}
              thirdDescription={t('executive.thirdDescription')}
>>>>>>> Stashed changes
              id="executive"
              hasExtra
            />
          </div>
        </div>
        <div className="max-w-6xl mx-auto">
          <ServiceItem
<<<<<<< Updated upstream
            firstImageUrl="/home-hero.png"
            secondImageUrl="/home-hero.png"
            title={t("weddings.title")}
            subtitle={t("weddings.subtitle")}
            firstDescriptionTitle={t("weddings.firstDescriptionTitle")}
            firstDescription={t("weddings.firstDescription")}
            secondDescriptionTitle={t("weddings.secondDescriptionTitle")}
            secondDescription={t("weddings.secondDescription")}
=======
            firstImageUrl="/home-hero.jpg"
            secondImageUrl="/home-hero.jpg"
            title={t('weddings.title')}
            subtitle={t('weddings.subtitle')}
            firstDescriptionTitle={t('weddings.firstDescriptionTitle')}
            firstDescription={t('weddings.firstDescription')}
            secondDescriptionTitle={t('weddings.secondDescriptionTitle')}
            secondDescription={t('weddings.secondDescription')}
>>>>>>> Stashed changes
            id="weddings"
            isReversed
          />
        </div>
        <div className="bg-secondary rounded-lg w-full pt-16 pb-32 px-4">
          <div className="max-w-6xl mx-auto">
            <ServiceItem
<<<<<<< Updated upstream
              firstImageUrl="/home-hero.png"
              secondImageUrl="/home-hero.png"
              title={t("tours.title")}
              subtitle={t("tours.subtitle")}
              firstDescriptionTitle={t("tours.firstDescriptionTitle")}
              firstDescription={t("tours.firstDescription")}
              secondDescriptionTitle={t("tours.secondDescriptionTitle")}
              secondDescription={t("tours.secondDescription")}
=======
              firstImageUrl="/home-hero.jpg"
              secondImageUrl="/home-hero.jpg"
              title={t('tours.title')}
              subtitle={t('tours.subtitle')}
              firstDescriptionTitle={t('tours.firstDescriptionTitle')}
              firstDescription={t('tours.firstDescription')}
              secondDescriptionTitle={t('tours.secondDescriptionTitle')}
              secondDescription={t('tours.secondDescription')}
              thirdDescriptionTitle={t('tours.thirdDescriptionTitle')}
              thirdDescription={t('tours.thirdDescription')}
>>>>>>> Stashed changes
              id="tours"
              hasExtra
            />
          </div>
        </div>
        <div className="max-w-6xl mx-auto">
          <ServiceItem
<<<<<<< Updated upstream
            firstImageUrl="/home-hero.png"
            secondImageUrl="/home-hero.png"
            title={t("nightLife.title")}
            subtitle={t("nightLife.subtitle")}
            firstDescriptionTitle={t("nightLife.firstDescriptionTitle")}
            firstDescription={t("nightLife.firstDescription")}
            secondDescriptionTitle={t("nightLife.secondDescriptionTitle")}
            secondDescription={t("nightLife.secondDescription")}
=======
            firstImageUrl="/home-hero.jpg"
            secondImageUrl="/home-hero.jpg"
            title={t('nightLife.title')}
            subtitle={t('nightLife.subtitle')}
            firstDescriptionTitle={t('nightLife.firstDescriptionTitle')}
            firstDescription={t('nightLife.firstDescription')}
            secondDescriptionTitle={t('nightLife.secondDescriptionTitle')}
            secondDescription={t('nightLife.secondDescription')}
>>>>>>> Stashed changes
            id="night-life"
            isReversed
          />
        </div>
      </div>
    </Container>
  );
};
