import React, { Component } from 'react';

class SearchBox extends Component {

    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch() {
        this.props.onSearch && this.props.onSearch(this.refs.searchTerm.value);
    }

    render() {
        const inputStyle = {
            padding: '0.5em',
            margin: '0.5em',
            border: 'none',
            borderRadius: '3px',
            background: 'lightgrey'
        };

        return (
            <div className="SearchBox">
                <input
                    style={inputStyle}
                    onChange={this.handleSearch}
                    ref="searchTerm"
                />
            </div>
        );
    }
}

export default SearchBox;
