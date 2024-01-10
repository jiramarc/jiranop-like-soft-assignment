"use client";

import { create } from "zustand";

import { ReminderForm } from "@/components/forms/reminder-form";
import { Modal } from "@/components/modals/modal";
import { useReminder } from "@/hooks/use-reminder";

type UseReminderModal = {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
};

const useReminderModal = create<UseReminderModal>((set) => ({
	isOpen: false,
	selectedReminder: undefined,
	onOpen: () => {
		set({ isOpen: true });
	},
	onClose: () => set({ isOpen: false }),
}));

type ReminderModalProps = {};

const ReminderModal = ({}: ReminderModalProps) => {
	const reminderModal = useReminderModal();
	const reminders = useReminder();

	const title = reminders.selectedReminder ? "Edit reminder" : "Add reminder";
	const description = reminders.selectedReminder ? "Edit your reminder" : "Take a moment to plan your day";
	const actionButtonLabel = reminders.selectedReminder ? "Update reminder" : "Remind me";
	const actionButtonLoadingLabel = reminders.selectedReminder ? "Updating reminder..." : "Adding reminder...";

	return (
		<Modal
			title={title}
			description={description}
			isOpen={reminderModal.isOpen}
			onClose={reminderModal.onClose}>
			<ReminderForm
				selectedReminder={reminders.selectedReminder}
				actionButtonLabel={actionButtonLabel}
				actionButtonLoadingLabel={actionButtonLoadingLabel}
				cancelButtonLabel="Cancel"
				onCancel={reminderModal.onClose}
			/>
		</Modal>
	);
};

export { ReminderModal, useReminderModal };
