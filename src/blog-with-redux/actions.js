import {ADD_BLOG, EDIT_BLOG, DELETE_BLOG} from "./constants";

export function addBlog() {
    return {type: ADD_BLOG}
}

export function editBlog() {
    return {type: EDIT_BLOG}
}

export function deleteBlog() {
    return {type: DELETE_BLOG}
}