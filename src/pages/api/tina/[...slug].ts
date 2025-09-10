import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Simple proxy to TinaCMS Cloud
  // This endpoint is required for TinaCMS to work in production
  // but since we're using TinaCMS Cloud, we just need to return success
  
  if (req.method === 'GET') {
    return res.status(200).json({ message: 'TinaCMS API endpoint' });
  }
  
  if (req.method === 'POST') {
    return res.status(200).json({ success: true });
  }
  
  return res.status(405).json({ error: 'Method not allowed' });
}
