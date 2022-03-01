import React from 'react';
import Header from '../home/Header';
import Footer from '../home/Footer';
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