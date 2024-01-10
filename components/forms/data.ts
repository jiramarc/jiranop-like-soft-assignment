import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon, type LucideIcon } from "lucide-react";

export type PriorityLevel = "low" | "medium" | "high";
export type Priority = {
	label: string;
	value: PriorityLevel;
	icon: LucideIcon;
};

export const priorities: Priority[] = [
	{
		label: "Low",
		value: "low",
		icon: ArrowDownIcon,
	},
	{
		label: "Medium",
		value: "medium",
		icon: ArrowRightIcon,
	},
	{
		label: "High",
		value: "high",
		icon: ArrowUpIcon,
	},
];

export type Reminder = {
	id: string;
	reminder: string;
	priority: PriorityLevel;
};

export const reminders: Reminder[] = [
	{
		id: "1",
		reminder: "Learn HTML",
		priority: "low",
	},
	{
		id: "2",
		reminder: "Learn CSS",
		priority: "medium",
	},
	{
		id: "3",
		reminder: "Learn JavaScript",
		priority: "high",
	},
];
