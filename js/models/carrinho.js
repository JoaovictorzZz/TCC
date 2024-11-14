function updateTotal() {
    let total = 0;
    
    // Percorre cada linha da tabela e calcula o subtotal
    document.querySelectorAll('tr').forEach(row => {
      const priceElement = row.querySelector('.price');
      const quantityElement = row.querySelector('.quantity');
      
      if (priceElement && quantityElement) {
        const price = parseFloat(priceElement.getAttribute('data-price')); // Preço original
        const quantity = parseInt(quantityElement.textContent);
        total += price * quantity;
      }
    });
  
    // Atualiza o valor total na caixa de resumo da compra
    document.getElementById('summary-total').textContent = `R$ ${total.toFixed(2)}`;
    document.getElementById('summary-subtotal').textContent = `R$ ${total.toFixed(2)}`; // Se precisar de subtotal
  }
  
  // Função para remover o produto
  document.querySelectorAll('.remove').forEach(button => {
    button.addEventListener('click', function () {
      this.closest('tr').remove();
      updateTotal(); // Atualiza o total ao remover
    });
  });
  
  // Função para aumentar a quantidade
  document.querySelectorAll('.plus').forEach(button => {
    button.addEventListener('click', function () {
      const quantityElement = this.previousElementSibling;
      let quantity = parseInt(quantityElement.textContent);
      quantityElement.textContent = quantity + 1;
      updateTotal(); // Atualiza o total ao aumentar a quantidade
    });
  });
  
  // Função para diminuir a quantidade
  document.querySelectorAll('.minus').forEach(button => {
    button.addEventListener('click', function () {
      const quantityElement = this.nextElementSibling;
      let quantity = parseInt(quantityElement.textContent);
      if (quantity > 1) {
        quantityElement.textContent = quantity - 1;
        updateTotal(); // Atualiza o total ao diminuir a quantidade
      }
    });
  });
  
  // Atualiza o total inicial ao carregar a página
  updateTotal();

  