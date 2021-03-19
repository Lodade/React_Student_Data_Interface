function StudentTagSet(props) {
  let piece = props.input.map((row, index) => /*#__PURE__*/React.createElement("div", {
    key: index,
    className: "studentTag"
  }, row));
  return piece;
}