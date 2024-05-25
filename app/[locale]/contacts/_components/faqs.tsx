import { Header } from '@/components/shared/header';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useTranslations } from 'next-intl';

export const Faqs = () => {
  const t = useTranslations('contacts.faqs.items');
  return (
    <div className="my-32 max-w-6xl mx-auto space-y-8">
      <Header translationKeyword="contacts.faqs" />
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>{t('question1.question')}</AccordionTrigger>
          <AccordionContent>{t('question1.answer')}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>{t('question2.question')}</AccordionTrigger>
          <AccordionContent>{t('question2.answer')}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>{t('question3.question')}</AccordionTrigger>
          <AccordionContent>{t('question3.answer')}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
