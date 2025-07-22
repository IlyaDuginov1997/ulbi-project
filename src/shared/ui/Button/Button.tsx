import React, { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ButtonTheme;
    className?: string;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className, children, theme = ButtonTheme.CLEAR, type = 'button', ...otherProps
  } = props;

  return (
    <button
      {...otherProps}
      type={type}
      className={classNames(cls.Button, {}, [className, cls[theme]])}
    >
      {children}
    </button>
  );
};
