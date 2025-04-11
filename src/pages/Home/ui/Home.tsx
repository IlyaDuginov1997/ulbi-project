import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Home: FC = () => {
  const { t, i18n } = useTranslation('home');

  return (
    <div>{t('Домой')}</div>
  );
};

export default Home;
