import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type NoReminderCardProps = React.HTMLAttributes<HTMLDivElement> & {
	displayText?: string;
};

const NoReminderCard = ({ displayText = "No Reminders 🎉", className, ...props }: NoReminderCardProps) => {
	return (
		<Card
			className={cn("", className)}
			{...props}>
			<CardHeader>
				<CardTitle className="text-center">{displayText}</CardTitle>
			</CardHeader>
		</Card>
	);
};

export { NoReminderCard };
