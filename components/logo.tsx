import Image from "next/image";

export const Logo = () => {
  return (
    <div className="relative">
      <Image src="/images/logo.png" alt="Logo" fill className="object-cover" />;
    </div>
  );
};
