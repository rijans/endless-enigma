import React from 'react';

function BlogList(props) {
    const blogList = [
        {
            sl: 1,
            title: 'BLOG 1',
            content: 'Content',
            date: '1st January, 2022'
        },
        {
            sl: 2,
            title: 'BLOG 2',
            content: 'Content',
            date: '1st January, 2022'
        }
    ]
    return (
        <div>
            <table>
                <tbody>
                <tr>
                    <th>Sl.</th>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Date</th>
                </tr>
                {
                    blogList.map((blog) =>
                        <tr key={blog.sl}>
                            <td>{blog.sl}</td>
                            <td>{blog.title}</td>
                            <td>{blog.content}</td>
                            <td>{blog.date}</td>
                        </tr>
                    )
                }
                </tbody>


                {/*<tr>*/}
                {/*    <td>Alfreds Futterkiste</td>*/}
                {/*    <td>Maria Anders</td>*/}
                {/*    <td>Germany</td>*/}
                {/*</tr>*/}
            </table>
        </div>
    );
}

export default BlogList;