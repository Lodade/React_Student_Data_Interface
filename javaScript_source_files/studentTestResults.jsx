function StudentTestResults(props) {
    let piece = (props.testSet).map((row, index) =>
        <span key={index}>Test {index + 1}: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{row}%<br></br></span>
    );
    return piece;
}