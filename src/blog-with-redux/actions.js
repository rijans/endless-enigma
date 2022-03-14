import {ADD_BLOG, EDIT_BLOG, DELETE_BLOG, HANDLE_BLOG_FORM_CHANGE} from "./constants";

export function handleBlogFromChange(e) {
    console.log('handleBlogFromChange payload: ' + e.target.name);
    return {type: HANDLE_BLOG_FORM_CHANGE, payload: {...e.target.name}}
}

export function addBlog() {
    return {type: ADD_BLOG}
}

export function editBlog() {
    return {type: EDIT_BLOG}
}

export function deleteBlog() {
    return {type: DELETE_BLOG}
}