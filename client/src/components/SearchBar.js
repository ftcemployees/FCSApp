import React, {Component} from 'react';
import '../stylesheets/SearchBar.css';

export class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {searchBtnClass: 'btn-state-initial'}
  }

  render() {
    const comp = `SearchBar`;
    const inputWrapClasses = `flex-grid SearchWrapper animated fadeIn`;
    const inputClasses = `col`;
    const btnWrapClasses = `flex-grid`;
    const btnClasses = `${this.state.searchBtnClass} col`;

    return (
        <div className={comp}>
          <div className={inputWrapClasses}>
            <input className={inputClasses} type='text' placeholder='What would you like to find?'/>
          </div>
          <div className={btnWrapClasses}>
            <div className='col-grow-6'>{/*For Spacing */}</div>
            <button className={btnClasses}>search</button>
          </div>
        </div>
    )
  }
}
