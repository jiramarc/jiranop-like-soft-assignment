import { ReminderForm } from "@/components/forms/reminder-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ReminderCreateCardProps = React.HTMLAttributes<HTMLDivElement> & {};

const ReminderCreateCard = ({ className, ...props }: ReminderCreateCardProps) => {
	return (
		<Card
			className={cn("w-full lg:max-w-md", className)}
			{...props}>
			<CardHeader>
				<CardTitle>Add new reminder</CardTitle>
				<CardDescription>Take a moment to plan your day</CardDescription>
			</CardHeader>
			<CardContent>
				<ReminderForm
					actionButtonLabel="Remind me"
					actionButtonLoadingLabel="Adding reminder..."
					cancelButtonLabel="Reset"
					selectedReminder={undefined}
				/>
			</CardContent>
		</Card>
	);
};

export { ReminderCreateCard };
