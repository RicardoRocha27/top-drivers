import { useTranslations } from 'next-intl';
import React from 'react';

const FooterLinks = () => {
  const t = useTranslations('footer');
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div>
        <h3 className="mb-2 font-semibold">{t('links.title')}</h3>
        <div className="flex flex-col space-y-1">
          <a href="#" className="text-sm hover:underline">
            Biggie Rections
          </a>
          <a href="#" className="text-sm hover:underline">
            Tess Tickles
          </a>
          <a href="#" className="text-sm hover:underline">
            Zuck Mabaulz
          </a>
          <a href="#" className="text-sm hover:underline">
            Pooh See
          </a>
        </div>
      </div>

      <div>
        <h3 className="mb-2 font-semibold ">{t('socialMedia.title')}</h3>
        <div className="flex flex-col space-y-1">
          <a href="#" className="text-sm hover:underline">
            Biggie Rections
          </a>
          <a href="#" className="text-sm hover:underline">
            Tess Tickles
          </a>
          <a href="#" className="text-sm hover:underline">
            Zuck Mabaulz
          </a>
          <a href="#" className="text-sm hover:underline">
            Pooh See
          </a>
        </div>
      </div>

      <div>
        <h3 className="mb-2 font-semibold ">{t('contacts.title')}</h3>
        <div className="flex flex-col space-y-1">
          <a href="#" className="text-sm hover:underline">
            Biggie Rections
          </a>
          <a href="#" className="text-sm hover:underline">
            Tess Tickles
          </a>
          <a href="#" className="text-sm hover:underline">
            Zuck Mabaulz
          </a>
          <a href="#" className="text-sm hover:underline">
            Pooh See
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
