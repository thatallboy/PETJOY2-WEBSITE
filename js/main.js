// Hamburger Menu Toggle
function toggleMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Filters Toggle for Mobile
function toggleFilters() {
    const sidebar = document.getElementById('shop-sidebar');
    const overlay = document.getElementById('filters-overlay');
    
    if (sidebar) {
        sidebar.classList.toggle('active');
    }
    if (overlay) {
        overlay.classList.toggle('active');
    }
}

// Highlight Active Navigation Link
function highlightActiveNav() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const currentLocation = location.pathname.split('/').pop() || 'index.html';
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentLocation || (currentLocation === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Close menu when clicking on a link
document.addEventListener('DOMContentLoaded', function() {
    highlightActiveNav();
    
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const hamburger = document.getElementById('hamburger');
            const navMenu = document.getElementById('nav-menu');
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

// Product Database
const products = [
    // Vegetables
    { id: 1, name: 'Carrots', category: 'vegetables', price: 1500, emoji: '🥕', stock: 25, description: 'Fresh organic carrots per kg' },
    { id: 2, name: 'Broccoli', category: 'vegetables', price: 2500, emoji: '🥦', stock: 15, description: 'Fresh green broccoli head' },
    { id: 3, name: 'Tomatoes', category: 'vegetables', price: 1200, emoji: '🍅', stock: 30, description: 'Ripe tomatoes per kg' },
    { id: 4, name: 'Lettuce', category: 'vegetables', price: 1800, emoji: '🥬', stock: 20, description: 'Fresh green lettuce' },
    { id: 5, name: 'Bell Peppers', category: 'vegetables', price: 2200, emoji: '🫑', stock: 18, description: 'Assorted bell peppers per kg' },
    { id: 6, name: 'Onions', category: 'vegetables', price: 800, emoji: '🧅', stock: 40, description: 'Yellow onions per kg' },
    
    
    // Dairy
    { id: 13, name: 'Milk', category: 'dairy', price: 2500, emoji: '🥛', stock: 50, description: 'Fresh whole milk 1 litre' },
    { id: 14, name: 'Cheese', category: 'dairy', price: 5500, emoji: '🧀', stock: 22, description: 'Cheddar cheese block 250g' },
    { id: 15, name: 'Yogurt', category: 'dairy', price: 2000, emoji: '🥛', stock: 30, description: 'Plain yogurt 500ml' },
    { id: 16, name: 'Butter', category: 'dairy', price: 3500, emoji: '🧈', stock: 25, description: 'Unsalted butter 250g' },
    { id: 17, name: 'Eggs', category: 'dairy', price: 3000, emoji: '🥚', stock: 40, description: 'Free-range eggs dozen' },
    { id: 18, name: 'Ice Cream', category: 'dairy', price: 4500, emoji: '🍦', stock: 18, description: 'Vanilla ice cream 500ml' },
    
    // Meat & Fish
    { id: 19, name: 'Chicken Breast', category: 'meat', price: 4500, emoji: '🍗', stock: 16, description: 'Boneless chicken breast per kg' },
    { id: 20, name: 'Ground Beef', category: 'meat', price: 6000, emoji: '🥩', stock: 14, description: 'Lean ground beef per kg' },
    { id: 21, name: 'Salmon', category: 'meat', price: 12000, emoji: '🐟', stock: 10, description: 'Fresh salmon fillet per kg' },
    { id: 22, name: 'Shrimp', category: 'meat', price: 10000, emoji: '🦐', stock: 12, description: 'Fresh frozen shrimp per kg' },
    { id: 23, name: 'Pork Chops', category: 'meat', price: 5500, emoji: '🥓', stock: 13, description: 'Boneless pork chops per kg' },
    { id: 24, name: 'Turkey', category: 'meat', price: 7000, emoji: '🦃', stock: 8, description: 'Ground turkey per kg' },
    
    // Bakery
    { id: 25, name: 'Bread', category: 'bakery', price: 800, emoji: '🍞', stock: 20, description: 'Whole wheat bread loaf' },
    { id: 26, name: 'Croissants', category: 'bakery', price: 1500, emoji: '🥐', stock: 15, description: 'Butter croissants pack' },
    { id: 27, name: 'Bagels', category: 'bakery', price: 2000, emoji: '🥯', stock: 18, description: 'Assorted bagels half dozen' },
    { id: 28, name: 'Muffins', category: 'bakery', price: 2500, emoji: '🧁', stock: 12, description: 'Blueberry muffins pack' },
    { id: 29, name: 'Cake', category: 'bakery', price: 8000, emoji: '🎂', stock: 6, description: 'Chocolate cake whole' },
    { id: 30, name: 'Cookies', category: 'bakery', price: 1500, emoji: '🍪', stock: 25, description: 'Chocolate chip cookies pack' },
    
    // Snacks
    { id: 31, name: 'Chips', category: 'snacks', price: 1200, emoji: '🥔', stock: 35, description: 'Potato chips bag' },
    { id: 32, name: 'Nuts', category: 'snacks', price: 3500, emoji: '🥜', stock: 20, description: 'Mixed nuts container 500g' },
    { id: 33, name: 'Chocolate', category: 'snacks', price: 1500, emoji: '🍫', stock: 40, description: 'Dark chocolate bar' },
    { id: 34, name: 'Popcorn', category: 'snacks', price: 1000, emoji: '🍿', stock: 28, description: 'Microwave popcorn pack' },
    { id: 35, name: 'Granola Bar', category: 'snacks', price: 2000, emoji: '🍯', stock: 30, description: 'Granola bars box' },
    { id: 36, name: 'Crackers', category: 'snacks', price: 1200, emoji: '🍘', stock: 25, description: 'Whole grain crackers box' }
    ,
    // Pantry Staples
    { id: 37, name: 'Rice (5kg)', category: 'pantry', price: 8500, emoji: '🍚', stock: 40, description: 'Long grain rice 5kg' },
    { id: 38, name: 'Pasta', category: 'pantry', price: 1500, emoji: '🍝', stock: 35, description: 'Spaghetti pasta 1kg' },
    { id: 39, name: 'Cooking Oil', category: 'pantry', price: 6000, emoji: '🛢️', stock: 25, description: 'Vegetable cooking oil 2L' },

    // Beverages
    { id: 40, name: 'Orange Juice', category: 'beverages', price: 2500, emoji: '🧃', stock: 30, description: 'Fresh orange juice 1L' },
    { id: 41, name: 'Coffee Beans', category: 'beverages', price: 5500, emoji: '☕', stock: 20, description: 'Ground coffee 500g' },
    { id: 42, name: 'Bottled Water', category: 'beverages', price: 500, emoji: '💧', stock: 100, description: 'Natural spring water 500ml' },
    
    // Nigerian Foods - Pantry & Grains
    { id: 43, name: 'Garri', category: 'pantry', price: 3500, emoji: '🌾', stock: 35, description: 'White garri 5kg bag' },
    { id: 44, name: 'Fufu Flour', category: 'pantry', price: 4500, emoji: '🥄', stock: 28, description: 'Plantain fufu flour 2kg' },
    { id: 45, name: 'Moi Moi Mix', category: 'pantry', price: 2000, emoji: '🍲', stock: 20, description: 'Ready-made moi moi powder 500g' },
    { id: 46, name: 'Beans (Black-eyed)', category: 'pantry', price: 3200, emoji: '🫘', stock: 32, description: 'Premium black-eyed beans 5kg' },
    { id: 47, name: 'Cornmeal', category: 'pantry', price: 2800, emoji: '🌽', stock: 25, description: 'Maize cornmeal 2kg' },
    { id: 48, name: 'Gari Ijebu', category: 'pantry', price: 4000, emoji: '🌾', stock: 18, description: 'Quality gari ijebu 5kg' },
    { id: 49, name: 'Locust Beans (Iru)', category: 'pantry', price: 5500, emoji: '🥜', stock: 15, description: 'Fermented locust beans 1kg' },
    { id: 50, name: 'Palm Oil', category: 'pantry', price: 7500, emoji: '🛢️', stock: 22, description: 'Vegetable cooking oil 2L' },
    
    // Nigerian Vegetables & Spices
    { id: 51, name: 'Bitter Leaf (Dried)', category: 'vegetables', price: 3000, emoji: '🍃', stock: 12, description: 'Dried bitter leaf 200g' },
    { id: 52, name: 'African Spinach (Scent Leaf)', category: 'vegetables', price: 2500, emoji: '🌿', stock: 18, description: 'Fresh scent leaf bunch' },
    { id: 53, name: 'Scotch Bonnet Peppers', category: 'vegetables', price: 3500, emoji: '🌶️', stock: 14, description: 'Fresh hot scotch bonnet 500g' },
    { id: 54, name: 'Suya Spice Mix', category: 'pantry', price: 2200, emoji: '🌶️', stock: 20, description: 'Traditional suya spice blend 200g' },
    { id: 55, name: 'Maggi Cubes', category: 'pantry', price: 1800, emoji: '🧂', stock: 45, description: 'Maggi seasoning cubes box' },
    { id: 56, name: 'Thyme Seasoning', category: 'pantry', price: 1500, emoji: '🌿', stock: 25, description: 'Nigerian thyme 100g' },
    
    // Nigerian Snacks & Treats
    { id: 57, name: 'Chin Chin', category: 'snacks', price: 2500, emoji: '🍪', stock: 30, description: 'Homemade chin chin 500g' },
    { id: 58, name: 'Puff Puff Mix', category: 'snacks', price: 1800, emoji: '🍩', stock: 22, description: 'Ready-made puff puff powder 400g' },
    { id: 59, name: 'Plantain Chips', category: 'snacks', price: 2800, emoji: '🍌', stock: 26, description: 'Crispy plantain chips 500g' },
    { id: 60, name: 'Boiled Groundnuts', category: 'snacks', price: 2000, emoji: '🥜', stock: 28, description: 'Boiled peanuts 500g' },
    { id: 61, name: 'Gala', category: 'snacks', price: 500, emoji: '🥓', stock: 50, description: 'Sausage roll stick' },
    { id: 62, name: 'Pepper Soup Mix', category: 'pantry', price: 1600, emoji: '🍲', stock: 24, description: 'Dried pepper soup spice 100g' },
    
    // Nigerian Beverages
    { id: 63, name: 'Milo Powder', category: 'beverages', price: 3500, emoji: '☕', stock: 32, description: 'Milo chocolate powder 400g' },
    { id: 64, name: 'Ginger & Turmeric Drink Mix', category: 'beverages', price: 2500, emoji: '🫖', stock: 19, description: 'Natural ginger turmeric mix 300g' },
    { id: 65, name: 'Zobo Drink Concentrate', category: 'beverages', price: 3000, emoji: '🍓', stock: 16, description: 'Hibiscus zobo concentrate 500ml' },
    { id: 66, name: 'Kunun Mix', category: 'beverages', price: 2200, emoji: '🥤', stock: 20, description: 'Traditional kunun powder 400g' },
    
    // More Nigerian Staples
    { id: 67, name: 'Yam Flour', category: 'pantry', price: 3800, emoji: '🍠', stock: 17, description: 'Premium yam flour 2kg' },
    { id: 68, name: 'Cassava Flour (Gari)', category: 'pantry', price: 3200, emoji: '🥔', stock: 21, description: 'Fine cassava flour 2kg' },
    { id: 69, name: 'Crayfish (Dried)', category: 'pantry', price: 6500, emoji: '🦐', stock: 11, description: 'Premium dried crayfish 500g' },
    { id: 70, name: 'Ogbono Soup Mix', category: 'pantry', price: 4200, emoji: '🍲', stock: 13, description: 'Ogbono seeds 500g' },
    { id: 71, name: 'Jollof Rice Seasoning', category: 'pantry', price: 2800, emoji: '🍚', stock: 29, description: 'Complete jollof seasoning pack' },
    { id: 72, name: 'Coconut Milk (Canned)', category: 'beverages', price: 2500, emoji: '🥥', stock: 24, description: 'Pure coconut milk 400ml' },
    { id: 73, name: 'Salt', category: 'pantry', price: 1200, emoji: '🧂', stock: 50, description: 'Fine table salt 500g' },
    { id: 74, name: 'Noodles', category: 'pantry', price: 800, emoji: '🍜', stock: 60, description: 'Instant noodles pack' }
];

// Shopping Cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Initialize Shop
document.addEventListener('DOMContentLoaded', function() {
    renderProducts(products);
    updateCartCount();
    
    // Check for category filter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    if (categoryParam) {
        const categoryCheckbox = document.querySelector(`.category-filter[value="${categoryParam}"]`);
        if (categoryCheckbox) {
            categoryCheckbox.checked = true;
            applyFilters();
        }
    }
    
    // Add event listeners for filters and search
    document.querySelectorAll('.category-filter').forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });
    
    document.querySelectorAll('.price-filter').forEach(radio => {
        radio.addEventListener('change', applyFilters);
    });
    
    document.querySelectorAll('.availability-filter').forEach(checkbox => {
        checkbox.addEventListener('change', applyFilters);
    });
    
    document.getElementById('search-input').addEventListener('input', applyFilters);
    document.getElementById('sort-select').addEventListener('change', applyFilters);
    
    document.querySelector('.reset-filters').addEventListener('click', resetFilters);
});

