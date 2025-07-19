"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Icons } from "@/components/icons"

const navItems = [
  { href: "/", label: "Farm", icon: Icons.home },
  { href: "/account", label: "Account", icon: Icons.user },
  { href: "/swap", label: "Swap", icon: Icons.swap },
  { href: "/withdraw", label: "Withdraw", icon: Icons.withdraw },
  { href: "/referral", label: "Share", icon: Icons.share },
]

export default function MobileNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-4 left-1/2 z-20 w-[calc(100%-2rem)] max-w-[calc(28rem-2rem)] -translate-x-1/2 transform">
      <div className="grid h-16 grid-cols-5 items-center rounded-full bg-white/80 shadow-xl backdrop-blur-md">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href
          return (
            <Link key={label} href={href} className="flex flex-col items-center justify-center" aria-label={label}>
              {isActive ? (
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gradient-start to-gradient-mid">
                  <Icon className="h-6 w-6 text-white" />
                </div>
              ) : (
                <Icon className="h-6 w-6 text-gray-400" />
              )}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
