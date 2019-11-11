import React, { useState, useRef, useEffect } from "react";
// 3rd packages
import PropTypes from "prop-types";
import Select from "react-select";
import Async from "react-select/async";

import { customStyles } from "./styles";
import DropdownIndicator from "./custom-component/DropdownIndicator";
import Menu from "./custom-component/Menu";

// const options = [
//   { value: "zara", label: "Zara" },
//   { value: "h&m", label: "H&M" },
//   { value: "dior", label: "Dior" },
//   { value: "hermes", label: "Hermès" },
//   { value: "calvin-klein", label: "Calvin Klein" }
// ];

export default function SelectSingle({ isAsync, ...props }) {
  const refContainer = useRef(null);
  const refSelect = useRef(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const Component = !isAsync ? Select : Async;

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
      <Component
        {...props}
        ref={refSelect}
        styles={customStyles}
        components={{
          DropdownIndicator,
          Menu,
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

SelectSingle.propTypes = {
  isAsync: PropTypes.bool
};

SelectSingle.defaultProps = {
  isAsync: false,
}
