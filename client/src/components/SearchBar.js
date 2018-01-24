import React, {Component} from 'react';
import '../stylesheets/SearchBar.css';

export class SearchBar extends Component {
    render() {
        return (
            <div className='BtnWrapper'>
            <div className='SearchWrapper animated fadeIn'>
                <input type='text' placeholder='What would you like to find?'/>
            </div>
                <button>search</button>
            </div>
        )
    }
}
