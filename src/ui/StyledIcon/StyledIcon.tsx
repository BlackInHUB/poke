import { IconComponent } from './StyledIcon.styled';

type IconProps = {
  width?: string;
  height?: string;
  fill?: string;
  Icon: React.ElementType;
};

const StyledIcon = ({ width, height, fill, Icon }: IconProps) => {
  return <IconComponent as={Icon} $width={width} $height={height} $fill={fill} />;
};

export default StyledIcon;
