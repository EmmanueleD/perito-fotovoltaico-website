import { NextApiRequest, NextApiResponse } from "next";

// TinaCMS API handler for production
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;
  
  // Handle GraphQL endpoint
  if (slug && slug[0] === 'graphql') {
    // Proxy to TinaCMS Cloud GraphQL endpoint
    const tinaCloudUrl = `https://content.tinajs.io/content/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}/github/${process.env.GITHUB_BRANCH || 'main'}`;
    
    if (req.method === 'POST') {
      // Forward GraphQL queries to TinaCMS Cloud
      return fetch(tinaCloudUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.TINA_TOKEN}`,
        },
        body: JSON.stringify(req.body),
      })
      .then(response => response.json())
      .then(data => res.json(data))
      .catch(error => res.status(500).json({ error: error.message }));
    }
  }
  
  // Default response for other endpoints
  return res.status(200).json({ message: 'TinaCMS API endpoint' });
}
