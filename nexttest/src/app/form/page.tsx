"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import {
	Form,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

const BookSchema = z.object({
	title: z
		.string({
			message: "Введите название книги",
		})
		.min(1, "Название книги должно быть длиной не менее 1 символа"),
	description: z
		.string({
			message: "Введите описание книги",
		})
		.min(1, "Описание книги должно быть длиной не менее 1 символа"),
});

export default function FormPage() {
	const form = useForm({
		resolver: zodResolver(BookSchema),
		defaultValues: {} as z.infer<typeof BookSchema>,
	});

	const onSubmit = (data: z.infer<typeof BookSchema>) => {
		alert(JSON.stringify(data));
	};

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit, (errors) => {
					console.log(errors);
				})}
				className="space-y-4 container mx-auto"
			>
				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem>
							<FormLabel>название книги</FormLabel>
							<Input {...field} />
							<FormDescription></FormDescription>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="description"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Описание книги</FormLabel>
							<Textarea {...field} />
							<FormDescription></FormDescription>
						</FormItem>
					)}
				/>
				<Button>Отправить</Button>
			</form>
		</Form>
	);
}
