const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.static('public'));

const port = process.env.PORT || 3043; // Change the port to 3043
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
