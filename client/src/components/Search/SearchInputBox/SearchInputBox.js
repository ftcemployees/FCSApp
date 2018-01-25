import React from 'react';
import './SearchInputBox.css';

/**
 * Search Input Box Component.
 *        Available classes:
 *          search-main-wrapper
 * @returns {*}
 * @constructor
 * @param props
 */
export const SearchInputBox = (props) => {
  return (
      <div className={props.wrapClasses}>
        <input className={props.inputClasses} type='text' placeholder='What would you like to find?'/>
      </div>
  )
};

SearchInputBox.defaultProps = {
  wrapClasses: 'search-main animated fadeIn',
  inputClasses: 'col',
};