import { Spinner } from "@/components/spinners/spinner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FormActionProps = React.HTMLAttributes<HTMLDivElement> & {
	actionButtonLabel?: string;
	actionButtonLoadingLabel?: string;
	resetButtonLabel?: string;
	isLoading?: boolean;
	onCancel: () => void;
};

const FormAction = ({ actionButtonLabel = "Submit", actionButtonLoadingLabel = "Submitting", resetButtonLabel = "Reset", isLoading = false, onCancel, className, children, ...props }: FormActionProps) => {
	return (
		<div
			className={cn("flex flex-col-reverse sm:flex-row sm:justify-end gap-4", className)}
			{...props}>
			{/* FORM ACTION :: BUTTON :: CANCEL */}
			<Button
				disabled={isLoading}
				type="reset"
				variant="outline"
				onClick={onCancel}>
				{resetButtonLabel}
			</Button>

			{/* FORM ACTION :: BUTTON :: SUBMIT */}
			<Button
				disabled={isLoading}
				type="submit">
				{isLoading ? (
					<>
						<Spinner
							color="muted"
							className="mr-2"
							size="4"
						/>
						{actionButtonLoadingLabel}
					</>
				) : (
					<>{actionButtonLabel}</>
				)}
			</Button>
		</div>
	);
};

export { FormAction };
