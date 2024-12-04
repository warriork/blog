import Link from "next/link";

const HeaderLogin = () => {
  return (
    <div className="flex items-center">
      <Link href="/login">
        <p className="text-text-blue text-[16px] leading-[24px] flex items-center">
          <span>Log in</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 13l4-4m0 0l-4-4m4 4H3"
            />
          </svg>
        </p>
      </Link>
    </div>
  );
};
export default HeaderLogin;
