import React, {ButtonHTMLAttributes, FC} from 'react'
import {classNames} from "shared/lib/classNames/classNames";
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear'
}


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ButtonTheme;
    className?: string;
};

export const Button: FC<ButtonProps> = (props) => {
  const {className, children, theme, ...otherProps} = props;

  return (
    <button
        {...otherProps}
        className={classNames(cls.Button, {}, [className, cls[theme]])}
    >
        {children}
    </button>
  )
};