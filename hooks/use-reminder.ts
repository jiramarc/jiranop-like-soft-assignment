import { create } from "zustand";

import { reminders, type PriorityLevel, type Reminder } from "@/components/forms/data";
import { ReminderFormSchema } from "@/components/forms/reminder-form";

type UseReminder = {
	reminders: Reminder[];
	selectedReminder: Reminder | undefined;
	selectReminder: (id: string) => void;
	addReminder: (reminder: ReminderFormSchema) => void;
	updateReminder: (id: string, reminder: ReminderFormSchema) => void;
	updateReminderPriority: (id: string, priority: PriorityLevel) => void;
	removeReminder: (id: string) => void;
};

const useReminder = create<UseReminder>((set) => ({
	reminders: reminders,
	selectedReminder: undefined,
	selectReminder: (id) =>
		set((state) => {
			return { selectedReminder: state.reminders.find((reminder) => reminder.id === id) };
		}),
	addReminder: (reminder) =>
		set((state) => {
			const newReminder = {
				...reminder,
				id: (state.reminders.length + 1).toString(),
			};

			return {
				reminders: [...state.reminders, newReminder],
			};
		}),
	updateReminder: (id, reminder) => {
		console.log(id, reminder);
		set((state) => {
			const newReminders = state.reminders.map((r) => (r.id === id ? { id, ...reminder } : r));
			return {
				reminders: newReminders,
			};
		});
	},
	updateReminderPriority: (id, priority) =>
		set((state) => {
			const newReminders = state.reminders.map((reminder) => (reminder.id === id ? { ...reminder, priority } : reminder));
			return {
				reminders: newReminders,
			};
		}),
	removeReminder: (id) =>
		set((state) => {
			const newReminders = state.reminders.filter((reminder) => reminder.id !== id);
			return {
				reminders: newReminders,
			};
		}),
}));

export { useReminder };
