/**
 * SWIGGY RESTAURANTS LIST PROXY
 * 
 * Purpose: This serverless function acts as a proxy between your frontend and Swiggy's restaurants API
 * Why needed: Swiggy's API doesn't allow cross-origin requests (CORS), so direct calls from browser fail
 * 
 * How it works:
 * 1. Your frontend calls: /api/restaurants-list-proxy?lat=22.5726&lng=88.3639&offset=0
 * 2. This function receives the request on your domain (no CORS issues)
 * 3. Function makes server-to-server call to Swiggy (servers can call any API)
 * 4. Function adds CORS headers and returns Swiggy's response to your frontend
 */

export default async function handler(req, res) {
  // ========== CORS CONFIGURATION ==========
  // Allow requests from any origin (your deployed app, localhost, etc.)
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  // Allow these HTTP methods
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  
  // Allow these headers in requests
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // ========== HANDLE PREFLIGHT REQUESTS ==========
  // Browsers send OPTIONS request before actual request to check CORS permissions
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // ========== ONLY ALLOW GET REQUESTS ==========
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed. Use GET only.' });
  }

  try {
    // ========== EXTRACT AND VALIDATE PARAMETERS ==========
    // Get location coordinates and pagination offset from query string
    const { 
      lat = '22.5726',      // Default: Kolkata latitude
      lng = '88.3639',      // Default: Kolkata longitude  
      offset = '0'          // Default: First page
    } = req.query;

    // Validate coordinates are numbers
    if (isNaN(parseFloat(lat)) || isNaN(parseFloat(lng))) {
      return res.status(400).json({ 
        error: 'Invalid coordinates. lat and lng must be numbers.' 
      });
    }

    // ========== BUILD SWIGGY API URL ==========
    // Construct the exact URL that Swiggy expects
    const swiggyRestaurantsUrl = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${lat}&lng=${lng}&page_type=DESKTOP_WEB_LISTING&offset=${offset}`;
    
    console.log('🍽️  Proxying restaurants list request to:', swiggyRestaurantsUrl);

    // ========== MAKE REQUEST TO SWIGGY ==========
    // Call Swiggy's API with headers that mimic a real browser
    const swiggyResponse = await fetch(swiggyRestaurantsUrl, {
      method: 'GET',
      headers: {
        // Pretend to be a real browser to avoid blocking
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        
        // Tell Swiggy we accept JSON responses
        'Accept': 'application/json, text/plain, */*',
        
        // Language preferences
        'Accept-Language': 'en-US,en;q=0.9',
        
        // Pretend request comes from Swiggy's own website
        'Referer': 'https://www.swiggy.com/',
        'Origin': 'https://www.swiggy.com',
        
        // Additional browser-like headers
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'Cache-Control': 'no-cache'
      },
      // Set timeout to prevent hanging requests
      timeout: 10000
    });

    // ========== HANDLE SWIGGY API ERRORS ==========
    if (!swiggyResponse.ok) {
      console.error('❌ Swiggy API error:', swiggyResponse.status, swiggyResponse.statusText);
      
      return res.status(swiggyResponse.status).json({
        error: 'Failed to fetch restaurants from Swiggy',
        details: `${swiggyResponse.status} ${swiggyResponse.statusText}`,
        timestamp: new Date().toISOString()
      });
    }

    // ========== PARSE AND RETURN SUCCESS RESPONSE ==========
    // Convert Swiggy's response to JSON
    const restaurantsData = await swiggyResponse.json();
    
    console.log('✅ Successfully fetched restaurants data');
    
    // Return the data with CORS headers already set above
    res.status(200).json(restaurantsData);
    
  } catch (error) {
    // ========== HANDLE UNEXPECTED ERRORS ==========
    console.error('💥 Proxy error in restaurants-list:', error);
    
    // Return user-friendly error message
    res.status(500).json({ 
      error: 'Internal server error while fetching restaurants',
      message: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong',
      timestamp: new Date().toISOString()
    });
  }
}
