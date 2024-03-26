import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  size: number;
};

export const Logo = ({ size }: LogoProps) => {
  return (
    <Link href="/">
      <Image width={size} height={size} alt="logo" src="/logo.png" />
    </Link>
  );
};
