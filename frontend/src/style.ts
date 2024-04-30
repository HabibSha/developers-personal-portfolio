const styles = {
  resContainer:
    "container mx-auto sm:container md:container lg:container xl:container",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  flexBetween: "flex justify-between items-center",

  paddingX: "px-6 sm:px-12",
  paddingY: "py-6 sm:py-12",

  borderBottom: "border-b-[.5px] border-colorIndigo",
};

export const footerSocial = {
  socialLinks: `w-9 h-9 hover:bg-[#200249] duration-300 ${styles.flexCenter} rounded-full cursor-pointer`,
};

export default styles;
