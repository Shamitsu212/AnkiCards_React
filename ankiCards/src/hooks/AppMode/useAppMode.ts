import { useAppDispatch } from "../../store/hooks";
import { setSelectedMode } from "../../store/Slices/AppDataSlice";

function useAppMode() {
    
    const dispatch = useAppDispatch();

    function setCreate() {
        dispatch(setSelectedMode("create"));
    }

    function setTrain() {
        dispatch(setSelectedMode("train"));
    }

    return { setCreate, setTrain}
}

export default useAppMode;