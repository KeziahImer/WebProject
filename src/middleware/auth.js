import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your-secret-key';

export default function authMiddleware(handler) {
  return async (req, res) => {
    const token = req.headers.authorization?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      req.user = decoded;
      return handler(req, res);
    } catch (error) {
      console.error('Error verifying token:', error);
      return res.status(401).json({ message: 'Unauthorized' });
    }
  };
}
