//modelo do carrinho 
function removeItem(button) {
    // Remove o elemento pai do botão, que é o item do carrinho
    const cartItem = button.parentElement;
    cartItem.remove();

    //pega elementos do html 
    const summary = document.querySelector(".summary");
    summary.querySelector(".total").textContent = "Total: R$ 0,00";
    summary.querySelector(".discount-price").textContent = "à vista R$ 0,00 no PIX com 15% desconto";
}
