// Types
import {
  SET_PLACE_FORM_DIALOG_OPEN,
  SET_SLIDESHOW_DIALOG_OPEN,
  SET_PLACE_DIALOG_OPEN,
  SET_MAP_THEME_DIALOG_OPEN,
} from "../types";

const initialState = {
  dialogsOpen: {
    placeForm: false,
    selectedPlace: false,
    mapTheme: false,
    slideshow: false,
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PLACE_FORM_DIALOG_OPEN:
      return {
        ...state,
        dialogsOpen: {
          ...state.dialogsOpen,
          placeForm: action.payload,
        },
      };

    case SET_PLACE_DIALOG_OPEN:
      return {
        ...state,
        dialogsOpen: {
          ...state.dialogsOpen,
          selectedPlace: action.payload,
        },
      };
    case SET_SLIDESHOW_DIALOG_OPEN:
      return {
        ...state,
        dialogsOpen: {
          ...state.dialogsOpen,
          slideshow: action.payload,
        },
      };
    case SET_MAP_THEME_DIALOG_OPEN:
      return {
        ...state,
        dialogsOpen: {
          ...state.dialogsOpen,
          mapTheme: action.payload,
        },
      };
    default:
      return state;
  }
}
