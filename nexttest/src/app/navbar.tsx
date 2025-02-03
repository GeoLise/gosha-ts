import Link from "next/link";

export default function Navbar() {
	return (
		<div className="flex gap-2 items-center">
			<Link href="/">Home</Link>
			<Link href="/books">Books</Link>
			<Link href="/books/test">test books</Link>
		</div>
	);
}
