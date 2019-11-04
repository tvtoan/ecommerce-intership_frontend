import React, { useState, useRef, useEffect } from "react";
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
  const refContainer = useRef(null);
  const refSelect = useRef(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const blurInputSelect = () => {
    console.log("refSelect.current.select:", refSelect.current.select);
    refSelect.current.select.blur();
  }

  function handleClickOutside(event) {
    if (refContainer.current && !refContainer.current.contains(event.target)) {
      setMenuIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={refContainer}>
      <Select
      ref={refSelect}
        {...props}
        defaultValue={[options[4], options[5]]}
        options={options}
        styles={customStyles}
        isMulti
        components={{
          DropdownIndicator,
          Menu,
          MultiValueRemove,
          IndicatorSeparator: null,
          ClearIndicator: null
        }}
        className="react-select-container"
        classNamePrefix="react-select"
        blurInputSelect={blurInputSelect}
        menuIsOpen={menuIsOpen}
        onSetMenuOpen={setMenuIsOpen}
        onMenuOpen={() => setMenuIsOpen(true)}
        // why? DropdownIndicator when mousedown => call onMenuClose => setMenuIsOpen(false)
        onMenuClose={() => setMenuIsOpen(false)}
      />
    </div>
  );
}
