//modelo do carrinho 
function removeItem(button){
    const cartItem =button.closest('.cart-item');
    cartItem.remove();
    alert('Item removido !')
}

function adicionarItem(button){
    const cartAddItem = document.querySelector('.cart-item');
    cartItem.add();
    alert('Item adicionado ');
}   