import React from "react";
import Select from "react-select";
import { customStyles } from "./styles";

import DropdownIndicator from "./custom-component/DropdownIndicator";

const options = [
  { value: "zara", label: "Zara" },
  { value: "h&m", label: "H&M" },
  { value: "dior", label: "Dior" },
  { value: "hermes", label: "Hermès" },
  { value: "calvin-klein", label: "Calvin Klein" }
];

export default function SelectSingle(props) {
  return (
    <Select
      defaultValue={[options[4], options[5]]}
      options={options}
      styles={customStyles}
      components={{
        DropdownIndicator,
        IndicatorSeparator: null,
        ClearIndicator: null
      }}
      {...props}
    />
  );
}
