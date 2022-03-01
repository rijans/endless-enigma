import React, {useState} from 'react';


function BlogListAndForm(props) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [blogList, setBlogList] = useState([])


    const handleFormChange = (e) => {
        // console.log(e.target.name);
        if (e.target.name === 'title') {
            setTitle(e.target.value);
        } else {
            setContent(e.target.value);
        }
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newBlogList = [...blogList, {
            title: title,
            content: content
        }];
        setBlogList(newBlogList);
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
                <input type="submit" value="Create"/>
            </form>
            <table>
                <tbody>
                <tr>
                    <th>Sl.</th>
                    <th>Title</th>
                    <th>Content</th>
                    {/*<th>Date</th>*/}
                </tr>
                {
                    blogList.map((blog, blogIdx) =>
                        <tr key={blogIdx}>
                            <td>{blogIdx}</td>
                            <td>{blog.title}</td>
                            <td>{blog.content}</td>
                            {/*<td>{blog.date}</td>*/}
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    );
}

export default BlogListAndForm;