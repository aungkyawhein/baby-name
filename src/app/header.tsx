import Link from "next/link";

export default function Header() {
  return (
    <h1 className="text-lg text-zinc-600 dark:text-zinc-200">
      <Link href='/'>Baby Name</Link>
    </h1>
  )
}
