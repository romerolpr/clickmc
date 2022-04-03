import { useSelector, useDispatch } from "react-redux";

export function useRedux() {

    const dispatch = useDispatch()
    
    const formValues = useSelector( (state) => state.formValues);
    const userValues = useSelector( (state) => state.userValues);

    return { 
        formValues,
        userValues,
        dispatch 
    }
}