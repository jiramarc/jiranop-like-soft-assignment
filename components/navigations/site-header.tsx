import { ThemeSwitcher } from "@/components/switchers/theme-swticher";
import { cn } from "@/lib/utils";

type SiteHeaderProps = React.HTMLAttributes<HTMLHeadElement> & {};

const SiteHeader = ({ className, children, ...props }: SiteHeaderProps) => {
	return (
		<header
			className={cn("sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", className)}
			{...props}>
			<div className="flex items-center h-14 max-w-screen-2xl container">
				{/* <NonMobileTopNavigationBar /> */}
				{/* <MobileTopNavigationBar /> */}
				<div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
					<div className="flex-1 w-full md:w-auto md:flex-none">{/* <MainCommandMenu /> */}</div>
					<div className="flex items-center">
						{/* THEME SWITCHER */}
						<ThemeSwitcher />
					</div>
				</div>
			</div>
		</header>
	);
};

export { SiteHeader };
