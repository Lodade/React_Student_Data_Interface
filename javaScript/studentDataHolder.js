function StudentDataHolder(props) {
  let piece = props.input.map(data => /*#__PURE__*/React.createElement(StudentDataRow, {
    key: data.id,
    row: data,
    handleTagInput: props.tagHandle,
    handleTagSubmit: props.tagSubmit
  }));
  return piece;
}