const Shimmer = () => {
    return (
        <div className="body bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">

            {/* Enhanced Control Panel Shimmer */}
            <div className="control-panel bg-white border-b-4 border-gray-100 shadow-xl">
                <div className="flex flex-wrap justify-center items-center gap-4 p-6 bg-gradient-to-r from-white via-gray-50 to-white">
                    {/* Search Section Shimmer */}
                    <div className="flex items-center gap-3 bg-white p-2 rounded-2xl shadow-lg border border-gray-100 animate-pulse">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                        <div className="w-48 h-12 bg-gray-200 rounded-lg"></div>
                        <div className="w-24 h-12 bg-gray-300 rounded-lg"></div>
                    </div>

                    {/* Top Rated Button Shimmer */}
                    <div className="bg-white p-2 rounded-2xl shadow-lg border border-gray-100 animate-pulse">
                        <div className="w-44 h-12 bg-gray-300 rounded-lg"></div>
                    </div>

                    {/* Username Section Shimmer */}
                    <div className="flex items-center gap-3 bg-white p-2 rounded-2xl shadow-lg border border-gray-100 animate-pulse">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                        <div className="w-20 h-4 bg-gray-200 rounded"></div>
                        <div className="w-32 h-12 bg-gray-200 rounded-lg"></div>
                    </div>
                </div>

                {/* Stats Banner Shimmer */}
                <div className="stats-banner bg-gradient-to-r from-gray-100 to-gray-200 py-4 px-6 animate-pulse">
                    <div className="flex justify-center items-center gap-8">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                            <div className="w-32 h-4 bg-gray-300 rounded"></div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                            <div className="w-40 h-4 bg-gray-300 rounded"></div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                            <div className="w-36 h-4 bg-gray-300 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Restaurant Cards Section Shimmer */}
            <div className="restaurants-section py-8">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-8">
                        <div className="h-10 bg-gray-300 rounded-lg mb-2 mx-auto max-w-sm animate-pulse"></div>
                        <div className="w-24 h-1 bg-gray-300 mx-auto rounded-full animate-pulse"></div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-5 p-5">
                        {/* Enhanced Restaurant Card Shimmers */}
                        {Array.from({ length: 12 }).map((_, index) => (
                            <div key={index} className="restaurant-card-shimmer w-64 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden animate-pulse" style={{ animationDelay: `${index * 0.1}s` }}>
                                {/* Image Shimmer */}
                                <div className="h-40 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>

                                {/* Content Shimmer */}
                                <div className="p-4 space-y-3">
                                    {/* Restaurant name */}
                                    <div className="h-6 bg-gray-300 rounded animate-pulse"></div>

                                    {/* Cuisine type */}
                                    <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>

                                    {/* Rating and timing */}
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 bg-gray-300 rounded-full animate-pulse"></div>
                                            <div className="h-4 bg-gray-300 rounded w-8 animate-pulse"></div>
                                        </div>
                                        <div className="h-4 bg-gray-300 rounded w-16 animate-pulse"></div>
                                    </div>

                                    {/* Price */}
                                    <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>

                                    {/* Promoted/30mins label placeholder */}
                                    <div className="h-6 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full w-20 animate-pulse"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Loading Message */}
            <div className="text-center py-8">
                <div className="flex justify-center items-center gap-3 mb-4">
                    <div className="w-8 h-8 border-4 border-emerald-200 border-t-emerald-500 rounded-full animate-spin"></div>
                    <div className="text-lg font-bold text-gray-600 animate-pulse">Loading delicious restaurants...</div>
                </div>
                <div className="flex justify-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce delay-75"></div>
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce delay-150"></div>
                </div>
            </div>
        </div>
    )
}
export default Shimmer;
