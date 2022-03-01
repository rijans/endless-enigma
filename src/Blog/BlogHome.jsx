import React from 'react';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import BlogListAndForm from "./BlogListAndForm";


function BlogHome(props) {
    return (
        <div>
            <Header/>
            <BlogListAndForm/>
            <Footer/>
        </div>
    );
}

export default BlogHome;