import React from "react";

function Nav() {
    return (
        <nav >
            <a href="/">
                <h2 >Google Book Search</h2>
            </a>
            <div >
                <ul >
                    <li >
                        <a href="/"><button type="button" >Search Books</button></a>
                    </li>
                    <li >
                        <a href="/books/:id"><button type="button">Saved Books</button></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
