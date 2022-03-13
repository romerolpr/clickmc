import { _updateProgress } from "../../store/actions/form";
import { settingsForm } from "../../_settings/reducer/initialForm";

const identifyCases = ( dispatch, values ) => {

    const progress = values.progress

    switch (progress) {
        case 0:
        case 1:
            console.log(values)
            if (values.manualGeolocation == null) {
                dispatch(_updateProgress(0))
                return false;
            }
        case 2:
            if (values.name == null) {
                dispatch(_updateProgress(1))
                return false;
            }
        case 3:
            if (values.medical == null) {
                dispatch(_updateProgress(2))
                return false;
            }
        case 4:
            if (values.availableMedical == null || values.urlCode == null) {
                dispatch(_updateProgress(3))
                return false;
            }
    }

    return true;

}

const identifyProgress = ( dispatch, values, currentProgress ) => {

    const progress = values.progress

    switch (progress) {
        case 0:
            if (values.manualGeolocation != null 
                && currentProgress < 2) {
                dispatch(_updateProgress(1))
            } else {
                dispatch(_updateProgress(2))
            }
            break;
        case 1:
            if (values.name != null 
                && values.phone != null 
                && currentProgress < 2) {
                dispatch(_updateProgress(0))
            } else {
                dispatch(_updateProgress(progress + 1))
            }
            break;
        case 2:
            if (values.manualGeolocation != null 
                && values.name != null
                && values.phone != null 
                && currentProgress > 0) {
                dispatch(_updateProgress(1))
            } else {
                dispatch(_updateProgress(0))
            }
            break;
        case 3:
            if (values.manualGeolocation != null 
                && values.name != null 
                && values.medical == null) {
                    dispatch(_updateProgress(2))
                }
            break;
        case 4:
            if (values.manualGeolocation != null 
                && values.name != null 
                && values.medical == null 
                && values.availableMedical == null || values.urlCode == null) {
                    dispatch(_updateProgress(3))
                }
            break;
    }
}

const nextProgress = ( dispatch, values ) => {

    const progress = values.progress

    if (identifyCases( dispatch, values ) && progress < settingsForm.maxProgress) {
        console.log(`[redux] Progress has been increased to ${progress + 1}`)
        dispatch(_updateProgress(progress + 1))
    }

}

export { 
    nextProgress,
    identifyCases,
    identifyProgress,
}