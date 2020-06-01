import mongoose, { Schema } from 'mongoose';

const ProductSchema = new Schema({
  productId: {
    type: String,
    unique: true,
    required: [true, 'productId is mandatory'],
  },
  productName: {
    type: String,
    required: [true, 'name is required!'],
  },
});

export default mongoose.model('Product', ProductSchema);
