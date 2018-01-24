import React, {Component} from 'react';
import './App.css';
import {Nav} from "../Nav/Nav";
import {SearchBox} from "../Search/SearchBar/SearchBar";

class App extends Component {

    render() {
        return (
            <main className="App">
                <Nav/>
                <SearchBox />
            </main>
        );
    }
}

export default App;
