export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col gap-8">
			<p className="text-8xl font-semibold">АВторизация</p>
			{children}
		</div>
	);
}
