import {ADD_BLOG, EDIT_BLOG, DELETE_BLOG, HANDLE_BLOG_FORM_CHANGE} from "./constants";

const initialBlogState = {
    blogList: [],
    blogPageState: {
        input_title: '',
        input_content: '',
        entry_date: new Date().toLocaleString(),
        formActionLabel: 'Create',
        isEditingOne: false,
        editingBlogId: null
    }
};

export default function blogReducer(state = initialBlogState, action) {
    switch (action.type) {
        case HANDLE_BLOG_FORM_CHANGE:
            return {
                ...state,
                blogPageState: [...action.payload]
            }
        case ADD_BLOG:
            return {
                ...state,
                blogList: [...action.payload]
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