"use client";

import { NoReminderCard } from "@/components/cards/no-reminder-card";
import { ReminderCard } from "@/components/cards/reminder-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useReminder } from "@/hooks/use-reminder";

type ReminderListProps = {};

const ReminderList = ({}: ReminderListProps) => {
	const reminders = useReminder();

	return (
		<ScrollArea className="h-[500px] w-full">
			<div className="flex flex-col gap-4">
				{reminders.reminders.length > 0 ? (
					reminders.reminders.map((reminder, index) => (
						<ReminderCard
							key={index}
							reminder={reminder}
						/>
					))
				) : (
					<NoReminderCard />
				)}
			</div>
		</ScrollArea>
	);
};

export { ReminderList };
