import React, { Component } from 'react';
import CountryList from './CountryList';
import SearchBox from './SearchBox';
import './App.css';

const minLength = 1;

class App extends Component {

    constructor(props) {
        super(props);
        this.filter = this.filter.bind(this);

        this.state = {
            searchTerm: ''
        };
    }

    filter(searchTerm) {
        // add throttling ;)
        searchTerm = !minLength || minLength < searchTerm.length ? searchTerm : '';
        this.setState({searchTerm: searchTerm});
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <SearchBox minLength='1' onSearch={this.filter} />
                    <CountryList filter={this.state.searchTerm} />
                </header>
            </div>
        );
    }
}

export default App;
