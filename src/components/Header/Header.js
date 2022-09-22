import React from 'react';

const Header = () => {
    return (
        <div className='mb-5'>
            <nav className="navbar bg-light">
                <div className="container p-3">
                    <span className="navbar-brand fw-bold">Countries Here !!</span>
                    <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                </nav>
        </div>
    );
};

export default Header;