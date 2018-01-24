import React from 'react';
import './SearchButton.css';

/**
 * Search Button Component. Used as a child component.
 * @param wrapClasses - to set the css class for the wrapper.
 *        Available classes:
 *          flex-grid
 *
 * @param btnClasses - to set the css class for the button.
 *                     Defaults to btn-main-screen
 * @returns {*}
 * @constructor
 */
export const SearchButton = ({ wrapClasses = 'flex-grid animated fadeIn',
                               btnClasses = 'btn-main-screen'}) => {
  return (
      <div className={wrapClasses}>
        <div className='col-grow-6'>{/*For Spacing */}</div>
        <button className={btnClasses}>search</button>
      </div>
  );
};