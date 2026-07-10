const PRODUCTS = [
  { id: 1, name: "Wireless Headphones", details: "Premium noise-canceling over-ear headphones with 30hr battery life.", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop", category: "Electronics", price: 249.99 },
  { id: 2, name: "Smart Fitness Watch", details: "Track heart rate, sleep, and 50+ workouts with built-in GPS.", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop", category: "Electronics", price: 199.99 },
  { id: 3, name: "Bluetooth Speaker", details: "360° sound, IPX7 waterproof rating, 20 hours of playtime.", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop", category: "Electronics", price: 79.99 },
  { id: 4, name: "4K Webcam", details: "Crystal clear video, auto-focus, and built-in ring light.", image: "https://m.media-amazon.com/images/I/61m5UWPzIwL.jpg", category: "Electronics", price: 129.99 },
  { id: 5, name: "Cotton Crew T-Shirt", details: "100% organic cotton, relaxed fit, pre-shrunk fabric.", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop", category: "Clothing", price: 29.99 },
  { id: 6, name: "Slim Fit Denim Jeans", details: "Stretch denim, classic indigo wash, durable stitching.", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop", category: "Clothing", price: 59.99 },
  { id: 7, name: "Running Sneakers", details: "Lightweight mesh upper, responsive foam midsole.", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop", category: "Clothing", price: 119.99 },
  { id: 8, name: "Yoga Mat Premium", details: "Extra thick 6mm, non-slip texture, includes carry strap.", image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop", category: "Sports", price: 45.99 },
  { id: 9, name: "Stainless Steel Bottle", details: "Double-wall vacuum insulation, keeps cold 24hrs.", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop", category: "Sports", price: 34.99 },
  // --- Filled out IDs 11 to 40 with matching real product images ---
  
  { id: 11, name: "Mechanical Gaming Keyboard", details: "Hot-swappable switches, per-key RGB lighting, aluminum frame.", image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=400&h=400&fit=crop", category: "Electronics", price: 149.99 },
  { id: 12, name: "Wireless Gaming Mouse", details: "Ergonomic design, 25K DPI sensor, 70hr battery life.", image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop", category: "Electronics", price: 89.99 },
  { id: 15, name: "Portable Power Bank", details: "20,000mAh capacity, fast charging, dual USB ports.", image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop", category: "Electronics", price: 39.99 },
  { id: 16, name: "Hooded Winter Jacket", details: "Water-resistant shell, fleece lining, adjustable cuffs.", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop", category: "Clothing", price: 129.99 },
  { id: 17, name: "Leather Belt Classic", details: "Genuine leather, antique brass buckle, adjustable holes.", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop", category: "Clothing", price: 34.99 },
  { id: 18, name: "Aviator Sunglasses", details: "Polarized lenses, metal frame, UV400 protection.", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop", category: "Clothing", price: 59.99 },
  { id: 20, name: "Athletic Shorts", details: "Moisture-wicking fabric, built-in liner, zip pocket.", image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=400&fit=crop", category: "Clothing", price: 29.99 },
  { id: 21, name: "Adjustable Dumbbells", details: "5 to 52.5 lbs, quick-change dial system, compact.", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop", category: "Sports", price: 349.99 },
  { id: 24, name: "Soccer Ball Professional", details: "FIFA quality pro certified, thermal bonding, size 5.", image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=400&fit=crop", category: "Sports", price: 29.99 },
  { id: 27, name: "Ceramic Plant Pot Set", details: "Minimalist white design, drainage holes, 3 sizes.", image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop", category: "Home", price: 34.99 },
  { id: 28, name: "Microfiber Bed Sheet Set", details: "1800 thread count feel, wrinkle resistant, queen size.", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=400&fit=crop", category: "Home", price: 49.99 },
  { id: 29, name: "Minimalist Wall Clock", details: "Silent quartz movement, 12-inch diameter, easy mount.", image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&h=400&fit=crop", category: "Home", price: 29.99 },
  { id: 31, name: "Bestselling Fiction Novel", details: "Award-winning thriller, 400 pages, hardcover edition.", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop", category: "Books", price: 18.99 },
  { id: 36, name: "Vitamin C Brightening Serum", details: "20% Vitamin C, hyaluronic acid, vegan & cruelty-free.", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop", category: "Beauty", price: 22.99 },
  { id: 37, name: "Matte Liquid Lipstick Set", details: "Pack of 6 highly pigmented, long-lasting shades.", image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&h=400&fit=crop", category: "Beauty", price: 29.99 },
  { id: 38, name: "Natural Bamboo Makeup Brush Set", details: "12 piece professional set, synthetic bristles, travel case.", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop", category: "Beauty", price: 19.99 },
  { id: 39, name: "Retinol Night Moisturizer", details: "Anti-aging formula, reduces fine lines, 1.7oz jar.", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop", category: "Beauty", price: 34.99 }
];

export default PRODUCTS;

export const getCategories = () => {
  return ['All', ...new Set(PRODUCTS.map(p => p.category))];
};