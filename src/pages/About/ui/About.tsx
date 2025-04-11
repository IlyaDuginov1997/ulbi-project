import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

type AboutPropsType = {};

const About: FC<AboutPropsType> = () => {
  const { t, i18n } = useTranslation('about');

  return (
    <div>{t('О нас')}</div>
  );
};

export default About;
