const { Schema, model } = require('mongoose');

// Products modeli oluşturuldu
const productsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  featuredImage: {
    type: Schema.Types.Mixed,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

const Products = model('Products', productsSchema);

module.exports = Products;
