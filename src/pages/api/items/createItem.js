import { insertItem } from '@/pages/api/db';
import authMiddleware from '@/middleware/auth';

export default authMiddleware(async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { title, description, type, price, image } = req.body;
  console.log(req.body)

  if (!title || !description || !type || !price || !image) {
    return res.status(400).json({ message: 'Everything required' });
  }

  try {
    const result = await insertItem(title, description, type, price, image);

    res.status(201).json({ message: result });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Internal Server Error' });
  }
})
