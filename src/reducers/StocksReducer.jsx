export default function (state = null, action) {
    switch (action.type) {
        case "GET_STOCKS":
            return action.payload
            break;
        default:
            return state;
    }
};
