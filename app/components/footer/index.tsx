import Button from "@/app/shared/button/Button";
import React, { FC, PropsWithChildren } from "react";
import { BsArrowRight } from "react-icons/bs";
interface IFooter {
  btnName?: string;
  styleIcon?: string;
  icon?: any;
  className?: string;
}
const Footer: FC<PropsWithChildren<IFooter>> = ({
  children,
  btnName,
  icon,
  styleIcon,
  className,
}) => {
  return (
    <div
      className={`p-5 shadow-footer rounded-2xl flex items-center justify-between ${className}`}
    >
      {children}
      <Button
        className="w-full"
        icon={icon ?? <BsArrowRight size={18} />}
        styleIcon={styleIcon}
      >
        {btnName ?? "Continue"}
      </Button>
    </div>
  );
};

export default Footer;
