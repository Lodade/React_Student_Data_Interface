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
    },[]);

    async function handleNameInput(e) {
        changeFilteredData(await studentFilter(e.target.value, tagSearchInput, studentData));
        changeNameInput(e.target.value);
    }

    async function handleTagSearchInput(e) {
        changeFilteredData(await studentFilter(nameSearchInput, e.target.value, studentData));
        changeTagSearchInput(e.target.value);
    }

    async function handleTagInput(e) {
        changeTagInput(e.target.value);
        console.log(e.target.value);
    }

    async function handleTagSubmit(id) {
        changeStudentData(await studentTagAdder(id, tagInput, studentData));
        changeFilteredData(await studentFilter(nameSearchInput, tagSearchInput, studentData));
        changeTagInput("");
    }

    page = (
        <div id="background">
            <div id="mainView">
                <div className="searchBar">
                    <SearchBar searchInput={handleNameInput} placeText={"Search by name"} />
                    <SearchBar searchInput={handleTagSearchInput} placeText={"Search by tag"} />
                </div>
                <StudentDataHolder input={filteredData} tagHandle={handleTagInput} tagSubmit={handleTagSubmit} />
            </div>
        </div>
    );
    return page;
}