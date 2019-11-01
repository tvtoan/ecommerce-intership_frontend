import React from 'react';
import classNames from 'classnames';
import { components } from 'react-select';

import { ReactComponent as AddIcon } from 'assets/images/seller/icons/add.svg';

// style
import styles from './Menu.module.scss';

const Menu = (props) => {
  return (
    <components.Menu {...props}>
      {props.children}
      <div className={styles['hr-split']}></div>
      <button className={classNames('flat-button', styles['react-select__button-add'])}>
        <AddIcon className="icons" />
        <span>Add new category</span>
      </button>
    </components.Menu>
  )
}

export default Menu;
