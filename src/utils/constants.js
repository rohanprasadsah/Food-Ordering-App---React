// ========== OLD DIRECT SWIGGY URLs (COMMENTED OUT DUE TO CORS ISSUES) ==========
// These work with CORS extensions locally but fail on deployed sites
// export const RESTAURANT_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5726&lng=88.3639&page_type=DESKTOP_WEB_LISTING&offset=16";
// export const Menu_URL = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5726&lng=88.3639&restaurantId=";

// ========== NEW PROXY API ENDPOINTS (CORS-ENABLED) ==========
// These point to YOUR Vercel serverless functions that proxy Swiggy's API
// Works on both localhost and deployed sites without browser extensions

// ========== FOR LOCAL TESTING ONLY ==========
// Using direct Swiggy URLs locally (requires CORS extension)
// export const RESTAURANT_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5726&lng=88.3639&page_type=DESKTOP_WEB_LISTING&offset=16";
// export const Menu_URL = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5726&lng=88.3639&restaurantId=";

// ========== FOR PRODUCTION (COMMENT OUT ABOVE, UNCOMMENT BELOW) ==========
// Restaurant list proxy - replaces direct Swiggy restaurants API
export const RESTAURANT_URL = "/api/restaurants-list-proxy?lat=22.5726&lng=88.3639&offset=16";
// Menu proxy base URL - append restaurantId when calling
export const Menu_URL = "/api/menu-proxy?lat=22.5726&lng=88.3639&restaurantId=";

// ========== STATIC ASSETS (NO CORS ISSUES) ==========
// Image URLs don't need proxying since they allow cross-origin requests
export const LOGO_URL = "https://www.seekpng.com/png/full/344-3444855_png-dragon-ball-4-star.png";

export const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
