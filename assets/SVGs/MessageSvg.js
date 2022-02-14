import * as React from "react";
import Svg, { Path } from "react-native-svg";

const MessageSvg = (props) => {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="m17.268 9.061-4.266 3.434a2.223 2.223 0 0 1-2.746 0L5.954 9.061"
        stroke="#868686"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M6.888 3.5h9.428c1.36.015 2.653.59 3.58 1.59a5.017 5.017 0 0 1 1.326 3.704v6.528a5.017 5.017 0 0 1-1.326 3.704 4.957 4.957 0 0 1-3.58 1.59H6.888C3.968 20.616 2 18.241 2 15.322V8.794C2 5.875 3.968 3.5 6.888 3.5Z"
        stroke="#868686"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default MessageSvg;