// Render Products
function renderProducts(productsToRender) {
    const container = document.getElementById('products-container');
    const noResults = document.getElementById('no-results');
    
    if (productsToRender.length === 0) {
        container.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    container.innerHTML = productsToRender.map(product => `
        <div class="product-item">
            <div class="product-emoji">${product.emoji}</div>
            <h4>${product.name}</h4>
            <p class="product-desc">${product.description}</p>
            <p class="product-price">₦${product.price.toLocaleString('en-NG')}</p>
            <p class="product-stock ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}">
                ${product.stock > 0 ? `${product.stock} in stock` : 'Out of Stock'}
            </p>
            <div class="product-actions">
                <input type="number" class="quantity-input" value="1" min="1" max="${product.stock}">
                <button class="btn btn-small" ${product.stock === 0 ? 'disabled' : ''} onclick="addToCart(${product.id})">
                    ${product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                </button>
            </div>
        </div>
    `).join('');
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const quantityInput = document.querySelector(`input[value="${1}"]`).closest('.product-actions').querySelector('.quantity-input');
    const quantity = parseInt(quantityInput.value);
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            emoji: product.emoji,
            quantity: quantity
        });
    }
    
    saveCart();
    updateCartDisplay();
    updateCartCount();
    showNotification('Added to cart!');
}

