import React from 'react';
import Header from '../home/Header';
import Footer from '../home/Footer';
import BlogListAndForm from "./BlogListAndForm";
import Sidebar from "../home/Sidebar";


function BlogHome(props) {
    return (
        <div>
            <div className={'flex'}>
                <Sidebar/>
                <BlogListAndForm/>
            </div>
            <Footer/>
        </div>

    );
}

export default BlogHome;