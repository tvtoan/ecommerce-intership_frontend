import React, { useState, useRef, useEffect } from "react";
// 3rd packages
import Select from "react-select";
import PropTypes from "prop-types";
import Async from "react-select/async";

import { customStyles } from "./styles";
import MultiValueRemove from "./custom-component/MultiValueRemove";
import DropdownIndicator from "./custom-component/DropdownIndicator";
import Menu from "./custom-component/Menu";

export default function SelectMulti({ isAsync, ...props }) {
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

  const reloadSelect = (e) => {
    console.log(refSelect.current.props);
    refSelect.current.props.loadOptions('');
    // refSelect.current.props.filterOption();
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
        // props reload
        reloadSelect={reloadSelect}
      />
    </div>
  );
}

SelectMulti.propTypes = {
  isAsync: PropTypes.bool
};

SelectMulti.defaultProps = {
  isAsync: false,
}