import { Container } from '@/components/shared/container';
import { BannerIcon } from './banner-icon';
import { CalendarCheck, Handshake, ShieldCheck, UserCheck } from 'lucide-react';

export const Banner = () => {
  return (
    <Container>
      <div className="bg-secondary rounded-lg w-full py-16 px-4 my-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 max-w-6xl mx-auto">
          <BannerIcon
            icon={<ShieldCheck className="size-8" />}
            titleKeyword="banner1.title"
            descriptionKeyword="banner1.description"
            delayTime={1}
          />
          <BannerIcon
            icon={<Handshake className="size-8" />}
            titleKeyword="banner2.title"
            descriptionKeyword="banner2.description"
            delayTime={3}
          />
          <BannerIcon
            icon={<UserCheck className="size-8" />}
            titleKeyword="banner3.title"
            descriptionKeyword="banner3.description"
            delayTime={5}
          />
          <BannerIcon
            icon={<CalendarCheck className="size-8" />}
            titleKeyword="banner4.title"
            descriptionKeyword="banner4.description"
            delayTime={7}
          />
        </div>
      </div>
    </Container>
  );
};
