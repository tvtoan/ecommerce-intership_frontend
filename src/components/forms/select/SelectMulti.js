import React, { useState, useRef, useEffect } from "react";
import Select from "react-select";
import { customStyles } from "./styles";

import MultiValueRemove from "./custom-component/MultiValueRemove";
import DropdownIndicator from "./custom-component/DropdownIndicator";
import Menu from "./custom-component/Menu";

export default function SelectMulti(props) {
  const refContainer = useRef(null);
  const refSelect = useRef(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const blurInputSelect = () => {
    refSelect.current.select.blur();
  };

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
    <div ref={refContainer} className="react-select-wrapper">
      <Select
        {...props}
        ref={refSelect}
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
        // [START] control menu open
        blurInputSelect={blurInputSelect}
        menuIsOpen={menuIsOpen}
        onSetMenuOpen={setMenuIsOpen}
        onMenuOpen={() => setMenuIsOpen(true)}
        // why? DropdownIndicator when mousedown => call onMenuClose => setMenuIsOpen(false)
        onMenuClose={() => setMenuIsOpen(false)}
        // [END] control menu open
      />
    </div>
  );
}
