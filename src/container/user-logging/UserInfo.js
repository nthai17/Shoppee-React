import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";

function UserInfo (){
    let match = useRouteMatch()
    return(
        <React.Fragment>
            <div className="col l-2 m-0 c-0">
                <nav className="category">
                    <ul>
                        <li>
                            <Link to={`${match.url}/`}>hello hihi</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="col l-10 m-12 c-12">
                hihi
            </div>
        </React.Fragment>
    )
}

export default UserInfo