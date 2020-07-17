import React from "react";
import {Row, Col} from "../Grid"

const SearchReturn = props => {
    return (props.books.length === 0) ? (
            <div>
            </div>
    ) : (
            <div>
                <div>
                    <div>
                        <h3>Search Results</h3>
                        {props.books.map(book => {
                            return (
                                <li>
                                    <Row id={book.title + "Card"} key={book._id}>
                                        <Col size="2" >
                                            <img src={book.image} alt={book.title} />
                                        </Col>
                                        <Col size="1" />
                                        <Col size="9" >
                                            <Row>
                                                <h3 >{book.title}</h3>
                                            </Row>
                                            <Row>
                                                <h4 >{book.author}</h4>
                                            </Row>
                                            <Row>
                                                <p >{book.description}</p>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <br></br>
                                    <Row>
                                        <button id={book.id} onClick={(event) => props.handleSavedButton(event)}>
                                            Save Book
                                        </button>
                                        <a href={book.link} target="_blank">
                                            <button>
                                                View Book
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
export default SearchReturn;