// Update Cart Display
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        document.getElementById('cart-total').textContent = '0.00';
        return;
    }
    
    const cartHTML = cart.map(item => `
        <div class="cart-item">
            <span class="cart-item-emoji">${item.emoji}</span>
            <div class="cart-item-details">
                <h5>${item.name}</h5>
                <p>₦${item.price.toLocaleString('en-NG')} x ${item.quantity}</p>
            </div>
            <div class="cart-item-actions">
                <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">🗑</button>
            </div>
        </div>
    `).join('');
    
    cartItemsContainer.innerHTML = cartHTML;
    updateCartTotal();
}

// Update Quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartDisplay();
            updateCartCount();
        }
    }
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartDisplay();
    updateCartCount();
}

// Clear Cart
function clearCart() {
    const modal = document.getElementById('clear-cart-modal');
    const overlay = document.getElementById('modal-overlay');
    modal.classList.add('active');
    overlay.classList.add('active');
}

// Confirm Clear Cart
function confirmClearCart() {
    cart = [];
    saveCart();
    updateCartDisplay();
    updateCartCount();
    closeClearCartModal();
}

// Cancel Clear Cart
function cancelClearCart() {
    closeClearCartModal();
}

// Close Modal
function closeClearCartModal() {
    const modal = document.getElementById('clear-cart-modal');
    const overlay = document.getElementById('modal-overlay');
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

// Update Cart Total
function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cart-total').textContent = total.toLocaleString('en-NG');
}

