// Products data (you could replace this with data from a backend)
const products = [
    { id: 1, name: 'Product 1', price: 25.00 },
    { id: 2, name: 'Product 2', price: 45.00 },
    { id: 3, name: 'Product 3', price: 15.00 }
  ];
  
  // Initialize cart and cart count
  let cart = [];
  const cartCountElement = document.getElementById('cartCount');
  
  // Function to update the cart count
  function updateCartCount() {
    cartCountElement.innerText = cart.length;
  }
  
  // Function to render cart items in the modal
  function renderCartItems() {
    const cartItemsList = document.getElementById('cartItems');
    cartItemsList.innerHTML = '';
    cart.forEach(item => {
      const li = document.createElement('li');
      li.innerText = `${item.name} - $${item.price}`;
      cartItemsList.appendChild(li);
    });
  }
  
  // Add product to the cart
  function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
      cart.push(product);
      updateCartCount();
    }
  }
  
  // Event listener for adding products to the cart
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
      const productId = parseInt(e.target.closest('.product').getAttribute('data-id'));
      addToCart(productId);
    });
  });
  
  // Open the cart modal
  document.getElementById('cartButton').addEventListener('click', () => {
    renderCartItems();
    document.getElementById('cartModal').style.display = 'flex';
  });
  
  // Close the cart modal
  document.getElementById('closeCart').addEventListener('click', () => {
    document.getElementById('cartModal').style.display = 'none';
  });
  
  // Initialize cart count
  updateCartCount();
  