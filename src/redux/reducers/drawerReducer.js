const initialState ={
    open: true
}

export default function drawerReducer(state = initialState, action) {
    switch(action.type){
        case 'DRAWER_TOGGLE' :
            return {
                open: !state.open
            }
        case 'DRAWER_CLOSED' :
            return {
                open: false
            }
        default:
            return state;
    }
}