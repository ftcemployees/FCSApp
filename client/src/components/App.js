import React, {Component} from 'react';
import '../stylesheets/App.css';
import {Nav} from "./Nav";
import {SearchBar} from "./SearchBar";

class App extends Component {

    render() {
        return (
            <main className="App">
                <Nav/>
                <SearchBar/>
            </main>
        );
    }
}

export default App;
