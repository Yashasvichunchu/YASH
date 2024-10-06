document.addEventListener('DOMContentLoaded', function() {
    // Function to fetch JSON data
    function fetchData() {
        return fetch('data.json') // Path to your JSON file
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                return {}; // Return empty object on error to prevent further issues
            });
    }
  
    // Function to create accordion item
    function createAccordionItem(item) {
        return `
            <div class="accordion-item">
                <h3 class="accordion-header">
                    <button class="accordion-button" type="button">
                        ${item.name}
                    </button>
                </h3>
                <div class="accordion-content">
                    <img src="${item.imageUrl}" alt="${item.name}" />
                    <p>${item.description}</p>
                    <p><strong>Price:</strong> ${item.price}</p>
                    <p><strong>Purpose:</strong> ${item.purpose}</p>
                    <p><strong>Quantity:</strong> ${item.quantity}</p>
                </div>
            </div>
        `;
    }
  
    // Event listener for "Learn More" buttons
    document.querySelectorAll('.learn-more').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const section = button.getAttribute('data-section');
  
            fetchData().then(data => {
                if (data && data[section]) {
                    const items = data[section];
                    const accordionContainer = document.querySelector('.details');
  
                    // Clear previous content
                    accordionContainer.innerHTML = '';
  
                    // Insert new accordion items
                    items.forEach(item => {
                        accordionContainer.innerHTML += createAccordionItem(item);
                    });
  
                    // Make accordion functional
                    const accordionItems = document.querySelectorAll('.accordion-button');
                    accordionItems.forEach(btn => {
                        btn.addEventListener('click', function() {
                            this.classList.toggle('active');
                            const content = this.nextElementSibling;
                            if (content.style.maxHeight) {
                                content.style.maxHeight = null;
                            } else {
                                content.style.maxHeight = content.scrollHeight + "px";
                            }
                        });
                    });
                } else {
                    console.error('Section not found in data:', section);
                }
            });
        });
    });
});




 

   





document.addEventListener('DOMContentLoaded', function () {
    // Cart Array to store cart items
    let cart = [];

    // Check if cart data already exists in localStorage
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        updateCartUI();
    }

    // Function to fetch product data (simulate fetching from a JSON file)
    function fetchData() {
        return fetch('data.json') // Path to your JSON file
            .then(response => response.json())
            .catch(error => {
                console.error('Error fetching data:', error);
                return []; // Return empty array on error to prevent issues
            });
    }

    // Add to Cart Event Handler
    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            // Get product details
            const productElement = this.closest('.product-item');
            const productName = productElement.querySelector('h3').textContent;
            const productPrice = parseFloat(productElement.querySelector('p strong').nextSibling.textContent.replace('₹', '').trim());

            // Create product object
            const product = {
                name: productName,
                price: productPrice,
                quantity: 1
            };

            // Add product to cart or update quantity if already in cart
            const productIndex = cart.findIndex(item => item.name === productName);
            if (productIndex > -1) {
                cart[productIndex].quantity += 1; // Increment quantity if item already exists
            } else {
                cart.push(product); // Add new product to cart
            }

            // Save cart to localStorage
            localStorage.setItem('cart', JSON.stringify(cart));

            // Update Cart UI
            updateCartUI();
        });
    });

    // Function to update Cart UI
    function updateCartUI() {
        const cartItemsContainer = document.getElementById('cart-items');
        const cartTotalElement = document.getElementById('cart-total');
        cartItemsContainer.innerHTML = ''; // Clear previous content
        let total = 0;

        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - ₹${item.price} x ${item.quantity}`;
            cartItemsContainer.appendChild(listItem);

            total += item.price * item.quantity;
        });

        // Update total in the UI
        cartTotalElement.textContent = total.toFixed(2);
    }
});
