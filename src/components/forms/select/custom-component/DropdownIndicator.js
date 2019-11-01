import React from 'react';
import { components } from "react-select";

import { ReactComponent as DropdownIcon } from "assets/images/seller/icons/dropdown.svg";

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <DropdownIcon />
    </components.DropdownIndicator>
  )
}

export default DropdownIndicator;
