const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Product Catalog Service is Running 🚀');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
