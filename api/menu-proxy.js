/**
 * SWIGGY MENU PROXY
 * 
 * Purpose: Proxies Swiggy menu API to avoid CORS and expose a stable endpoint on your own domain.
 * Endpoint: /api/menu-proxy?lat=22.5726&lng=88.3639&restaurantId=12345
 */
export default async function handler(req, res) {
  // CORS headers so browser accepts the response
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed. Use GET.' });
  }

  try {
    const { lat = '22.5726', lng = '88.3639', restaurantId } = req.query;

    if (!restaurantId) {
      return res.status(400).json({ error: 'restaurantId is required' });
    }

    const swiggyMenuUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${restaurantId}`;
    console.log('📜 Proxying menu request to:', swiggyMenuUrl);

    const resp = await fetch(swiggyMenuUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/json, text/plain, */*',
        'Referer': 'https://www.swiggy.com/',
        'Origin': 'https://www.swiggy.com'
      }
    });

    if (!resp.ok) {
      return res.status(resp.status).json({
        error: 'Failed to fetch menu from Swiggy',
        details: `${resp.status} ${resp.statusText}`
      });
    }

    const data = await resp.json();
    return res.status(200).json(data);
  } catch (err) {
    console.error('Menu proxy error:', err);
    return res.status(500).json({ error: 'Internal server error', message: err.message });
  }
}

