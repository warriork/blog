import Image from "next/image";
import Link from "next/link";
import HeaderLink from "@/components/header-link/HeaderLink";
import HeaderLogin from "@/components/header-login/HeaderLogin";

const Header = () => {
  return (
    <header className="h-[56px] w-full bg-grey px-[225px] pt-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/public">
            <Image src="/images/logo.png" alt="logo" width={39} height={44} />
          </Link>
          <HeaderLink href="/public" text="Recent Articles" />
          <HeaderLink href="/about" text="About" />
        </div>

        <HeaderLogin />
      </div>
    </header>
  );
};

export default Header;
