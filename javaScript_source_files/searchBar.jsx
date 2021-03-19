function SearchBar(props) {
    let piece = <div>
        <form id="studentForm">
            <input type="text" id="searchInput" placeholder={props.placeText} onChange={props.searchInput}></input>
        </form>
    </div>
    return piece;
}