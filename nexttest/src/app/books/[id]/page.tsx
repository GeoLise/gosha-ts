"use client";

import { use, useEffect, useState } from "react";

export default function Books({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const resolvedParams = use(params);

	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log(count);
	}, [count]);

	useEffect(() => {
		console.log("test");
	}, []);

	return (
		<div className="">
			<button onClick={() => setCount(count + 1)}>Click me</button>
			<p>{count}</p>

			<p className="text-5xl">Book {resolvedParams.id}</p>
		</div>
	);
}
