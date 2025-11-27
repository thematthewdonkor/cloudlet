import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo.png"
        alt="Logo"
        className="object-cover cursor-pointer"
        width={140}
        height={140}
      />
    </Link>
  );
};
