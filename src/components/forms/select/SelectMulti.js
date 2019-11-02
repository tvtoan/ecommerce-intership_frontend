import React from "react";
import Select from "react-select";
import { customStyles } from "./styles";

import MultiValueRemove from "./custom-component/MultiValueRemove";
import DropdownIndicator from "./custom-component/DropdownIndicator";
import Menu from "./custom-component/Menu";

const options = [
  { value: "casual-dresses", label: "Casual dresses" },
  { value: "going-out-dresses", label: "Going out dresses" },
  { value: "maxi", label: "Maxi / Midi dresses" },
  { value: "mini-dresses", label: "Mini dresses" },
  { value: "party", label: "Party / Ocassion dresses" },
  { value: "rompers", label: "Rompers / Jumpsuits" },
  { value: "going-out-dresses", label: "Going out dresses" }
];

export default function SelectMulti(props) {
  return (
    <Select
      {...props}
      defaultValue={[options[4], options[5]]}
      options={options}
      styles={customStyles}
      isMulti
      // menuIsOpen
      components={{
        DropdownIndicator,
        Menu,
        MultiValueRemove,
        IndicatorSeparator: null,
        ClearIndicator: null
      }}
      className='react-select-container'
      classNamePrefix='react-select'
    />
  );
}
