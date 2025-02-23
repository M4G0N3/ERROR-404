

const Search = ({searchTerm, setSearchTerm}) => {
    return (
        <div className="text-white text-3xl search">
            <div>
                <img src={"search.svg"} alt="Search" />
            </div>

            <input
                type="text"
                placeholder="Search your favorite Movies"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    )
}
export default Search