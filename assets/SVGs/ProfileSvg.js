import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = (props) => {
  const { bgcolor, strokeColor, strokeOutlineColor } = props;
  return (
    <Svg
      width={24}
      height={24}
      fill={bgcolor}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle
        cx={11.579}
        cy={7.278}
        r={4.778}
        stroke={strokeColor}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M4 18.701a2.214 2.214 0 0 1 .22-.97c.457-.915 1.748-1.4 2.819-1.62a16.793 16.793 0 0 1 2.343-.33 25.059 25.059 0 0 1 4.385 0c.787.056 1.57.166 2.343.33 1.07.22 2.361.659 2.82 1.62a2.27 2.27 0 0 1 0 1.95c-.459.96-1.75 1.4-2.82 1.61-.772.172-1.555.286-2.343.34-1.188.1-2.38.118-3.57.054-.275 0-.54 0-.815-.055a15.43 15.43 0 0 1-2.334-.338c-1.08-.21-2.361-.65-2.828-1.611A2.28 2.28 0 0 1 4 18.7Z"
        stroke={strokeOutlineColor}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default SvgComponent;
