const express = require("express");
const app = express();
const { products, people } = require("./data");

app.get("/", (req, res) => {
  res.send('<h1> Home Page </h1> <a href="/api/products">products</a>');
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json([newProducts]);
});

// url param
app.get("/api/products/:id", (req, res) => {
  const singleProduct = products.find(
    (product) => String(product.id) === req.params.id
  );
  res.json(singleProduct || "failed to fetch data");
});

// query param
app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  const { search } = req.query;
  const limit = Number(req.query.limit);
  console.log(limit);
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) =>
      product.name.startsWith(search)
    );
  }
  if (limit <= sortedProducts.length) {
    sortedProducts = sortedProducts.slice(0, limit);
  }

  res.json(sortedProducts);
});

app.listen(5000, () => {
  console.log("server is listening on port 5000....");
});
