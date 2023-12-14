import { FC, ReactNode, MouseEvent, CSSProperties } from "react";

interface ButtonProps {
  handleEventClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
  size?: number;
  className?: string;
  style?: CSSProperties;
}

export const MenuButton: FC<ButtonProps> = ({
  handleEventClick,
  children,
  size,
  className,
  style,
}) => {
  const buttonStyle: CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    ...style,
  };

  return (
    <button
      style={buttonStyle}
      className={`${className} hover:bg-slate-200 rounded-full flex-center`}
      onClick={handleEventClick}
    >
      {children}
    </button>
  );
};
