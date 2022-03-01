import React, {useState} from 'react';

function BlogListAndForm(props) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');
    const [formActionLabel, setFormActionLabel] = useState('Create');
    const [isEditing, setIsEditing] = useState(false);
    const [editingBlogId, setEditingBlogId] = useState(null);
    const [blogList, setBlogList] = useState([])


    const handleFormChange = (e) => {
        if (e.target.name === 'title') {
            setTitle(e.target.value);
        } else {
            setContent(e.target.value);
        }

        //Set current date
        setDate(new Date().toLocaleString());
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!isEditing) {
            console.log('Doing Insert Operation');
            //Create & Update Blog list
            setBlogList([...blogList, {
                title: title,
                content: content,
                date: date,
                isEditing: false
            }]);
        } else {
            console.log('Doing update operation');
            //Update by edit
            blogList[editingBlogId].title = title;
            blogList[editingBlogId].content = content;
            blogList[editingBlogId].date = new Date().toLocaleString();
            blogList[editingBlogId].isEditing = false;
            setBlogList(blogList);
        }

        //Reset Blog form input states
        resetStates();
    }

    function resetStates() {
        setTitle('');
        setContent('');
        setIsEditing(false);
        setEditingBlogId(null);
        setFormActionLabel('Create');
    }

    const handleEdit = (blogIndex, e) => {
        console.log('Blog index to edit: ' + blogIndex);
        setTitle(blogList[blogIndex].title);
        setContent(blogList[blogIndex].content);
        setFormActionLabel('Update');
        setIsEditing(true);

        blogList[blogIndex].isEditing = true;
        setBlogList(blogList);
        setEditingBlogId(blogIndex);
    }
    const handleCancelEdit = (blogIndex, e) => {
        console.log('Blog index to cancel edit: ' + blogIndex);
        resetStates();
        blogList[blogIndex].isEditing = false;
        setBlogList(blogList);
        console.log(blogList);
    }

    const handleDelete = (blogIndex, e) => {
        console.log('Blog index to delete: ' + blogIndex);
        console.log(blogList);
        blogList.splice(blogIndex, 1);
        console.log(blogList);
        setBlogList(blogList);
        resetStates();
    }


    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Blog Title
                    <input type="text" name="title" value={title} onChange={handleFormChange}/>
                </label>
                <label>
                    Blog Content
                    <input type="text" name="content" value={content} onChange={handleFormChange}/>
                </label>
                <input type="submit" value={formActionLabel}/>
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