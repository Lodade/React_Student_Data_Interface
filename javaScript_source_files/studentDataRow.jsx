function StudentDataRow(props) {
    const [verticalLineState, changeVertical] = React.useState("verticalLine");
    const [testResultsState, changeResults] = React.useState("studentTestResultsHolderCompressed");
    const [studentHolderState, changeHolder] = React.useState("studentHolderNormal");
    const [studentTagHolderState, changeTagHolder] = React.useState("studentTagHolderEmpty");

    function testResultsToggle() {
        if (verticalLineState === "verticalLine") {
            changeVertical("");
        }
        else {
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
        if ((studentHolderState === "studentHolderNormalWithTags" && tagState === "studentTagHolder") ||
            (studentHolderState === "studentHolderExpanded" && tagState === "studentTagHolder")) {
            changeHolder("studentHolderExpandedWithTags");
        } else if ((studentHolderState === "studentHolderNormal" && tagState === "studentTagHolder") ||
            (studentHolderState === "studentHolderExpandedWithTags")) {
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

    let piece = (
        <div className={studentHolderState}>
            <div className="studentImageBorder">
                <img src={props.row.pic} className="studentImage" alt={props.row.firstName + " " + props.row.lastName}></img>
            </div>
            <div className="studentInfoHolder">
                <h1 className="studentHeader">{(props.row.firstName + " " + props.row.lastName).toUpperCase()}</h1>
                <p className="studentDetails">
                    Email: {props.row.email}<br></br>
            City: {props.row.city}<br></br>
            Company: {props.row.company}<br></br>
            Skill: {props.row.skill}<br></br>
            Average: {props.row.grades.reduce(function (a, b) { return Number(a) + Number(b); }) / props.row.grades.length}%
                </p>
            </div>
            <div className="studentButton" onClick={async (e) => { testResultsToggle(); }}>
                <div className={verticalLineState} onClick={async (e) => { testResultsToggle(); }}></div>
                <div className="horizontalLine" onClick={async (e) => { testResultsToggle(); }}></div>
            </div>
            <div className={"studentTestResultsHolder" + " " + testResultsState}>
                <p>
                    <StudentTestResults testSet={props.row.grades} />
                </p>
            </div>
            <div className={studentTagHolderState}>
                <StudentTagSet input={props.row.tags} />
            </div>
            <div className="addTagBar">
                <form className="tagForm">
                    <input type="text" className="tagInput" placeholder="Add a tag" onChange={props.handleTagInput} onKeyPress={async (e) => { if (e.key === "Enter") { e.preventDefault(); props.handleTagSubmit(props.row.id); e.target.value = ""; tagHolderToggle(); } }}></input>
                </form>
            </div>
        </div>
    );
    return piece;
}