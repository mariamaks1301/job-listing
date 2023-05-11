
import { useSelector } from "react-redux";

import { selectVisiblePositions } from "./position-slice";
import { selectFilters } from "features/filter/filter-slice";

export const usePositions = () => {
    const currentFitlers = useSelector(selectFilters);
    const positions = useSelector((state) => selectVisiblePositions(state, currentFitlers));
    return positions;
}