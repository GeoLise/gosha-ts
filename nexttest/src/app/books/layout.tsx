export default function BooksLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="p-4 rounded-3xl bg-stone-50 container text-stone-900">
			{children}
		</div>
	);
}
