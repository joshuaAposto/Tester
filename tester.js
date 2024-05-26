const express = require('express');
const app = express();

let requestCount = 0;

app.get('/', (req, res) => {
  requestCount++;
  res.send('Hello, world!');
  console.clear(); // Clear console para sa mas malinaw na pag-display ng count
  console.log(`Total number of requests: ${requestCount}`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
