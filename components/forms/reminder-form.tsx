"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { FormAction } from "@/components/forms/form-action";
import { useReminderModal } from "@/components/modals/reminder-modal";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useReminder } from "@/hooks/use-reminder";

import { priorities } from "./data";

type ReminderFormProps = {
	selectedReminder: ReminderFormSchema | undefined;
	actionButtonLabel?: string;
	actionButtonLoadingLabel?: string;
	cancelButtonLabel?: string;
	onCancel?: () => void;
};

const reminderFormSchema = z.object({
	reminder: z
		.string({
			required_error: "Reminder is required",
			invalid_type_error: "Reminder must be a string",
		})
		.min(1, { message: "Reminder must be at least 1 character(s)" }),
	priority: z.enum(["low", "medium", "high"]),
});

type ReminderFormSchema = z.infer<typeof reminderFormSchema>;

const ReminderForm = ({ selectedReminder, actionButtonLabel, actionButtonLoadingLabel, cancelButtonLabel, onCancel }: ReminderFormProps) => {
	const reminderModal = useReminderModal();
	const reminders = useReminder();

	const form = useForm<ReminderFormSchema>({
		resolver: zodResolver(reminderFormSchema),
		defaultValues: selectedReminder || {
			reminder: "",
			priority: "low",
		},
	});

	const onSubmit = (data: ReminderFormSchema) => {
		if (reminders.selectedReminder) {
			reminders.updateReminder(reminders.selectedReminder.id, data);
			reminderModal.onClose();
			toast.success("Reminder updated successfully");
		} else {
			reminders.addReminder(data);
			toast.success("Reminder added successfully");
		}
	};
	return (
		<Form {...form}>
			<form
				className="space-y-6"
				onSubmit={form.handleSubmit(onSubmit)}>
				{/* FIELD :: REMINDER */}
				<FormField
					control={form.control}
					name="reminder"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Remind me to...</FormLabel>
							<FormControl>
								<Input
									disabled={form.formState.isSubmitting}
									placeholder="e.g. Fix an issue #4477"
									{...field}
								/>
							</FormControl>
							<FormDescription></FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				{/* FIELD :: PRIORITY */}
				<FormField
					control={form.control}
					name="priority"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Priority</FormLabel>
							<Select
								onValueChange={field.onChange}
								defaultValue={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Select a priority" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									{priorities.map((priority, index) => (
										<SelectItem
											key={index}
											value={priority.value}
											className="flex items-center">
											{priority.label}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</FormItem>
					)}
				/>

				{/* FORM ACTION */}
				<FormAction
					actionButtonLabel={actionButtonLabel}
					actionButtonLoadingLabel={actionButtonLoadingLabel}
					resetButtonLabel={cancelButtonLabel}
					isLoading={form.formState.isSubmitting}
					onCancel={onCancel ? onCancel : form.reset}
				/>
			</form>
		</Form>
	);
};

export { ReminderForm, reminderFormSchema, type ReminderFormSchema };
