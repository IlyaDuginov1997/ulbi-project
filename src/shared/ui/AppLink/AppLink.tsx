import React, {FC} from 'react'
import {classNames} from "shared/lib/classNames/classNames";
import cls from './AppLink.module.scss';
import {Link, LinkProps} from "react-router-dom";

export enum LinkThemes {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    theme?: LinkThemes;
    className?: string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
      className,
      to,
      children,
      theme= LinkThemes.PRIMARY,
      ...otherProps
  } = props;

  return (
    <Link
        {...otherProps}
        to={to}
        className={classNames(cls.AppLink, {}, [className, cls[theme]])}
    >
        {children}
    </Link>
  )
};