const Shimmer = () => {
    return (
        <>
            <div className="filter">
                <div className="Search">
                    <input type="text" className="search-box"></input>
                    <button className="search-btn" style={{ color: "#007bff" }}>Search</button>
                </div>
                <button className="filter-btn" style={{ color: "#007bff" }}> Top Rated Restaurants </button>
            </div >
            <div className="res-container">
                <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}></div>
                <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}></div>
                <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}></div>
                <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}></div>
                <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}></div>
                <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}></div>
            </div>
        </>
    )
}
export default Shimmer;