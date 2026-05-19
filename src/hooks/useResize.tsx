import { useCallback, useState } from "react";

interface UseResizeProps {
	resizeRef: React.RefObject<HTMLElement | null>;
	minWidth: number;
	maxWidth?: number;
	onResize?: (width: number) => void;
	onResizeEnd?: () => void;
}

export const useResize = ({
	resizeRef,
	minWidth,
	maxWidth,
	onResize,
	onResizeEnd,
}: UseResizeProps) => {
	const [isResizing, setIsResizing] = useState(false);

	const handleMouseDown = useCallback(
		(e: React.MouseEvent) => {
			e.preventDefault();
			e.stopPropagation();
			setIsResizing(true);
			const currentDocument = activeDocument;

			const startX = e.clientX;
			const startWidth =
				resizeRef.current?.getBoundingClientRect().width || 0;

			const handleMouseMove = (moveEvent: MouseEvent) => {
				if (!resizeRef.current) return;

				const deltaX = moveEvent.clientX - startX;
				let newWidth = startWidth + deltaX;

				if (newWidth < minWidth) newWidth = minWidth;
				if (maxWidth && newWidth > maxWidth) newWidth = maxWidth;

				resizeRef.current.style.width = `${newWidth}px`;
				onResize?.(newWidth);
			};

			const handleMouseUp = () => {
				setIsResizing(false);
				onResizeEnd?.();
				currentDocument.removeEventListener(
					"mousemove",
					handleMouseMove,
				);
				currentDocument.removeEventListener("mouseup", handleMouseUp);
				currentDocument.body.classList.remove("ace-is-resizing");
			};

			currentDocument.addEventListener("mousemove", handleMouseMove);
			currentDocument.addEventListener("mouseup", handleMouseUp);
			currentDocument.body.classList.add("ace-is-resizing");
		},
		[minWidth, maxWidth, resizeRef, onResize, onResizeEnd],
	);

	return {
		isResizing,
		handleMouseDown,
	};
};
