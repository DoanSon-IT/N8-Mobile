const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    navLinks.classList.toggle("active");
})

menu.querySelectorAll("click", () => {
    menu.classList.remove("active");
    navLinks.classList.remove("active");
}
)

$(document).ready(function() {
 
    var thue = 0.3;
    var phiShip = 15.00; 
    var fadeTime = 300;
     
     
    $('.product-quantity input').change( function() {
      updateQuantity(this);
    });
     
    $('.product-removal button').click( function() {
      removeItem(this);
    });
     
     
    /* Tính toán */
    function recalculateCart()
    {
      var subtotal = 0;
       
      $('.product').each(function () {
        subtotal += parseFloat($(this).children('.product-line-price').text());
      });
       
      var tax = subtotal * thue;
      var shipping = (subtotal > 0 ? phiShip : 0);
      var total = subtotal + tax + shipping;
       
      $('.totals-value').fadeOut(fadeTime, function() {
        $('#cart-subtotal').html(subtotal.toFixed(2));
        $('#cart-tax').html(tax.toFixed(2));
        $('#cart-shipping').html(shipping.toFixed(2));
        $('#cart-total').html(total.toFixed(2));
        if(total == 0){
          $('.checkout').fadeOut(fadeTime);
        }else{
          $('.checkout').fadeIn(fadeTime);
        }
        $('.totals-value').fadeIn(fadeTime);
      });
    }
     
     
    /* Update số lượng*/
    function updateQuantity(quantityInput)
    {
      var productRow = $(quantityInput).parent().parent();
      var price = parseFloat(productRow.children('.product-price').text());
      var quantity = $(quantityInput).val();
      var linePrice = price * quantity;
       
      /* Update giá */
      productRow.children('.product-line-price').each(function () {
        $(this).fadeOut(fadeTime, function() {
          $(this).text(linePrice.toFixed(2));
          recalculateCart();
          $(this).fadeIn(fadeTime);
        });
      });  
    }
     
     
    /* Xoá item */
    function removeItem(removeButton)
    {
      var productRow = $(removeButton).parent().parent();
      productRow.slideUp(fadeTime, function() {
        productRow.remove();
        recalculateCart();
      });
    }
     
    });