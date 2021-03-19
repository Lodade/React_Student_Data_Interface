function StudentDataRow(props) {
  const [verticalLineState, changeVertical] = React.useState("verticalLine");
  const [testResultsState, changeResults] = React.useState("studentTestResultsHolderCompressed");
  const [studentHolderState, changeHolder] = React.useState("studentHolderNormal");
  const [studentTagHolderState, changeTagHolder] = React.useState("studentTagHolderEmpty");

  function testResultsToggle() {
    if (verticalLineState === "verticalLine") {
      changeVertical("");
    } else {
      changeVertical("verticalLine");
    }

    if (testResultsState === "studentTestResultsHolderCompressed") {
      changeResults("");
    } else {
      changeResults("studentTestResultsHolderCompressed");
    }

    studentHolderUpdater(studentTagHolderState);
  }

  function studentHolderUpdater(tagState) {
    if (studentHolderState === "studentHolderNormalWithTags" && tagState === "studentTagHolder" || studentHolderState === "studentHolderExpanded" && tagState === "studentTagHolder") {
      changeHolder("studentHolderExpandedWithTags");
    } else if (studentHolderState === "studentHolderNormal" && tagState === "studentTagHolder" || studentHolderState === "studentHolderExpandedWithTags") {
      changeHolder("studentHolderNormalWithTags");
    } else if (studentHolderState === "studentHolderNormal") {
      changeHolder("studentHolderExpanded");
    } else if (studentHolderState === "studentHolderExpanded") {
      changeHolder("studentHolderNormal");
    }
  }

  React.useEffect(async () => {
    if (props.row.tags !== undefined) {
      if (props.row.tags.length > 0) {
        tagHolderToggle();
      }
    }
  });

  function tagHolderToggle() {
    if (studentTagHolderState === "studentTagHolderEmpty") {
      changeTagHolder("studentTagHolder");
      changeHolder("studentHolderNormalWithTags");
      studentHolderUpdater("studentTagHolder");
    }
  }

  let piece = /*#__PURE__*/React.createElement("div", {
    className: studentHolderState
  }, /*#__PURE__*/React.createElement("div", {
    className: "studentImageBorder"
  }, /*#__PURE__*/React.createElement("img", {
    src: props.row.pic,
    className: "studentImage",
    alt: props.row.firstName + " " + props.row.lastName
  })), /*#__PURE__*/React.createElement("div", {
    className: "studentInfoHolder"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "studentHeader"
  }, (props.row.firstName + " " + props.row.lastName).toUpperCase()), /*#__PURE__*/React.createElement("p", {
    className: "studentDetails"
  }, "Email: ", props.row.email, /*#__PURE__*/React.createElement("br", null), "City: ", props.row.city, /*#__PURE__*/React.createElement("br", null), "Company: ", props.row.company, /*#__PURE__*/React.createElement("br", null), "Skill: ", props.row.skill, /*#__PURE__*/React.createElement("br", null), "Average: ", props.row.grades.reduce(function (a, b) {
    return Number(a) + Number(b);
  }) / props.row.grades.length, "%")), /*#__PURE__*/React.createElement("div", {
    className: "studentButton",
    onClick: async e => {
      testResultsToggle();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: verticalLineState,
    onClick: async e => {
      testResultsToggle();
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "horizontalLine",
    onClick: async e => {
      testResultsToggle();
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "studentTestResultsHolder" + " " + testResultsState
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(StudentTestResults, {
    testSet: props.row.grades
  }))), /*#__PURE__*/React.createElement("div", {
    className: studentTagHolderState
  }, /*#__PURE__*/React.createElement(StudentTagSet, {
    input: props.row.tags
  })), /*#__PURE__*/React.createElement("div", {
    className: "addTagBar"
  }, /*#__PURE__*/React.createElement("form", {
    className: "tagForm"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "tagInput",
    placeholder: "Add a tag",
    onChange: props.handleTagInput,
    onKeyPress: async e => {
      if (e.key === "Enter") {
        e.preventDefault();
        props.handleTagSubmit(props.row.id);
        e.target.value = "";
        tagHolderToggle();
      }
    }
  }))));
  return piece;
}