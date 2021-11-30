import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Pick, PickProps } from "../pick";

interface PickButtonProps extends TouchableOpacityProps, PickProps {}

function PickButton({ colors, icon, size, ...props }: PickButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.6} {...props}>
      <Pick colors={colors} icon={icon} size={size} />
    </TouchableOpacity>
  );
}

export { PickButton };
