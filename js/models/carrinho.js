// Função para atualizar o total
console.log("JavaScript está funcionando!");
function updateTotal() {
  let total = 0;

  // Itera pelas linhas dos produtos
  document.querySelectorAll('tr').forEach(row => {
    const priceElement = row.querySelector('.price');
    const quantityElement = row.querySelector('.quantity');

    if (priceElement && quantityElement) {
      const price = parseFloat(priceElement.getAttribute('data-price')) || 0; // Valor padrão
      const quantity = parseInt(quantityElement.textContent) || 0;
      total += price * quantity;
    }
  });

  // Atualiza o resumo de compra
  const summaryTotal = document.getElementById('summary-total');
  const summarySubtotal = document.getElementById('summary-subtotal');
  if (summaryTotal) summaryTotal.textContent = `R$ ${total.toFixed(2)}`;
  if (summarySubtotal) summarySubtotal.textContent = `R$ ${total.toFixed(2)}`;
}

// Função para alterar a quantidade
function changeQuantity(element, delta) {
  const quantityElement = element.closest('tr').querySelector('.quantity');
  if (quantityElement) {
    let quantity = parseInt(quantityElement.textContent) || 0;
    quantity = Math.max(1, quantity + delta); // Garante que a quantidade não fique menor que 1
    quantityElement.textContent = quantity;
    updateTotal();
  }
}

// Delegação de eventos para "+" e "-" botões
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('plus')) {
    changeQuantity(event.target, 1); // Aumenta a quantidade
  } else if (event.target.classList.contains('minus')) {
    changeQuantity(event.target, -1); // Diminui a quantidade
  } else if (event.target.classList.contains('remove')) {
    // Remove a linha do produto
    const row = event.target.closest('tr');
    if (row) {
      row.remove();
      updateTotal();
    }
  }
});

// Atualiza o total inicial ao carregar a página
updateTotal();
