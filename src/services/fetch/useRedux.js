import { useSelector, useDispatch } from "react-redux";

export function useRedux() {

    const dispatch = useDispatch()
    const formValues = useSelector( (state) => state.formValues);

    return { formValues, dispatch }

}