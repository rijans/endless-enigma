import {ADD_BLOG, EDIT_BLOG, DELETE_BLOG} from "./constants";

const initialBlogState = {
    blogNumber: 10
}

export default function blogReducer(state = initialBlogState, action) {
    switch (action.type) {
        case ADD_BLOG:
            return {
                ...state,
                blogNumber: state.blogNumber + 1
            }
        case DELETE_BLOG:
            return {
                ...state,
                blogNumber: state.blogNumber - 1
            }
        case EDIT_BLOG:
            return {
                ...state,
                blogNumber: state.blogNumber * 2
            }
        default:
            return state;
    }
}