import { SiteHeader } from "@/components/navigations/site-header";
import { cn } from "@/lib/utils";

type StackedLayoutProps = {
	className?: string;
	children: React.ReactNode;
};

const StackedLayout = ({ className, children, ...props }: StackedLayoutProps) => {
	return (
		<div
			className={cn("flex flex-col min-h-screen bg-background", className)}
			{...props}>
			<SiteHeader />

			<main className="flex-1">{children}</main>
		</div>
	);
};

export { StackedLayout };
