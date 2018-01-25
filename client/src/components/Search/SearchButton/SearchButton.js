import React from 'react';
import './SearchButton.css';

/**
 * Search Button Component. Used as a child component.

 * @constructor
 * @param props
 */
export const SearchButton = (props) => {
  return (
      <div className={props.wrapClasses}>
        <div className='col-grow-6'>{/*For Spacing */}</div>
        <button className={props.btnClasses}>search</button>
      </div>
  );
};

SearchButton.defaultProps = {
  wrapClasses: 'flex-grid animated fadeIn',
  btnClasses :'btn-main-screen'
};