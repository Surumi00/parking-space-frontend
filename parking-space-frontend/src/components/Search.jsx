import React from 'react';

const Search = ({ searchTerm, onSearchChange, onSearch, placeholder = 'Search vehicles...' }) => {
    return (
        <div className="row mb-3 g-2">
            <div className="col-md-8">
                <input
                    type="text"
                    className="form-control"
                    placeholder={placeholder}
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                />
            </div>
            <div className="col-md-4">
                <button className="btn btn-primary w-100" type="button" onClick={onSearch}>
                    Search
                </button>
            </div>
        </div>
    );
};

export default Search;
