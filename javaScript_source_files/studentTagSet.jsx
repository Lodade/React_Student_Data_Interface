function StudentTagSet(props) {
    let piece = (props.input).map((row, index) =>
        <div key={index} className="studentTag">{row}</div>
    );
    return piece;
}