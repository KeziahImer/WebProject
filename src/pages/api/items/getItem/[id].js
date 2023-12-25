import { getItemById } from '@/pages/api/db';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ message: 'ID is required' });
  }

  try {
    const item = await getItemById(id);
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
