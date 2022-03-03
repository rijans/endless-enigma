import React, {useState} from 'react';

function BlogListAndForm(props) {
    const [blogPageState, setBlogPageState] = useState({
        input_title: '',
        input_content: '',
        entry_date: new Date().toLocaleString(),
        formActionLabel: 'Create',
        isEditingOne: false,
        editingBlogId: null
    })
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
            const updatedBlogList = blogList;
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
        setBlogPageState({
            input_title: '',
            input_content: '',
            entry_date: new Date().toLocaleString(),
            formActionLabel: 'Create',
            isEditingOne: false,
            editingBlogId: null
        })
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
                    <input type="text" name="title" value={blogPageState.input_title} onChange={handleFormChange}/>
                </label>
                <label>
                    Blog Content
                    <input type="text" name="content" value={blogPageState.input_content}
                           onChange={handleFormChange}/>
                </label>
                <input type="submit" value={blogPageState.formActionLabel}/>
            </form>

            <table>
                <tbody>
                <tr>
                    <th>Sl.</th>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Date</th>
                    <th className="actions">Action</th>
                </tr>
                {
                    blogList.map((blog, blogIndex) =>
                        <tr key={blogIndex}>
                            <td>{blogIndex}</td>
                            <td>{blog.title}</td>
                            <td>{blog.content}</td>
                            <td>{blog.date}</td>
                            <td>
                                <button disabled={!!blog.isEditing} type="button" value=""
                                        onClick={e => handleEdit(blogIndex, e)}>{blog.isEditing ? 'Editing now' : 'Edit'}</button>
                                {blog.isEditing ?
                                    <button type="button" value="" onClick={e => handleCancelEdit(blogIndex, e)}>Cancel
                                        edit</button> : ''}
                                <button type="button" value="" onClick={e => handleDelete(blogIndex, e)}>Trash</button>
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