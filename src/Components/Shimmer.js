const Shimmer = () => {
    return (
        <>
            <div className="filter flex flex-wrap justify-center gap-5 p-5">
                <div className="Search flex items-center gap-2">
                    <input type="text" className="search-box px-4 py-2 border border-gray-300 rounded-md animate-pulse bg-gray-200"></input>
                    <button className="search-btn px-5 py-2 bg-gray-300 text-gray-500 border-none rounded-md animate-pulse">Search</button>
                </div>
                <button className="filter-btn px-5 py-2 bg-gray-300 text-gray-500 border-none rounded-md animate-pulse"> Top Rated Restaurants </button>
            </div >
            <div className="res-container flex flex-wrap justify-center gap-5 p-5">
                <div className="res-card w-52 h-[450px] rounded-xl p-3 shadow-lg bg-gray-200 animate-pulse"></div>
                <div className="res-card w-52 h-[450px] rounded-xl p-3 shadow-lg bg-gray-200 animate-pulse"></div>
                <div className="res-card w-52 h-[450px] rounded-xl p-3 shadow-lg bg-gray-200 animate-pulse"></div>
                <div className="res-card w-52 h-[450px] rounded-xl p-3 shadow-lg bg-gray-200 animate-pulse"></div>
                <div className="res-card w-52 h-[450px] rounded-xl p-3 shadow-lg bg-gray-200 animate-pulse"></div>
                <div className="res-card w-52 h-[450px] rounded-xl p-3 shadow-lg bg-gray-200 animate-pulse"></div>
            </div>
        </>
    )
}
export default Shimmer;