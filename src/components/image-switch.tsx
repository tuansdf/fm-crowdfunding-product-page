import Image from "next/image";

interface Props {
  mobileSrc: any;
  desktopSrc: any;
  alt: string;
}

export default function ImageSwitch({ mobileSrc, desktopSrc, alt }: Props) {
  return (
    <>
      <Image
        src={mobileSrc}
        alt={alt}
        className="w-full object-cover desktop:hidden"
      />
      <Image
        src={desktopSrc}
        alt={alt}
        className="hidden w-full object-cover desktop:block"
      />
    </>
  );
}
