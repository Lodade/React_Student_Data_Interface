function EntirePage(props) {
  let page;
  const [studentData, changeStudentData] = React.useState([]);
  const [nameSearchInput, changeNameInput] = React.useState("");
  const [tagSearchInput, changeTagSearchInput] = React.useState("");
  const [filteredData, changeFilteredData] = React.useState([]);
  const [tagInput, changeTagInput] = React.useState("");

  async function grabStudentData() {
    let result = await pageFetch();
    return result.students;
  }

  React.useEffect(async () => {
    let data = await grabStudentData();
    changeStudentData(data);
    changeFilteredData(await studentFilter(nameSearchInput, tagSearchInput, data));
  }, []);
  React.useEffect(async () => {
    changeFilteredData(await studentFilter(nameSearchInput, tagSearchInput, studentData));
  }, [nameSearchInput, tagSearchInput]);

  async function handleNameInput(e) {
    changeNameInput(e.target.value);
  }

  async function handleTagSearchInput(e) {
    changeTagSearchInput(e.target.value);
  }

  async function handleTagInput(e) {
    changeTagInput(e.target.value);
    console.log(e.target.value);
  }

  async function handleTagSubmit(id) {
    changeStudentData(await studentTagAdder(id, tagInput, studentData));
    changeTagInput("");
  }

  page = /*#__PURE__*/React.createElement("div", {
    id: "background"
  }, /*#__PURE__*/React.createElement("div", {
    id: "mainView"
  }, /*#__PURE__*/React.createElement("div", {
    className: "searchBar"
  }, /*#__PURE__*/React.createElement(SearchBar, {
    searchInput: handleNameInput,
    placeText: "Search by name"
  }), /*#__PURE__*/React.createElement(SearchBar, {
    searchInput: handleTagSearchInput,
    placeText: "Search by tag"
  })), /*#__PURE__*/React.createElement(StudentDataHolder, {
    input: filteredData,
    tagHandle: handleTagInput,
    tagSubmit: handleTagSubmit
  })));
  return page;
}