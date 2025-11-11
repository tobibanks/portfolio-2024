import React, { cloneElement, ComponentType } from "react";
import Animated from "./Animated"; // Replace with the correct path to the "Animated" component

type AnimatedToolsProps = {
  delay: number;
  stepSize: number;
  // We're passing components that accept a 'size' prop.
  children: React.ReactElement<
    React.ComponentProps<ComponentType<{ size?: number | string }>>
  >[];
  iconSize: number;
  className?: string;
};

const AnimatedTools: React.FC<AnimatedToolsProps> = ({
  delay,
  stepSize,
  children,
  iconSize,
  className,
}) => {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <Animated key={index} delay={delay + index * stepSize}>
          {/* This will no longer error */}
          {cloneElement(child, { size: iconSize })}
        </Animated>
      ))}
    </div>
  );
};

export default AnimatedTools;