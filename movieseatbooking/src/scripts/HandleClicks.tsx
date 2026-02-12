import { useCallback } from "react";

type SetSelectedSeatKeys = React.Dispatch<React.SetStateAction<string[]>>;

export default function useHandleSeatClick(setSelectedSeatKeys?: SetSelectedSeatKeys) {
	return useCallback(
		(e: React.MouseEvent<HTMLDivElement>) => {
			const target = e.target as HTMLElement | null;
			const seatEl = target?.closest?.(".seat") as HTMLDivElement | null;

			if (!seatEl) return;
			if (seatEl.classList.contains("occupied")) return;

			const seatKey = seatEl.dataset.seatkey;
			if (!seatKey) return;

			const isSelectedNow = seatEl.classList.toggle("selected");

			if (!setSelectedSeatKeys) return;

			setSelectedSeatKeys((prev) => {
				const next = new Set(prev);
				if (isSelectedNow) next.add(seatKey);
				else next.delete(seatKey);
				return [...next];
			});
		},
		[setSelectedSeatKeys]
	);
}