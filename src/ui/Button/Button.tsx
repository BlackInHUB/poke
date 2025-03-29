import React from 'react';
import { Btn } from './Button.styled';
import StyledIcon from '../StyledIcon/StyledIcon';

type ButtonProps = {
  variant: 'dark' | 'light';
  handleClick?: () => void;
  children?: React.ReactNode;
  Icon?: React.ElementType;
  iconW?: string;
  iconH?: string;
  fontSize?: string;
  iconLeft?: boolean;
  width?: string;
};

export const Button = ({
  fontSize,
  Icon,
  iconH,
  iconW,
  children,
  variant,
  handleClick,
  iconLeft = false,
  width = '100%',
}: ButtonProps) => {
  return (
    <Btn onClick={handleClick} $variant={variant} $fontSize={fontSize} $width={width}>
      {Icon && iconLeft && <StyledIcon Icon={Icon} width={iconW} height={iconH} />}
      {children}
      {Icon && !iconLeft && <StyledIcon Icon={Icon} width={iconW} height={iconH} />}
    </Btn>
  );
};
