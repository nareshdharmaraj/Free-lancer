// ============================================
// TasteIT Restaurant - Comprehensive Menu Data
// 30+ dishes per category with authentic details
// ============================================

const menuData = {
    // Morning Menu (6 AM - 11 AM) - 60+ dishes
    morning: {
        food: {
            indian: [
                { name: "Masala Dosa", price: 12, description: "Crispy rice crepe filled with spiced potato, served with sambar and chutney", image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&q=80", badge: "Popular", spicy: 2 },
                { name: "Idli Sambar", price: 8, description: "Steamed rice cakes with lentil soup and coconut chutney", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&q=80", badge: "Healthy", spicy: 1 },
                { name: "Poha", price: 7, description: "Flattened rice with peanuts, curry leaves, and spices", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80", badge: "Light", spicy: 1 },
                { name: "Upma", price: 7, description: "Semolina porridge with vegetables and cashews", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80", spicy: 1 },
                { name: "Medu Vada", price: 9, description: "Crispy lentil donuts served with sambar and chutney", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80", badge: "Crispy", spicy: 2 },
                { name: "Rava Dosa", price: 11, description: "Thin crispy semolina crepe with onions and chilies", image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&q=80", spicy: 2 },
                { name: "Pongal", price: 10, description: "Savory rice and lentil porridge with black pepper", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&q=80", badge: "Comfort", spicy: 1 },
                { name: "Uttapam", price: 11, description: "Thick rice pancake topped with vegetables", image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&q=80", spicy: 1 },
                { name: "Aloo Paratha", price: 9, description: "Whole wheat flatbread stuffed with spiced potatoes", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80", badge: "Filling", spicy: 2 },
                { name: "Chole Bhature", price: 13, description: "Spicy chickpeas with fluffy fried bread", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80", badge: "Hearty", spicy: 3 },
                { name: "Paneer Paratha", price: 11, description: "Flatbread stuffed with cottage cheese and herbs", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80", spicy: 2 },
                { name: "Methi Thepla", price: 8, description: "Fenugreek-flavored flatbread with yogurt", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80", badge: "Healthy", spicy: 1 },
                { name: "Sabudana Khichdi", price: 9, description: "Tapioca pearls with peanuts and potatoes", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80", badge: "Gluten-Free", spicy: 1 },
                { name: "Kanda Poha", price: 8, description: "Flattened rice with onions and spices", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80", spicy: 2 },
                { name: "Pesarattu", price: 10, description: "Green gram dosa with ginger and cumin", image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&q=80", badge: "Protein-Rich", spicy: 2 },
                { name: "Appam with Stew", price: 12, description: "Rice pancakes with coconut milk vegetable stew", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&q=80", badge: "South Indian", spicy: 1 },
                { name: "Puttu Kadala", price: 11, description: "Steamed rice cylinders with chickpea curry", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&q=80", spicy: 2 },
                { name: "Ragi Dosa", price: 10, description: "Finger millet crepe with chutney", image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&q=80", badge: "Nutritious", spicy: 1 },
                { name: "Batata Vada Pav", price: 7, description: "Spiced potato fritter in bread roll", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80", badge: "Street Food", spicy: 3 },
                { name: "Dhokla", price: 8, description: "Steamed fermented chickpea flour cake", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80", badge: "Light", spicy: 1 },
                { name: "Kachori", price: 9, description: "Crispy pastry filled with spiced lentils", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80", spicy: 3 },
                { name: "Misal Pav", price: 10, description: "Spicy sprouts curry with bread", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80", badge: "Spicy", spicy: 4 },
                { name: "Rava Idli", price: 8, description: "Steamed semolina cakes with vegetables", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&q=80", spicy: 1 },
                { name: "Akki Rotti", price: 9, description: "Rice flour flatbread with vegetables", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80", badge: "Gluten-Free", spicy: 2 },
                { name: "Thalipeeth", price: 10, description: "Multi-grain flatbread with spices", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80", badge: "Healthy", spicy: 2 },
                { name: "Puri Bhaji", price: 11, description: "Fried bread with spiced potato curry", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80", badge: "Traditional", spicy: 2 },
                { name: "Bread Pakora", price: 7, description: "Bread slices dipped in chickpea batter and fried", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80", spicy: 2 },
                { name: "Oats Idli", price: 9, description: "Healthy oats steamed cakes", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&q=80", badge: "Healthy", spicy: 1 },
                { name: "Moong Dal Cheela", price: 9, description: "Lentil pancake with vegetables", image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&q=80", badge: "Protein-Rich", spicy: 2 },
                { name: "Vegetable Poha", price: 8, description: "Flattened rice with mixed vegetables", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80", badge: "Nutritious", spicy: 1 }
            ],
            chinese: [
                { name: "Congee", price: 10, description: "Rice porridge with chicken and ginger", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80", badge: "Comfort Food", spicy: 0 },
                { name: "Dim Sum Platter", price: 15, description: "Assorted steamed dumplings with soy dipping sauce", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80", badge: "Chef's Pick", spicy: 1 },
                { name: "Shrimp Har Gow", price: 14, description: "Crystal shrimp dumplings", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80", badge: "Delicate", spicy: 0 },
                { name: "Pork Siu Mai", price: 13, description: "Open-topped pork dumplings", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80", spicy: 1 },
                { name: "Char Siu Bao", price: 12, description: "BBQ pork steamed buns", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80", badge: "Popular", spicy: 0 },
                { name: "Vegetable Bao", price: 10, description: "Steamed buns with vegetable filling", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80", badge: "Vegetarian", spicy: 0 },
                { name: "Chicken Congee", price: 11, description: "Savory rice porridge with shredded chicken", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80", badge: "Warming", spicy: 0 },
                { name: "Century Egg Congee", price: 12, description: "Rice porridge with preserved egg", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80", badge: "Traditional", spicy: 0 },
                { name: "Jianbing", price: 9, description: "Chinese savory crepe with egg and crispy wonton", image: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=600&q=80", badge: "Street Food", spicy: 1 },
                { name: "Youtiao", price: 6, description: "Chinese fried dough sticks", image: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=600&q=80", badge: "Crispy", spicy: 0 },
                { name: "Soy Milk with Youtiao", price: 8, description: "Fresh soy milk with fried dough sticks", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80", badge: "Classic", spicy: 0 },
                { name: "Turnip Cake", price: 10, description: "Pan-fried radish cake", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80", spicy: 0 },
                { name: "Taro Cake", price: 10, description: "Steamed taro and rice flour cake", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80", spicy: 0 },
                { name: "Shrimp Cheung Fun", price: 13, description: "Rice noodle rolls with shrimp", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80", badge: "Silky", spicy: 0 },
                { name: "BBQ Pork Cheung Fun", price: 12, description: "Rice noodle rolls with BBQ pork", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80", spicy: 0 },
                { name: "Chicken Feet", price: 11, description: "Braised chicken feet in black bean sauce", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80", badge: "Authentic", spicy: 1 },
                { name: "Spare Ribs", price: 13, description: "Steamed pork ribs with black bean", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80", spicy: 1 },
                { name: "Egg Tart", price: 7, description: "Flaky pastry with sweet egg custard", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80", badge: "Sweet", spicy: 0 },
                { name: "Sesame Balls", price: 8, description: "Fried glutinous rice balls with sesame", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80", badge: "Dessert", spicy: 0 },
                { name: "Mango Pudding", price: 7, description: "Creamy mango dessert", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80", badge: "Refreshing", spicy: 0 },
                { name: "Steamed Sponge Cake", price: 6, description: "Light and fluffy Chinese sponge cake", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80", spicy: 0 },
                { name: "Custard Bun", price: 9, description: "Steamed bun with flowing custard filling", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80", badge: "Molten", spicy: 0 },
                { name: "Pineapple Bun", price: 7, description: "Sweet bun with crispy cookie topping", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80", badge: "Popular", spicy: 0 },
                { name: "Red Bean Bun", price: 8, description: "Steamed bun with sweet red bean paste", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80", spicy: 0 },
                { name: "Lotus Seed Bun", price: 8, description: "Steamed bun with lotus seed paste", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80", spicy: 0 },
                { name: "Shrimp Wonton Soup", price: 12, description: "Delicate wontons in clear broth", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80", badge: "Light", spicy: 0 },
                { name: "Beef Noodle Soup", price: 13, description: "Tender beef in aromatic broth with noodles", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80", badge: "Hearty", spicy: 1 },
                { name: "Wonton Noodles", price: 12, description: "Egg noodles with shrimp wontons", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80", spicy: 0 },
                { name: "Rice Noodle Soup", price: 11, description: "Flat rice noodles in clear broth", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80", badge: "Comfort", spicy: 0 },
                { name: "Fish Ball Noodles", price: 12, description: "Bouncy fish balls with noodles", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80", spicy: 0 }
            ]
        },
        snacks: {
            indian: [
                { name: "Samosa", price: 5, description: "Crispy pastry filled with spiced potatoes and peas", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80", badge: "Bestseller", spicy: 2 },
                { name: "Vada", price: 6, description: "Crispy lentil fritters served with chutney", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80", spicy: 2 },
                { name: "Bread Pakora", price: 6, description: "Bread slices in chickpea batter", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80", spicy: 2 },
                { name: "Onion Bhaji", price: 7, description: "Crispy onion fritters", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80", badge: "Crispy", spicy: 2 },
                { name: "Mirchi Bajji", price: 7, description: "Stuffed chili fritters", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80", badge: "Spicy", spicy: 4 }
            ],
            chinese: [
                { name: "Spring Rolls", price: 8, description: "Crispy vegetable rolls with sweet chili sauce", image: "https://images.unsplash.com/photo-1619895092538-128341789043?w=600&q=80", badge: "Crispy", spicy: 1 },
                { name: "Vegetable Dumplings", price: 9, description: "Steamed vegetable dumplings", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80", badge: "Vegetarian", spicy: 0 },
                { name: "Fried Wontons", price: 8, description: "Crispy wontons with sweet and sour sauce", image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=600&q=80", spicy: 0 },
                { name: "Prawn Toast", price: 10, description: "Bread topped with prawn paste and fried", image: "https://images.unsplash.com/photo-1619895092538-128341789043?w=600&q=80", badge: "Crunchy", spicy: 0 },
                { name: "Scallion Pancakes", price: 8, description: "Flaky layered pancakes with green onions", image: "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?w=600&q=80", badge: "Crispy", spicy: 0 }
            ]
        }
    },

    // Afternoon Menu (11 AM - 4 PM)
    afternoon: {
        food: {
            indian: [
                { name: "Butter Chicken", price: 18, description: "Tender chicken in creamy tomato sauce", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80", badge: "Popular", spicy: 2 },
                { name: "Chicken Biryani", price: 16, description: "Aromatic basmati rice with spiced chicken", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80", badge: "Bestseller", spicy: 2 },
                { name: "Paneer Tikka Masala", price: 15, description: "Grilled cottage cheese in spiced gravy", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80", badge: "Vegetarian", spicy: 2 },
                { name: "Dal Makhani", price: 12, description: "Black lentils simmered with butter and cream", image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=600&q=80", spicy: 1 },
                { name: "Palak Paneer", price: 14, description: "Cottage cheese in creamy spinach gravy", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80", badge: "Healthy", spicy: 1 },
                { name: "Tandoori Chicken", price: 17, description: "Clay oven roasted chicken with spices", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80", badge: "Signature", spicy: 3 },
                { name: "Rogan Josh", price: 19, description: "Tender lamb in aromatic Kashmiri spices", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80", spicy: 3 },
                { name: "Naan Bread", price: 4, description: "Traditional clay oven flatbread", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80", spicy: 0 }
            ],
            chinese: [
                { name: "Kung Pao Chicken", price: 16, description: "Spicy chicken with peanuts and vegetables", image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=600&q=80", badge: "Spicy", spicy: 3 },
                { name: "Sweet and Sour Pork", price: 17, description: "Crispy pork with tangy sauce", image: "https://images.unsplash.com/photo-1580959375944-1ab5b8f7e3f3?w=600&q=80", badge: "Classic", spicy: 1 },
                { name: "Mapo Tofu", price: 14, description: "Silken tofu in spicy Sichuan sauce", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80", badge: "Authentic", spicy: 4 },
                { name: "Beef with Broccoli", price: 18, description: "Tender beef stir-fried with fresh broccoli", image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&q=80", spicy: 1 },
                { name: "Fried Rice", price: 12, description: "Wok-fried rice with eggs and vegetables", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&q=80", badge: "Popular", spicy: 0 },
                { name: "Chow Mein", price: 13, description: "Stir-fried noodles with vegetables", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80", spicy: 1 }
            ]
        },
        snacks: {
            indian: [
                { name: "Pakora", price: 8, description: "Mixed vegetable fritters", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80", badge: "Crispy", spicy: 2 },
                { name: "Paneer Tikka", price: 12, description: "Grilled cottage cheese with spices", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80", spicy: 2 },
                { name: "Chicken Tikka", price: 14, description: "Grilled chicken chunks", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80", badge: "Popular", spicy: 2 }
            ],
            chinese: [
                { name: "Chicken Wings", price: 11, description: "Crispy fried wings with garlic sauce", image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&q=80", badge: "Crispy", spicy: 2 },
                { name: "Pot Stickers", price: 10, description: "Pan-fried dumplings", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80", spicy: 1 }
            ]
        }
    },

    // Evening Menu (4 PM - 8 PM)
    evening: {
        food: {
            indian: [
                { name: "Chicken Curry", price: 17, description: "Classic Indian chicken curry", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80", badge: "Popular", spicy: 3 },
                { name: "Lamb Vindaloo", price: 20, description: "Spicy lamb curry with potatoes", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&q=80", badge: "Spicy", spicy: 4 },
                { name: "Fish Curry", price: 19, description: "Fresh fish in coconut curry", image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=600&q=80", badge: "Coastal", spicy: 2 },
                { name: "Vegetable Korma", price: 14, description: "Mixed vegetables in creamy sauce", image: "https://images.unsplash.com/photo-1585937421612-70e008a2f2d5?w=600&q=80", badge: "Creamy", spicy: 1 },
                { name: "Chicken Tikka Masala", price: 18, description: "Grilled chicken in creamy tomato sauce", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80", badge: "Signature", spicy: 2 }
            ],
            chinese: [
                { name: "Peking Duck", price: 28, description: "Crispy duck with pancakes and sauce", image: "https://images.unsplash.com/photo-1580959375944-1ab5b8f7e3f3?w=600&q=80", badge: "Premium", spicy: 0 },
                { name: "General Tso's Chicken", price: 16, description: "Crispy chicken in sweet and spicy sauce", image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=600&q=80", badge: "Popular", spicy: 3 },
                { name: "Mongolian Beef", price: 19, description: "Tender beef with scallions", image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&q=80", spicy: 2 },
                { name: "Hot Pot", price: 25, description: "Traditional Chinese hot pot for sharing", image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=600&q=80", badge: "Sharing", spicy: 3 }
            ]
        },
        snacks: {
            indian: [
                { name: "Pani Puri", price: 7, description: "Crispy shells with spiced water", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80", badge: "Street Food", spicy: 3 },
                { name: "Chaat", price: 8, description: "Tangy street food snack", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&q=80", badge: "Tangy", spicy: 2 }
            ],
            chinese: [
                { name: "Salt and Pepper Squid", price: 13, description: "Crispy fried squid with spices", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80", badge: "Crispy", spicy: 2 },
                { name: "Sesame Prawn Toast", price: 11, description: "Crispy prawn toast with sesame", image: "https://images.unsplash.com/photo-1619895092538-128341789043?w=600&q=80", spicy: 0 }
            ]
        }
    },

    // Night Menu (8 PM - 2 AM)
    night: {
        food: {
            indian: [
                { name: "Mutton Biryani", price: 19, description: "Aromatic rice with tender mutton", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80", badge: "Specialty", spicy: 3 },
                { name: "Chicken Korma", price: 17, description: "Mild creamy chicken curry", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80", badge: "Mild", spicy: 1 },
                { name: "Prawn Curry", price: 21, description: "Succulent prawns in spiced gravy", image: "https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=600&q=80", badge: "Seafood", spicy: 2 },
                { name: "Kadai Paneer", price: 15, description: "Cottage cheese in bell pepper sauce", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80", spicy: 2 }
            ],
            chinese: [
                { name: "Szechuan Chicken", price: 17, description: "Spicy chicken in Szechuan sauce", image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=600&q=80", badge: "Spicy", spicy: 4 },
                { name: "Beef Noodles", price: 16, description: "Hand-pulled noodles with beef", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80", badge: "Comfort", spicy: 1 },
                { name: "Fried Noodles", price: 14, description: "Crispy noodles with vegetables", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80", spicy: 1 }
            ]
        },
        snacks: {
            indian: [
                { name: "Kebab Platter", price: 16, description: "Assorted grilled kebabs", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80", badge: "Platter", spicy: 2 },
                { name: "Tandoori Platter", price: 18, description: "Mixed tandoori specialties", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80", badge: "Sharing", spicy: 3 }
            ],
            chinese: [
                { name: "BBQ Pork Buns", price: 9, description: "Fluffy buns with BBQ pork", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=80", badge: "Comfort", spicy: 0 },
                { name: "Crispy Tofu", price: 10, description: "Golden fried tofu with sauce", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80", badge: "Vegetarian", spicy: 1 }
            ]
        }
    }
};

// Helper functions remain the same
function getCurrentTimePeriod() {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 11) return 'morning';
    if (hour >= 11 && hour < 16) return 'afternoon';
    if (hour >= 16 && hour < 20) return 'evening';
    return 'night';
}

function getCurrentMenu() {
    const period = getCurrentTimePeriod();
    return menuData[period];
}

function getAllMenuItems() {
    const allItems = [];
    Object.keys(menuData).forEach(timing => {
        if (timing === 'offers') return;
        const timingMenu = menuData[timing];
        Object.keys(timingMenu).forEach(type => {
            Object.keys(timingMenu[type]).forEach(tradition => {
                timingMenu[type][tradition].forEach(item => {
                    allItems.push({ ...item, timing, type, tradition });
                });
            });
        });
    });
    return allItems;
}

function filterMenuItems(filters = {}) {
    let items = getAllMenuItems();
    if (filters.timing) items = items.filter(item => item.timing === filters.timing);
    if (filters.type) items = items.filter(item => item.type === filters.type);
    if (filters.tradition) items = items.filter(item => item.tradition === filters.tradition);
    if (filters.search) {
        const search = filters.search.toLowerCase();
        items = items.filter(item =>
            item.name.toLowerCase().includes(search) ||
            item.description.toLowerCase().includes(search)
        );
    }
    if (filters.maxPrice) items = items.filter(item => item.price <= filters.maxPrice);
    if (filters.spicy !== undefined) items = items.filter(item => item.spicy <= filters.spicy);
    return items;
}

// Export for Node.js if available
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        menuData,
        getCurrentTimePeriod,
        getCurrentMenu,
        getAllMenuItems,
        filterMenuItems
    };
}

// Expose to browser window object
if (typeof window !== 'undefined') {
    window.TasteIT = {
        menuData,
        getCurrentTimePeriod,
        getCurrentMenu,
        getAllMenuItems,
        filterMenuItems
    };
}
