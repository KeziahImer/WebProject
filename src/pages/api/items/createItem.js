import { insertItem } from '@/pages/api/db';
import authMiddleware from '@/middleware/auth';

export default authMiddleware(async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { title, price, image } = req.body;

  if (!title || !price) {
    return res.status(400).json({ message: 'Name and price are required' });
  }

  try {
    const result = await insertItem(title, price, image);
    
    res.status(201).json({ message: result });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Internal Server Error' });
  }
})
