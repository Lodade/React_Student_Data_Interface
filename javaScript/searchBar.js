function SearchBar(props) {
  let piece = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("form", {
    id: "studentForm"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "searchInput",
    placeholder: props.placeText,
    onChange: props.searchInput
  })));
  return piece;
}