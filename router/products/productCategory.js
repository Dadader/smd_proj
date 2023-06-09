const express = require("express");
const router = express.Router();
const query= require("../../models/product_category");
const client = require("../../connection/connection");

router.get("/productCategory/helo", (req, res) => {
    try {
      client.query(
        query,
         () => {
            res.status(200).send("Table exists");
        }
      );
    } catch (err) {
      res.status(400).send("Table failed to be fetched");
    }
});

// Insert a product
router.post("/productCategory", (req, res) => {
    const { name, description } = req.body;
  
    // Assuming the "products" table exists with appropriate columns
    const query = `INSERT INTO products (name, description) VALUES ($1, $2)`;
    const values = [name, description];
  
    client.query(query, values, (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error inserting product");
      } else {
        res.status(200).send("Product inserted successfully");
      }
    });
  });

// Get all products
router.get("/productCategory/products", (req, res) => {
    const query = "SELECT * FROM products";
  
    client.query(query, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error fetching products");
      } else {
        const products = result.rows;
        res.status(200).json(products);
      }
    });
  });

// Update a product
router.put("/product/:id", (req, res) => {
    const productId = req.params.id;
    const { name, description } = req.body;
  
    // Assuming the "products" table has a primary key "id"
    const query = `UPDATE products SET name = $1, description = $2, modified_at = CURRENT_TIMESTAMP WHERE id = $3`;
    const values = [name, description, productId];
  
    client.query(query, values, (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error updating product");
      } else {
        res.status(200).send("Product updated successfully");
      }
    });
  });
  // Delete a product
router.delete("/product/:id", (req, res) => {
    const productId = req.params.id;
  
    // Assuming the "products" table has a primary key "id"
    const query = `UPDATE Product_Category SET deleted_at = CURRENT_TIMESTAMP WHERE category_id = $1`;
    const values = [productId];
  
    client.query(query, values, (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error deleting product");
      } else {
        res.status(200).send("Product deleted successfully");
      }
    });
  });
module.exports = router;