import { useDispatch as _dispatch } from "react-redux";

export function useDispatch() {

    const dispatch = _dispatch()

    return { dispatch }

}