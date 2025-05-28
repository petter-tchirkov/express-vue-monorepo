import express from 'express';

const app = express();
const port = 3000;

app.get('/api', (_, res) => {
  res.json({ message: 'Hello from backend!' });
});

app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
