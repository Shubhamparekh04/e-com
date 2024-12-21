# Ecom Web Application

## Overview
This repository contains a basic e-commerce web application that includes the following components:

1. **Home Page (`index.html`)**: Displays the product listings.
2. **Cart Page (`cart.html`)**: Allows users to view and manage their cart.
3. **JavaScript (`cart.js`)**: Implements the cart functionality.
4. **JavaScript (`script.js`)**: Implements the product view and add-to-cart functionality.

The project uses **Bootstrap** for styling and responsiveness.

---

## File Descriptions

### 1. `index.html`
- **Purpose**: Acts as the homepage of the e-commerce site.
- **Key Features**:
  - Displays a list of products (dynamic content populated by `script.js`).
  - Includes a header with the brand name and a cart icon displaying the number of items in the cart.
  - Uses a dark theme and is styled with Bootstrap classes.
- **Structure**:
  - Header with navigation.
  - Product section.
  - Footer.
- **Dependencies**:
  - Bootstrap CSS and Icons.

### 2. `cart.html`
- **Purpose**: Provides a detailed view of the user's cart and allows them to manage items.
- **Key Features**:
  - Displays items in the cart dynamically.
  - Shows a summary including the total number of products and total price.
  - Buttons to increase, decrease, or remove item quantities.
- **Structure**:
  - Header with navigation.
  - Main content divided into:
    - A product display section.
    - A cart summary section.
- **Dependencies**:
  - Bootstrap CSS and Icons.
  - JavaScript file: `cart.js`.

### 3. `cart.js`
- **Purpose**: Implements the logic for managing cart items.
- **Key Features**:
  - Fetches cart data from `localStorage`.
  - Calculates total price, including discounts.
  - Functions to increase, decrease, and remove item quantities.
  - Dynamically updates the cart UI.
- **Functions**:
  - `getMyCartData()`: Retrieves cart data from local storage.
  - `calculateTotal()`: Computes the total price of all items in the cart.
  - `decreaseQuantity(id)`: Reduces the quantity of an item by 1.
  - `increaseQuantity(id)`: Increases the quantity of an item by 1.
  - `removeItem(id)`: Removes an item from the cart.
  - `showCart()`: Renders the cart and summary on the page.

### 4. `script.js`
- **Purpose**: Handles product listing and the add-to-cart functionality on the homepage.
- **Key Features**:
  - Fetches product data dynamically and renders it on the homepage.
  - Implements the "Add to Cart" functionality, updating cart data in `localStorage`.
  - Displays product details such as title, price, and thumbnail.
- **Functions**:
  - `renderProducts(products)`: Dynamically generates HTML for product listings.
  - `addToCart(productId)`: Adds a product to the cart and updates the cart count in the header.
  - `fetchProducts()`: Retrieves product data from the `products` array in `script.js`.

---

## How to Use

1. Open `index.html` in a browser to view the homepage.
2. Browse products and add them to the cart using the "Add to Cart" buttons.
3. Navigate to the cart page by clicking the cart icon in the header.
4. Manage the cart:
   - Increase or decrease item quantities.
   - Remove items.
   - View the total price and proceed to checkout.

---

## Dependencies

- **Bootstrap** (v5.3.3): For responsive design and pre-built components.
- **Bootstrap Icons**: For icons used in the UI.
- **Popper.js and Bootstrap JS**: For interactive components and scripts.

---

## Future Enhancements

1. **Backend Integration**:
   - Connect the application to a database or an API for dynamic product loading.
   - Persist cart data on the server.

2. **Checkout Process**:
   - Add a payment gateway integration.

3. **Improved UX**:
   - Implement user authentication.
   - Add a search and filter feature for products.

