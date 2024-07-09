"use client";
import Link from "next/link";
import { ComponentProps } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export function Nav({
  className,
  children,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <nav
      className={`flex items-center justify-between px-2 text-cream my-1 w-full ${className}`}
    >
      {children}
    </nav>
  );
}

interface NavLinkProps extends Omit<ComponentProps<typeof Link>, "className"> {
  className?: string;
}

export function NavLink({ className, href, ...rest }: NavLinkProps) {
  const pathname = usePathname();
  return (
    <Link
      {...rest}
      href={href}
      className={clsx(
        `p-2 text-cream font-bold hover:text-orange text-[14px] lg:text-lg ${className}`,
        href === pathname && "text-orange"
      )}
    />
  );
}
