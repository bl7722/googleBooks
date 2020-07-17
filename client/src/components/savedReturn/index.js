import React from "react";

import {Row, Col} from "../Grid"

const SavedReturn = props => {
    return (props.savedBooks.length === 0) ? (
        <div >
            <div >
                <div >
                    <h3>Books on Shelf</h3>
                </div>
            </div>
        </div>
    ):(
        <div >
            <div>
                <div >
                    <h3>Books on Shelf</h3>
                    {props.savedBooks.map(savedbook => {
                        return (
                            <li >
                                <Row id={savedbook.title + "Card"} key={savedbook._id}>
                                    <Col size="2" >
                                        <img src={savedbook.image} alt={savedbook.title} />
                                    </Col>
                                    <Col size="1"/>
                                    <Col size="9">
                                        <Row>
                                            <h2 >{savedbook.title}</h2>
                                        </Row>
                                        <Row>
                                            <h3 >{savedbook.authors}</h3>
                                        </Row>
                                        <Row>
                                            <p >{savedbook.description}</p>
                                        </Row>
                                    </Col>
                                </Row>
                                <br></br>
                                <Row >
                                    <a href={savedbook.link} target="_blank">
                                        <button >
                                            View Books
                                        </button>
                                    </a>
                                </Row>
                            </li>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
export default SavedReturn;