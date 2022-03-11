import React from 'react';
import Header from '../home/Header';
import Footer from '../home/Footer';
import BlogListAndForm from "./BlogListAndForm";
import Sidebar from "../home/Sidebar";
import Calculator from "../calculator/Calculator";


function BlogHome(props) {
    return (
        <div>
            <div className={'flex'}>
                <Sidebar/>
                <BlogListAndForm/>
                <Calculator/>
            </div>
            <Footer/>
        </div>

    );
}

export default BlogHome;