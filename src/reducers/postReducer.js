const NEWPOST = 'NEWPOST';
const GETPOST = 'GETPOST';

const initialState = {
    items: [],
    item: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GETPOST: {
            return {
                ...state,
                items: action.payload
            };
        };
        case NEWPOST: {
            return {
                ...state,
                item: action.payload
            };
        };
       
        default:
            return state;
    }
}