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
    className, children, theme, type = 'button', ...otherProps
  } = props;

  return (
    <Button
      {...otherProps}
      type={type}
      className={classNames(cls.Button, {}, [className, cls[theme]])}
    >
      {children}
    </Button>
  );
};