// Update Cart Count
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

// Save Cart to LocalStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Toggle Cart Sidebar
function toggleCart() {
    const cartSidebar = document.getElementById('cart-sidebar');
    const cartOverlay = document.getElementById('cart-overlay');
    
    cartSidebar.classList.toggle('open');
    cartOverlay.classList.toggle('open');
}

// Apply Filters
function applyFilters() {
    let filtered = [...products];
    
    // Category Filter
    const selectedCategories = Array.from(document.querySelectorAll('.category-filter:checked')).map(c => c.value);
    if (selectedCategories.length > 0) {
        filtered = filtered.filter(p => selectedCategories.includes(p.category));
    }
    
    // Price Filter
    const selectedPrice = document.querySelector('.price-filter:checked');
    if (selectedPrice) {
        const priceRange = selectedPrice.value;
        filtered = filtered.filter(p => {
            if (priceRange === '0-5000') return p.price < 5000;
            if (priceRange === '5000-10000') return p.price >= 5000 && p.price < 10000;
            if (priceRange === '10000-20000') return p.price >= 10000 && p.price < 20000;
            if (priceRange === '20000+') return p.price >= 20000;
            return true;
        });
    }
    
    // Availability Filter
    const inStockOnly = document.querySelector('.availability-filter:checked');
    if (inStockOnly) {
        filtered = filtered.filter(p => p.stock > 0);
    }
    
    // Search Filter
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    if (searchTerm) {
        filtered = filtered.filter(p => 
            p.name.toLowerCase().includes(searchTerm) || 
            p.description.toLowerCase().includes(searchTerm)
        );
    }
    
    // Sorting
    const sortOption = document.getElementById('sort-select').value;
    switch(sortOption) {
        case 'price-low':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'newest':
            filtered.sort((a, b) => b.id - a.id);
            break;
    }
    
    renderProducts(filtered);
}

// Reset Filters
function resetFilters() {
    document.querySelectorAll('.category-filter').forEach(c => c.checked = false);
    document.querySelectorAll('.price-filter').forEach(c => c.checked = false);
    document.querySelectorAll('.availability-filter').forEach(c => c.checked = false);
    document.getElementById('search-input').value = '';
    document.getElementById('sort-select').value = 'default';
    renderProducts(products);
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Scroll-to-top button behavior
(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const scrollBtn = document.getElementById('scroll-top');
        if (!scrollBtn) return;

        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                scrollBtn.classList.add('show');
            } else {
                scrollBtn.classList.remove('show');
            }
        };

        // Show/hide on scroll
        window.addEventListener('scroll', toggleVisibility);
        // Initial check
        toggleVisibility();

        // Click to scroll to top
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
})();
