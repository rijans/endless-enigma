import React from 'react';

function NewBlogForm(props) {
    return (
        <div>
            <form>
                <label>
                    Blog Title
                    <input type="text" name="name"/>
                </label>
                <label>
                    Blog Content
                    <input type="text" name="name"/>
                </label>
                <input type="submit" value="Create"/>
            </form>
        </div>
    );
}

export default NewBlogForm;