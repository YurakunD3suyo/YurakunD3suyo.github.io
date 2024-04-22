import Link from "next/link";


export function Button({ children, href }: { children: React.ReactNode, href: string }) {
    return <Link href={href} className="flex p-2 border border-gray-100 bg-gray-100 rounded-xl justify-between gap-4 opacity-80 items-center hover:bg-gray-200 hover:border-gray-200">
        {children}
    </Link>

}