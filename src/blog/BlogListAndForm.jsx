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

            <form className={'m-8 flex flex-row'} onSubmit={handleFormSubmit}>
                <div className="mr-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Blog
                        Title</label>
                    <input type="text" id="title"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="Title.." required value={blogPageState.input_title}
                           onChange={handleFormChange}/>
                </div>
                <div className="mr-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Blog
                        Content</label>
                    <input type="text" id="content"
                           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           required value={blogPageState.input_content} onChange={handleFormChange}/>
                </div>
                <button type="submit"
                        className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{blogPageState.formActionLabel}
                </button>
            </form>
            <div className="flex flex-col m-8">
                <div className="overflow-x-auto shadow-md sm:rounded-lg">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden ">
                            <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                                <thead className="bg-gray-100 dark:bg-gray-700">
                                <tr>
                                    <th scope="col"
                                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        SL.
                                    </th>
                                    <th scope="col"
                                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        Title
                                    </th>
                                    <th scope="col"
                                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        Content
                                    </th>
                                    <th scope="col"
                                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        Created at
                                    </th>
                                    <th scope="col"
                                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        Action
                                    </th>
                                </tr>
                                </thead>
                                <tbody
                                    className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                {
                                    blogList.map((blog, blogIndex) =>
                                        <tr key={blogIndex} className={'hover:bg-gray-100 dark:hover:bg-gray-700'}>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{blogIndex}</td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{blog.title}</td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{blog.content}</td>
                                            <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">{blog.date}</td>
                                            <td className="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                                                {blog.isEditing ?
                                                    <button
                                                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-0.5 px-2 rounded"
                                                        type="button" value=""
                                                        onClick={e => handleCancelEdit(blogIndex, e)}>Cancel
                                                        edit</button> : ''}
                                                <button
                                                    className={`text-white font-bold py-0.5 px-2 rounded ${blog.isEditing ? 'bg-gray-500 hover:bg-gray-700' : 'bg-blue-500 hover:bg-blue-700'}`}
                                                    disabled={!!blog.isEditing} type="button" value=""
                                                    onClick={e => handleEdit(blogIndex, e)}>{blog.isEditing ? 'Editing now' : 'Edit'}</button>
                                                <button
                                                    className="bg-red-600 hover:bg-red-800 text-white font-bold py-0.5 px-2 rounded"
                                                    type="button" value=""
                                                    onClick={e => handleDelete(blogIndex, e)}>Trash
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogListAndForm;