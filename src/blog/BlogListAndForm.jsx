import React, {useState} from 'react';
import styles from '../app.module.css'

function BlogListAndForm(props) {
    const initialState = {
        input_title: '',
        input_content: '',
        entry_date: new Date().toLocaleString(),
        formActionLabel: 'Create',
        isEditingOne: false,
        editingBlogId: null
    }
    const [blogPageState, setBlogPageState] = useState(initialState)
    const [blogList, setBlogList] = useState([])


    const handleFormChange = (e) => {
        if (e.target.name === 'title') {
            setBlogPageState({
                ...blogPageState,
                input_title: e.target.value
            });
        } else {
            setBlogPageState({
                ...blogPageState,
                input_content: e.target.value
            });
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!blogPageState.isEditingOne) {
            //Create & Update Blog list
            setBlogList([...blogList, {
                title: blogPageState.input_title,
                content: blogPageState.input_content,
                date: blogPageState.entry_date,
                isEditing: false
            }]);
        } else {
            // console.log('Doing update operation');
            //Update by edit
            const updatedBlogList = [...blogList];
            updatedBlogList[blogPageState.editingBlogId].title = blogPageState.input_title;
            updatedBlogList[blogPageState.editingBlogId].content = blogPageState.input_content;
            updatedBlogList[blogPageState.editingBlogId].date = new Date().toLocaleString();
            updatedBlogList[blogPageState.editingBlogId].isEditing = false;
            setBlogList(updatedBlogList);
        }

        //Reset Blog form input states
        resetBlogPageState();
    }

    function resetBlogPageState() {
        setBlogPageState(initialState)
    }

    const handleEdit = (blogIndex, e) => {
        // console.log('Blog index to edit: ' + blogIndex);
        setBlogPageState(
            {
                ...blogPageState,
                input_title: blogList[blogIndex].title,
                input_content: blogList[blogIndex].content,
                formActionLabel: 'Update',
                isEditingOne: true,
                editingBlogId: blogIndex
            }
        )

        blogList[blogIndex].isEditing = true;
        setBlogList(blogList);
    }
    const handleCancelEdit = (blogIndex, e) => {
        // console.log('Blog index to cancel edit: ' + blogIndex);
        resetBlogPageState();
        blogList[blogIndex] = {
            ...blogList[blogIndex],
            isEditing: false
        };
        setBlogList(blogList);
    }

    const handleDelete = (blogIndex, e) => {
        // console.log('Blog index to delete: ' + blogIndex);
        const newBlogList = blogList
        newBlogList.splice(blogIndex, 1);
        setBlogList(newBlogList);
        resetBlogPageState();
    }


    return (
        <div>

            <form onSubmit={handleFormSubmit}>
                <label>
                    Blog Title
                    <input className="border-[1px] border-slate-400" type="text" name="title"
                           value={blogPageState.input_title} onChange={handleFormChange}/>
                </label>
                <label>
                    Blog Content
                    <input className="border-[1px] border-slate-400" type="text" name="content"
                           value={blogPageState.input_content}
                           onChange={handleFormChange}/>
                </label>
                <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-2 rounded" type="submit"
                       value={blogPageState.formActionLabel}/>
            </form>

            <table className="table-auto w-full border-separate  border border-slate-400">
                <tbody className="">
                <tr>
                    <th className="border border-slate-300">Sl.</th>
                    <th className="border border-slate-300">Title</th>
                    <th className="border border-slate-300">Content</th>
                    <th className="border border-slate-300">Date</th>
                    <th className="border border-slate-300 actions">Action</th>
                </tr>
                {
                    blogList.map((blog, blogIndex) =>
                        <tr key={blogIndex}>
                            <td className="border border-slate-300">{blogIndex}</td>
                            <td className="border border-slate-300">{blog.title}</td>
                            <td className="border border-slate-300">{blog.content}</td>
                            <td className="border border-slate-300">{blog.date}</td>
                            <td className="border border-slate-300">
                                {blog.isEditing ?
                                    <button
                                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-0.5 px-2 rounded"
                                        type="button" value="" onClick={e => handleCancelEdit(blogIndex, e)}>Cancel
                                        edit</button> : ''}
                                <button
                                    className={`text-white font-bold py-0.5 px-2 rounded ${blog.isEditing ? 'bg-gray-500 hover:bg-gray-700' : 'bg-blue-500 hover:bg-blue-700'}`}
                                    disabled={!!blog.isEditing} type="button" value=""
                                    onClick={e => handleEdit(blogIndex, e)}>{blog.isEditing ? 'Editing now' : 'Edit'}</button>
                                <button className="bg-red-600 hover:bg-red-800 text-white font-bold py-0.5 px-2 rounded"
                                        type="button" value="" onClick={e => handleDelete(blogIndex, e)}>Trash
                                </button>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    );
}

export default BlogListAndForm;