import popupTypes from './types/popup.types';

export function loginPopupVisibility(bool) {
    return {
        type: popupTypes.SHOW_LOGIN_POPUP,
        loginPopupVisibility: bool
    };
}
 
export function seatPopupVisibility(bool) {
    return {
        type: popupTypes.SHOW_SEAT_POPUP,
        seatPopupVisibility: bool
    };
}
 
export function seatTitleEditing(bool) {
    return {
        type: popupTypes.TITLE_EDITING,
        seatTitleEditing: bool
    };
}
 