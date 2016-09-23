import * as types from 'actions/actionTypes';

const upload = (state = {}, action) => {
    switch (action.type) {
        case types.UPLOAD_SUCCESS:
            return {
                arquivo: action.payload.data
            }
        default:
            return state;
    }
}

export default upload;
