function StudentTestResults(props) {
  let piece = props.testSet.map((row, index) => /*#__PURE__*/React.createElement("span", {
    key: index
  }, "Test ", index + 1, ": \xA0\xA0\xA0\xA0\xA0", row, "%", /*#__PURE__*/React.createElement("br", null)));
  return piece;
}