import React from 'react';

const SearchBar = (props) => {
    return (
        <div className='col-md-6 justify-content-center'>
            <input type="text" className='form-control' onChange={props.onInputChange} value={props.searchTerm}/>
        </div>
    );
};

export default SearchBar;
