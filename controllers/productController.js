const getProducts = (req, res) => {
    const products = [
      { id: 1, name: 'Fertilizer A', price: 100 },
      { id: 2, name: 'Paddy Seeder', price: 250 },
    ];
    res.json(products);
  };
  
  module.exports = { getProducts };
  