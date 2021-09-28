import React from 'react';
import NavLeft from "./NavLeft.js"
import NavRight from "./NavRight.js"

function HeaderNav (){
    return (
        <nav className="header__navbar hide-on-mobile-tablet">
            {/* <!-- navbar left --> */}
            <NavLeft/>
            {/* <!-- navbar right --> */}
            <NavRight/>
        </nav>
    )
}

export default HeaderNav