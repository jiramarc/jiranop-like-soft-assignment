"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { DialogDescription } from "@radix-ui/react-dialog";

type ModalProps = React.HTMLAttributes<HTMLDivElement> & {
	title: string;
	description: string;
	isOpen: boolean;
	onClose: () => void;
};

const Modal = ({ title, description, isOpen, onClose, children }: ModalProps) => {
	const onChange = (open: boolean) => {
		// If the modal is closed, call the onClose function to close the modal
		if (!open) onClose();
	};

	return (
		<Dialog
			open={isOpen}
			onOpenChange={onChange}>
			<DialogContent>
				{/* MODAL :: HEADER */}
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
					<DialogDescription>{description}</DialogDescription>
				</DialogHeader>

				{/* MODAL :: CONTENT */}
				<ScrollArea className="h-auto max-h-96">
					<div className="px-1">{children}</div>
					<ScrollBar orientation="vertical" />
				</ScrollArea>
			</DialogContent>
		</Dialog>
	);
};

export { Modal };
