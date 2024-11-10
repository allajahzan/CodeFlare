import { combineReducers, createStore } from "redux";

interface actionType {
    type: string,
    payload: any
}

export interface stateType {
    isSmall: boolean,
    isSideBarStudent: boolean,
    isShrinkSideBarStudent: boolean,
    isSideBarCounsellor: boolean,
    isShrinkSideBarCounsellor: boolean
}

// reducer function for student sideBarVisibility
const isSideBarStudent = (prevState: boolean = false, action: actionType) => {
    if (action.type === 'sidebarStudent') {
        return action.payload;
    }
    return prevState;
}

// reducer function for shrink student side bar
const isShrinkSideBarStudent = (prevState: boolean = localStorage.getItem('isSideBarStudentShriked') === "true" ? true : false, action: actionType) => {
    if (action.type === 'shrinkStudent') {
        return action.payload;
    }
    return prevState;
}

// reducer function for counsellor sideBarVisibility
const isSideBarCounsellor = (prevState: boolean = false, action: actionType) => {
    if (action.type === 'sidebarCounsellor') {
        return action.payload;
    }
    return prevState;
}

// reducer function for shrink counsellor side bar
const isShrinkSideBarCounsellor = (prevState: boolean = localStorage.getItem('isSideBarCounsellorShriked') === "true" ? true : false, action: actionType) => {
    if (action.type === 'shrinkCounsellor') {
        return action.payload;
    }
    return prevState;
}


// reducer function for resize
const isSmall = (prevState: boolean = false, action: actionType) => {
    if (action.type === 'resize') {
        return action.payload;
    }
    return prevState;
}


const appReducer = combineReducers({
    isSmall,
    isSideBarStudent,
    isShrinkSideBarStudent,
    isSideBarCounsellor,
    isShrinkSideBarCounsellor
})

const store = createStore(appReducer);

// actions----------------------------------------------

// action for student sideBar visibility
function sideBarStudentAction(payload: boolean) {
    return {
        type: 'sidebarStudent',
        payload: payload
    }
}

// action for shrink student sidebar
function shrinkSideBarStudentAction(payload: boolean) {
    return {
        type: 'shrinkStudent',
        payload: payload
    }
}

// action for counsellor sideBar visibility
function sideBarCounsellorAction(payload: boolean) {
    return {
        type: 'sidebarCounsellor',
        payload: payload
    }
}

// action for counsellor Counsellor sidebar
function shrinkSideBarCounsellorAction(payload: boolean) {
    return {
        type: 'shrinkCounsellor',
        payload: payload
    }
}

// action for resize
function resizeAction(payload: boolean) {
    return {
        type: 'resize',
        payload: payload
    }
}



export {
    store,
    resizeAction,
    sideBarStudentAction,
    shrinkSideBarStudentAction,
    sideBarCounsellorAction,
    shrinkSideBarCounsellorAction
}
