import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 300 55" {...props}>
      <image width="300" height="55" href={isDark ? '/images/Naga/LogoTextNewWhite.png' : '/images/Naga/LogoTextNewWhite.png'} />
    </Svg>
  )
};

export default Logo;
