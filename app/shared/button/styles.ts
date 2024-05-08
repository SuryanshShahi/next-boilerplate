const styles = {
  buttonClass: (size?: string, className?: string, isDisabled?: boolean) =>
    `h-max text-white bg-primary duration-500 p-2 px-5 ${className} ${
      isDisabled
        ? "cursor-not-allowed bg-gray-200 !text-[#A3A3A3]"
        : "hover:bg-priamry/90"
    } ${
      size === "xs"
        ? "text-xs"
        : size === "sm"
        ? "text-sm"
        : size === "lg"
        ? "text-lg"
        : size === "xl"
        ? "text-xl"
        : ""
    }`,
};

export default styles;
