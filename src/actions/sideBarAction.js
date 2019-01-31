import {
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR
} from '../actionTypes';

const openSideBar = ({
  type: OPEN_SIDEBAR,
  isOpen: true
});

const closeSideBar = ({
  type: CLOSE_SIDEBAR,
  isOpen: false
});

export const hideSideBar = () => dispatch => dispatch(closeSideBar);
export const showSideBar = () => dispatch => dispatch(openSideBar);
