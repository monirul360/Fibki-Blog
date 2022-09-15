import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <div className="nav-content">
                <div className="nav-logo">
                    <h2><Link to='/'>Fibki</Link></h2>
                </div>
                <div className="nav-items">
                    <Link to='/'>Home</Link>
                    <Link to='/'>Blog</Link>
                    <Link to='/'>Technology</Link>
                    <Link to='/'>Topics</Link>
                    <Link to='/'>Photo</Link>
                    <Link to='/'>About</Link>
                </div>
                <div className="nav-smail">
                    <div class="dropdown">
                        <button type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <div></div>
                            <div></div>
                            <div></div>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><Link class="dropdown-item" to='/'>Home</Link></li>
                            <li><Link class="dropdown-item" to='/'>Blog</Link></li>
                            <li><Link class="dropdown-item" to='/'>Technology</Link></li>
                            <li><Link class="dropdown-item" to='/'>Topics</Link></li>
                            <li><Link class="dropdown-item" to='/'>Photo</Link></li>
                            <li><Link class="dropdown-item" to='/'>About</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;