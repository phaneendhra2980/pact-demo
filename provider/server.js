const express = require('express');
const app = express();
app.get('/users', (req, res) => {
  res.json([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]);
});
app.listen(3001, () => console.log('Provider listening on port 3001'));