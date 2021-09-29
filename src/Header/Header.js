import React from 'react';
import HeaderWithSearch from './Header-with-search/Index.js';
import HeaderNav from './Header-nav/Index.js';
import HeaderSortMobile from './Header-sort-mobile/Index.js';

function Header(){
    return (
        <header id="header">
            <div className="grid wide">
                {/* <!-- Headers navbar --> */}
                <HeaderNav/>
                {/* <!-- Headers with search --> */}
                <HeaderWithSearch/>
            </div>
            {/* <!-- Headers sort on mobile-tablet --> */}
            <HeaderSortMobile/>
        </header>
    )
}

export default Header