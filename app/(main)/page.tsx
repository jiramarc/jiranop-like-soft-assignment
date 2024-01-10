import { ReminderCreateCard } from "@/components/cards/reminder-create-card";
import { ReminderList } from "@/components/data-displays/reminder-list";
import { ReminderModal } from "@/components/modals/reminder-modal";
import { Typography } from "@/components/typographies/typography";

type HomePageProps = {};

const HomePage = ({}: HomePageProps) => {
	return (
		<section className="container">
			<div className="flex flex-col items-center justify-center pt-10 gap-10">
				{/* APPLICATION TITLE */}
				<Typography
					className="font-semibold text-3xl md:text-5xl"
					component="h3"
					variant="h3">
					Reminders
				</Typography>

				<div className="flex flex-col lg:flex-row gap-4 w-full">
					{/* REMINDER :: CREATE */}
					<ReminderCreateCard />

					{/* REMINDER :: LISTS */}
					<ReminderList />
				</div>
			</div>

			{/* REMINDER :: MODAL */}
			<ReminderModal />
		</section>
	);
};

export default HomePage;
