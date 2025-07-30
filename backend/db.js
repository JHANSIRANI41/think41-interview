import mongoose from "mongoose";

export const connectDB = async() => {
    try {
        await mongoose.connect("");
        console.log("MongoDB connected!");
    } catch (err) {
        console.error("MongoDB connection error:", err);

    }
};


const distributionCenterSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String },
    latitude: { type: Number },
    longitude: { type: Number }
});

const inventoryItemSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    product_id: { type: String, ref: 'Product' },
    created_at: { type: Date },
    sold_at: { type: Date },
    cost: { type: Number },
    product_category: { type: String },
    product_name: { type: String },
    product_brand: { type: String },
    product_retail_price: { type: Number },
    product_department: { type: String },
    product_sku: { type: String },
    product_distribution_center_id: { type: String, ref: 'DistributionCenter' }
});
const orderItemSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    order_id: { type: String, ref: 'Order' },
    user_id: { type: String, ref: 'User' },
    product_id: { type: String, ref: 'Product' },
    inventory_item_id: { type: String, ref: 'InventoryItem' },
    status: { type: String },
    created_at: { type: Date },
    shipped_at: { type: Date },
    delivered_at: { type: Date },
    returned_at: { type: Date }
});
const orderSchema = new mongoose.Schema({
    order_id: { type: String, required: true, unique: true },
    user_id: { type: String, ref: 'User' },
    status: { type: String },
    gender: { type: String },
    created_at: { type: Date },
    returned_at: { type: Date },
    shipped_at: { type: Date },
    delivered_at: { type: Date },
    num_of_item: { type: Number }
});
const productSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    cost: { type: Number },
    category: { type: String },
    name: { type: String },
    brand: { type: String },
    retail_price: { type: Number },
    department: { type: String },
    sku: { type: String },
    distribution_center_id: { type: String, ref: 'DistributionCenter' }
});
const userSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    first_name: { type: String },
    last_name: { type: String },
    email: { type: String },
    age: { type: Number },
    gender: { type: String },
    state: { type: String },
    street_address: { type: String },
    postal_code: { type: String },
    city: { type: String },
    country: { type: String },
    latitude: { type: Number },
    longitude: { type: Number },
    traffic_source: { type: String },
    created_at: { type: Date }
});

defaultexports = mongoose.model('User', userSchema);

exports = mongoose.model('Product', productSchema);

exports = mongoose.model('Order', orderSchema);

exports = mongoose.model('OrderItem', orderItemSchema);

exports = mongoose.model('InventoryItem', inventoryItemSchema);

exports = mongoose.model('DistributionCenter', distributionCenterSchema);
