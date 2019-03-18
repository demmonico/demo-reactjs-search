import React, { Component } from 'react';

class CountryList extends Component {

    list(key = undefined) {
        const countries = {
            germany: "Germany",
            ukraine: "Ukraine"
        };

        return key === undefined ? countries : countries[key];
    }

    filter(searchTerm = '', list) {
        return Object.keys(list)
            .filter(key => list[key].toLowerCase().startsWith(searchTerm.toLowerCase()))
            .reduce((res, key) => {
                res[key] = list[key];
                return res;
            }, {});
    }

    render() {
        const ulStyle = {
            listStyleType: 'none',
            padding: '0',
            margin: '20 0'
        };

        const filteredList = this.filter(this.props.filter, this.list());

        return (
            <div className="CountryList">
                <ul style={ulStyle}>
                    {Object.keys(filteredList).map((key) => {
                        return (<li key={key}>{this.list(key)}</li>)
                    })}
                </ul>
            </div>
        );
    }
}

export default CountryList;
