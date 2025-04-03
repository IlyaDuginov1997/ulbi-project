import React, {FC} from 'react'
import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss';
import {Theme, useTheme} from "app/providers/ThemeProvider";

import DarkTheme from 'shared/assets/icons/theme-dark.svg'
import LightTheme from 'shared/assets/icons/theme-light.svg'

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const {className} = props;

    const {toggleTheme, theme} = useTheme();


    return (
      <div className={classNames(cls.ThemeSwitcher, {}, [className])}>
          <button onClick={toggleTheme}>
              {theme === Theme.DARK ? <DarkTheme /> : <LightTheme/>}
          </button>
      </div>

  )
};