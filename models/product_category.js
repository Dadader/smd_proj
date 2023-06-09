const query =  `CREATE TABLE IF NOT EXISTS Product_Category (
    category_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modified_at TIMESTAMP,
  )`;
  
  module.exports = query;
  