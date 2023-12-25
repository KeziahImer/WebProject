import { updateItem } from '@/pages/api/db';
import authMiddleware from '@/middleware/auth';

export default authMiddleware(async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { title, price, image } = req.body;
  const { id } = req.query;

  if (!id || !title || !price) {
    return res.status(400).json({ message: 'ID, title, and price are required' });
  }

  try {
    const result = await updateItem(id, title, price, image);
    res.status(200).json({ message: result });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
})
