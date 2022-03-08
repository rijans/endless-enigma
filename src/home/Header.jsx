import React from 'react';

function Header(props) {
    return (
        <div className="mb-8">
            <ul className="flex flex-row bg-gray-700 text-white">
                <li className="basis-1/4 hover:bg-cyan-800 p-4"><a href="#home">Home</a></li>
                <li className="basis-1/4 hover:bg-cyan-800 p-4"><a href="#news">Blog</a></li>
                <li className="basis-1/4 hover:bg-cyan-800 p-4"><a href="#contact">Geo-Codes</a></li>
                <li className="basis-1/4 hover:bg-cyan-800 p-4"><a href="#about">About</a></li>
            </ul>
        </div>
    );
}

export default Header;