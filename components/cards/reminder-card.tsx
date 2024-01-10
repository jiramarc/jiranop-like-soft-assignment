"use client";

import { ChevronDownIcon, SquarePenIcon, StarIcon, Trash2Icon } from "lucide-react";
import { toast } from "sonner";

import { useReminderModal } from "@/components/modals/reminder-modal";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { useReminder } from "@/hooks/use-reminder";
import { cn } from "@/lib/utils";

import { priorities, type PriorityLevel, type Reminder } from "../forms/data";

type ReminderCardProps = React.HTMLAttributes<HTMLDivElement> & {
	reminder: Reminder;
};

const ReminderCard = ({ reminder, className, ...props }: ReminderCardProps) => {
	const reminderModal = useReminderModal();
	const reminders = useReminder();
	const Icon = priorities.find((p) => p.value === reminder.priority)?.icon || StarIcon;

	const handleUpdateReminder = (id: string) => {
		reminders.selectReminder(id);
		reminderModal.onOpen();
	};

	const handleUpdatePriority = (id: string, priority: PriorityLevel) => {
		reminders.updateReminderPriority(reminder.id, priority);
		toast.success("Priority updated successfully");
	};

	const handleDeleteReminder = (id: string) => {
		reminders.removeReminder(id);
		toast.success("Reminder deleted successfully");
	};

	return (
		<Card
			className={cn("", className)}
			{...props}>
			<CardHeader className="flex flex-row items-center justify-between">
				<div className="flex-1">
					<CardTitle>
						{reminder.id}. {reminder.reminder}
					</CardTitle>
				</div>
				<div className="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
					<Button
						variant="secondary"
						className="px-3 shadow-none">
						<Icon className="mr-2 h-4 w-4" />
						{reminder.priority.charAt(0).toUpperCase() + reminder.priority.slice(1)}
					</Button>
					<Separator
						orientation="vertical"
						className="h-[20px]"
					/>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								variant="secondary"
								className="px-2 shadow-none">
								<ChevronDownIcon className="h-4 w-4 text-secondary-foreground" />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							align="end"
							className="w-[200px]"
							forceMount>
							<DropdownMenuLabel>Priority</DropdownMenuLabel>
							<DropdownMenuSeparator />
							{priorities.map((priority, index) => (
								<DropdownMenuCheckboxItem
									key={index}
									checked={priority.value === reminder.priority}
									onSelect={() => handleUpdatePriority(reminder.id, priority.value)}>
									{priority.label}
								</DropdownMenuCheckboxItem>
							))}
							<DropdownMenuSeparator />
							<DropdownMenuItem onSelect={() => handleUpdateReminder(reminder.id)}>
								<SquarePenIcon className="mr-2 h-4 w-4" /> Edit
							</DropdownMenuItem>
							<DropdownMenuItem onSelect={() => handleDeleteReminder(reminder.id)}>
								<Trash2Icon className="mr-2 h-4 w-4" /> Delete
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</CardHeader>
		</Card>
	);
};

export { ReminderCard };
