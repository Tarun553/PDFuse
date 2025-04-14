"use client"
import Link from "next/link";
import {cn} from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  children,
  classname
}: {
  href: string;
  children: React.ReactNode;
  classname?: string;
}) {
    const pathname = usePathname();
    const isActive = pathname === href || (href !=="/" && pathname.startsWith(href));
  return (
    <Link href={href} className={cn("text-sm transition-colors duration-200 text-gray-600 hover:text-rose-600", isActive && "text-rose-600", classname)}>
      {children}
    </Link>
  );
}