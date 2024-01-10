import { cva, type VariantProps } from "class-variance-authority";
import { Loader2Icon } from "lucide-react";

import { cn } from "@/lib/utils";

const spinnerVariants = cva("animate-spin", {
	variants: {
		color: {
			primary: "text-primary",
			secondary: "text-secondary",
			muted: "text-muted",
			accent: "text-accent",
			destructive: "text-destructive",
		},
		size: {
			"2": "h-2 w-2",
			"4": "h-4 w-4",
			"5": "h-5 w-5",
			"6": "h-6 w-6",
			"8": "h-8 w-8",
			"10": "h-10 w-10",
		},
	},
	defaultVariants: {
		color: "primary",
		size: "5",
	},
});

type SpinnerProps = VariantProps<typeof spinnerVariants> & {
	className?: string;
};

const Spinner = ({ className, color, size }: SpinnerProps) => {
	return <Loader2Icon className={cn(spinnerVariants({ color, size }), className)} />;
};

export { Spinner };
