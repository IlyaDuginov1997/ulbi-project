import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, LinkThemes } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>

      <div className={cls.links}>
        <AppLink theme={LinkThemes.SECONDARY} to="/">Home</AppLink>
        <AppLink theme={LinkThemes.SECONDARY} to="/about">About</AppLink>
      </div>
    </div>
  );
};
