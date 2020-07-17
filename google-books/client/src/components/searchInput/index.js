import React from "react";


const SearchInput = props => {
    return (
        <form>
            <div >
                <label ><h3>Search Here</h3></label>
                <br></br>
                <input
                    value={props.search}
                    type="text"
                    name="searchBook"
                    placeholder="Enter Book's Name"
                    onChange={props.handleInputChange}
                />
            </div>
            <button type="submit" onClick={props.handleFormSubmit}>
                Submit
            </button>
        </form>
    )
}



export default SearchInput