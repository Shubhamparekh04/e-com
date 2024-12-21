'use strict';
let product = document.querySelector('.product');
let cartSummary = document.getElementById('cartSummary');

// method to retrieve Cart data from local memory
let getMyCartData = () => {
    return JSON.parse(localStorage.getItem('myCart')) || [];
}

// Fetching cart data from local memory
let cartItems = getMyCartData();

// Function to calculate the total price
let calculateTotal = () => {
    let total = 0;

    // // Loop through each cart item and calculate the total considering quantity
    cartItems.forEach(item => {
        // Calculate price after discount
        let priceAfterDiscount = item.price - Math.round((item.price * item.discountPercentage) / 100);

        // Multiply price after discount with the quantity
        total += priceAfterDiscount * item.qty;
    });

    return total;
}

// Decrease quantity
let decreaseQuantity = (id) => {
    let recs = getMyCartData();
    let singleRec = recs.find(ele => ele.id == id);

    if (singleRec.qty > 1) {
        singleRec.qty -= 1;
    }

    localStorage.setItem('myCart', JSON.stringify(recs));
    cartItems = getMyCartData();
    showCart();
}

// Increase quantity
let increaseQuantity = (id) => {
    let recs = getMyCartData();
    let singleRec = recs.find(ele => ele.id == id);

    singleRec.qty += 1;

    localStorage.setItem('myCart', JSON.stringify(recs));
    cartItems = getMyCartData();
    showCart();
}

// Remove item from cart
let removeItem = (id) => {
    let records = getMyCartData();
    records = records.filter(ele => ele.id != id);
    localStorage.setItem('myCart', JSON.stringify(records));
    cartItems = getMyCartData();
    showCart();
}

// Showing Cart data
let showCart = () => {
    product.innerHTML = '';
    cartSummary.innerHTML = ``;
    cartItems.forEach((ele) => {
        let priceAfterDiscount = (ele.price - Math.round((ele.price * ele.discountPercentage) / 100)).toFixed(2);
        product.innerHTML += `
        <div class="card shadow-sm border-0 p-3">
            <div class="row align-items-center g-3">
                <!-- Product Image -->
                <div class="col-4 col-md-3">
                    <a href="#">
                        <img src="${ele.thumbnail}" 
                             alt="product-image" class="img-fluid rounded">
                    </a>
                </div>
                <!-- Product Details -->
                <div class="col">
                    <div class="d-flex justify-content-between align-items-center">
                        <a class="h5 text-decoration-none text-white" href="#">${ele.title}</a>
                        <span class="h5 text-success">$${priceAfterDiscount}</span>
                    </div>
                    <ul class="list-unstyled mt-2">
                        <li class="text-secondary small">Brand: ${ele.brand}</li>
                        <li class="text-secondary small">Return Policy: ${ele.returnPolicy}</li>
                        <li class="text-secondary small">Warranty: ${ele.warrantyInformation}</li>
                    </ul>
                    <div class="d-flex align-items-center">
                        <!-- Decrease Quantity -->
                        <button class="btn btn-outline-light p-0 px-2 fs-5" onclick="decreaseQuantity(${ele.id})">
                            <i class="bi bi-dash-circle"></i>
                        </button>
                        <span class="mx-3">${ele.qty}</span>
                        <!-- Increase Quantity -->
                        <button class="btn btn-outline-light p-0 px-2 fs-5" onclick="increaseQuantity(${ele.id})">
                            <i class="bi bi-plus-circle"></i>
                        </button>
                        <!-- Remove Item -->
                        <button class="btn btn-outline-danger ms-auto p-0 px-2 fs-5" onclick="removeItem(${ele.id})">
                            <i class="bi bi-trash3"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>`;
    });


    //Cart summary
    cartSummary.innerHTML = `
                            <h5 class="mb-4">Cart Summary</h5>
                    <ul class="list-unstyled mb-3">
                        <li class="d-flex justify-content-between">
                            <span>Products:</span>
                            <span class="text-success">${cartItems.length}</span>
                        </li>
                        <li class="d-flex justify-content-between">
                            <span>Shipping:</span>
                            <span class="text-success">Free</span>
                        </li>
                        <li class="d-flex justify-content-between fw-bold">
                            <span>Total:</span>
                            <span class="text-success">$${calculateTotal().toFixed(2)}</span>
                        </li>
                    </ul>
                    <a href="#" class="btn btn-success w-100">Proceed to Checkout</a>
    `;
};

showCart();
