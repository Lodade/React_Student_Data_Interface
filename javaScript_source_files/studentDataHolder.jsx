function StudentDataHolder(props) {
    let piece = (props.input).map((data) =>
        <StudentDataRow key={data.id} row={data} handleTagInput={props.tagHandle} handleTagSubmit={props.tagSubmit} />
    );
    return piece;
}
