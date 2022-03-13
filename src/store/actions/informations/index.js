import { 
    SET_PAGE_TITLE, 
    SET_PAGE_SUBTITLE 
} from "../";

const _setPageTitle = (title) => {
    return {
        type: SET_PAGE_TITLE,
        payload: title,
    }
}

const _setPageSubtitle = (subtitle) => {
    return {
        type: SET_PAGE_SUBTITLE,
        payload: subtitle,
    }
}

export {
    _setPageTitle,
    _setPageSubtitle
}