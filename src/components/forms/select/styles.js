export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    borderRadius: "2px",
    backgroundColor: "var(--white)",
    border: "1px solid var(--white-three)",
    "&:hover": {
      borderColor: "var(--white-three)"
    },
    boxShadow: state.isFocused ? "none" : ""
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    padding: "12px",
    color: "#9B9B9B"
  }),
  input: (provided, state) => ({
    ...provided,
    fontSize: "0.875rem",
    fontWeight: 500,
    lineHeight: 1.43,
    color: "var(--charcoal-grey)",
    margin: 0,
    padding: 0
  }),
  multiValue: (provided, state) => ({
    ...provided,
    margin: 0,
    borderRadius: "4px",
    backgroundColor: "var(--white-two)",
    marginRight: ".5rem"
  }),
  multiValueLabel: (provided, state) => {
    delete provided.paddingLeft;
    return {
      ...provided,
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: 1.43,
      color: "var(--charcoal-grey)",
      padding: "6px 8px",
      paddingRight: "4px"
    };
  },
  multiValueRemove: (provided, state) => ({
    ...provided,
    padding: "8px",
    transition: "all .2s ease",
    svg: {
      width: "1rem",
      height: "1rem",
      objectFit: "contain",
      color: "#9B9B9B"
    },
    ":hover": {
      backgroundColor: "transparent",
      svg: {
        color: "var(--pumpkin-orange)"
      }
    }
  }),
  menu: (provided, state) => ({
    ...provided,
    marginTop: "0.25rem",
    marginBottom: 0,
    borderRadius: "2px",
    boxShadow: "0 10px 10px 0 rgba(0, 0, 0, 0.08)",
    backgroundColor: "var(--white)"
  }),
  menuList: (provided, state) => ({
    ...provided,
    paddingBottom: "0.5rem",
    paddingTop: "0.5rem"
  }),
  option: (provided, state) => ({
    ...provided,
    padding: "0.5rem 1rem",
    fontSize: "0.875rem",
    fontWeight: 500,
    lineHeight: 1.43,
    cursor: "pointer",
    backgroundColor: "transparent",
    color: "var(--charcoal-grey)",
    transition: "all 0.1s ease",
    ":hover, &:active": {
      backgroundColor: "unset",
      color: "var(--pale-orange)"
    },
    ":focus": {
      borderColor: "var(--pale-orange)"
    }
  }),
  placeholder: (provided, state) => ({
    ...provided,
    fontSize: "0.875rem",
    fontWeight: 500,
    lineHeight: 1.43,
    color: "var(--greyish)",
    marginLeft: "0.5rem",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    margin: 0,
    padding: "6px 8px",
    fontSize: "0.875rem",
    fontWeight: 500,
    lineHeight: 1.43,
    color: "var(--charcoal-grey)"
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    padding: "8px 0 8px 8px"
  })
};
