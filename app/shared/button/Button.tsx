import { FC, PropsWithChildren } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styles from "./styles";
interface IButton {
  className?: string;
  size?: "xs" | "sm" | "lg" | "xl";
  fullWidth?: boolean;
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
  toolTip?: string;
  isLoading?: boolean;
  disabled?: boolean;
  style?: any;
}

const Button: FC<PropsWithChildren<IButton>> = ({
  children,
  className,
  size,
  type,
  onClick,
  toolTip,
  isLoading,
  disabled,
  style,
}) => {
  return (
    <button
      style={style}
      type={type ?? "button"}
      className={styles.buttonClass(size, className, disabled)}
      onClick={onClick}
      title={toolTip}
    >
      {isLoading ? (
        <AiOutlineLoading3Quarters className="mx-auto h-6 animate-spin" />
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
