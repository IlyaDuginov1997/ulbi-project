import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';

import DarkTheme from 'shared/assets/icons/theme-dark.svg';
import LightTheme from 'shared/assets/icons/theme-light.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { className } = props;

  const { toggleTheme, theme } = useTheme();

  return (
    <Button
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
      theme={ButtonTheme.CLEAR}
    >
      {theme === Theme.DARK ? <DarkTheme /> : <LightTheme />}

    </Button>
  );
};
