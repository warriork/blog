import { usePathname } from "next/navigation";

const useCurrentPage = (href: string) => {
  const pathname = usePathname();
  return pathname === href;
};
export default useCurrentPage;
