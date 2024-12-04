import React from "react";
import Link from "next/link";

const HeaderLink: React.FC<{ href: string; text: string }> = ({
  href,
  text,
}) => (
  <Link href={href}>
    <p className="text-text-secondary text-[16px] leading-[24px] pl-[40px]">
      {text}
    </p>
  </Link>
);

export default HeaderLink;
