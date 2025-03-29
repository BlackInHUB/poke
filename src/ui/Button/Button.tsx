import React from 'react';
import { Btn } from './Button.styled';
import StyledIcon from '../StyledIcon/StyledIcon';

type ButtonProps = {
  type?: 'button' | 'submit';
  variant: 'dark' | 'light' | 'icon';
  handleClick?: () => void;
  children?: React.ReactNode;
  Icon?: React.ElementType;
  iconW?: string;
  iconH?: string;
  fontSize?: string;
  iconLeft?: boolean;
  iconFill?: string;
  width?: string;
};

export const Button = ({
  type = 'button',
  fontSize,
  Icon,
  iconH,
  iconW,
  children,
  variant,
  handleClick,
  iconLeft = false,
  iconFill,
  width = '100%',
}: ButtonProps) => {
  return (
    <Btn
      type={type}
      $iconFill={iconFill}
      onClick={handleClick}
      $variant={variant}
      $fontSize={fontSize}
      $width={width}
    >
      {Icon && iconLeft && <StyledIcon Icon={Icon} width={iconW} height={iconH} />}
      {children}
      {Icon && !iconLeft && <StyledIcon Icon={Icon} width={iconW} height={iconH} />}
    </Btn>
  );
};
