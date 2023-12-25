import { getItems } from '@/pages/api/db';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const items = await getItems();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
