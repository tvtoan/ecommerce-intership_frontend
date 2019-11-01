import React from "react";
import { components } from "react-select";

import { ReactComponent as MultiRemoveIcon } from "assets/images/seller/icons/close-2.svg";

const MultiValueRemove = props => {
  return (
    <components.MultiValueRemove {...props}>
      <MultiRemoveIcon />
    </components.MultiValueRemove>
  );
};

export default MultiValueRemove;
