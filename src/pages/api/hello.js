// src/pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello World!' });
}

export function anotherHandler(req, res) {
  res.status(200).json({ message: 'Another Hello World!' });
}
