import React from 'react';
import Header from '../home/Header';
import Footer from '../home/Footer';
import BlogListAndForm from "./BlogListAndForm";
import BlogListAndFormRedux from "../blog-with-redux/BlogListAndForm";
import Sidebar from "../home/Sidebar";
import Calculator from "../calculator/Calculator";


function BlogHome(props) {
    return (
        <div>
            <div className={'flex'}>
                <Sidebar/>
                {/*<BlogListAndForm/>*/}
                {/*<br/>*/}
                <BlogListAndFormRedux/>
                <Calculator/>
            </div>
            <Footer/>
        </div>

    );
}

export default BlogHome;