import React from 'react';
import './SearchInputBox.css';

/**
 * Search Input Box Component.
 * @param wrapClasses - to set the css class of the input box wrapper
 *        Available classes:
 *          search-main-wrapper
 * @param inputClasses - to set the css class of the input box
 *       Available classes:
 *          col
 * @returns {*}
 * @constructor
 */
export const SearchInputBox = ({wrapClasses = 'search-main animated fadeIn',
                                 inputClasses = 'col'}) => {
  return (
      <div className={wrapClasses}>
        <input className={inputClasses} type='text' placeholder='What would you like to find?'/>
      </div>
  )
};