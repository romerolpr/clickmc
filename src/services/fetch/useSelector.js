import { useSelector as selector } from "react-redux";

export function useSelector() {

    const formValues = selector( (state) => state.formValues);

    return { formValues }

}