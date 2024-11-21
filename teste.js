const produtos = [
    {
      "id": 1,
      "nome": "Furadeira Parafusadeira De Impacto Bateria 18v Wesco Ws2319",
      "modelo": "WS2319",
      "marca": "Wesco",
      "descricao": "Furadeira Parafusadeira de Impacto 1/2\" Bateria 18V Wesco WS2319 - 01 Bateria 18V 2.0Ah + Carregador Rápido Bivolt - Motor Brushless",
      "especificacoes": [
        "Alimentação: Bateria 18V Wesco",
        "Tensão: 18V",
        "Rotações: 0 - 500 / 0 - 2000 RPM",
        "Impacto: 0 - 9600 / 0 - 32000 IPM",
        "Torque: 60Nm",
        "Capacidades: 40mm em madeira, 13mm em metal, 16mm em alvenaria",
        "Motor: sem escovas"
      ],
      "itensAcompanha": [
        "01 bateria 18V 2.0Ah",
        "01 Carregador Bivolt Rápido",
        "01 clip para cinto"
      ],
      "garantia": "1 ano de garantia direto com o fabricante",
      "preco": "1074.90",
      "parcelas": "Até 12x R$104,21",
      "imagens": [
        "",
        "https://exemplo.com/imagem2.jpg",
        "https://exemplo.com/imagem3.jpg"
      ]
    }

  ,
  {
    "id": 2,
    "nome": "Parafusadeira Furadeira de Impacto Wesco 3/8 Carregador Bivolt",
    "modelo": "WS2547",
    "marca": "Wesco",
    "descricao": "Furadeira Parafusadeira de Impacto 3/8\" Bateria 12V Wesco WS2547 - Com 01 Bateria de 1.Ah + 01 Carregar",
    "especificacoes": [
      "Alimentação: Bateria 12V 1.5Ah Li-ion",
      "Tensão: 12V",
      "Rotações: 0-350 / 0-1350 RPM",
      "Impacto: 0-5600 / 0-21600 IPM",
      "Torque: Posição de torque: 21 + 1 + 1; Torque máximo: 25Nm",
      "Capacidades: Capacidade máxima de perfuração em aço: 8m; Capacidade máxima de perfuração em alvenaria: 8mm; Capacidade máxima de perfuração em madeira: 20mm",
      "Motor: sem escovas"
    ],
    "itensAcompanha": [
      "01 bateria 18V 2.0Ah",
      "01 Carregador Bivolt Rápido",
      "01 clip para cinto"
    ],
    "garantia": "1 ano de garantia direto com o fabricante",
    "preco": "483,90",
    "parcelas": "Até 12x R$104,21",
    "imagens": [
      "",
      "https://exemplo.com/imagem2.jpg",
      "https://exemplo.com/imagem3.jpg"
    ]
  }
,
  {
    "id": 3,
    "nome": "Parafusadeira Furadeira de Impacto Wesco 3/8 Carregador Bivolt",
    "modelo": "WS2547",
    "marca": "Wesco",
    "descricao": "Furadeira Parafusadeira de Impacto 3/8\" Bateria 12V Wesco WS2547 - Com 01 Bateria de 1.Ah + 01 Carregar",
    "especificacoes": [
      "Alimentação: Bateria 12V 1.5Ah Li-ion",
      "Tensão: 12V",
      "Rotações: 0-350 / 0-1350 RPM",
      "Impacto: 0-5600 / 0-21600 IPM",
      "Torque: Posição de torque: 21 + 1 + 1; Torque máximo: 25Nm",
      "Capacidades: Capacidade máxima de perfuração em aço: 8m; Capacidade máxima de perfuração em alvenaria: 8mm; Capacidade máxima de perfuração em madeira: 20mm",
      "Motor: sem escovas"
    ],
    "itensAcompanha": [
      "01 bateria 18V 2.0Ah",
      "01 Carregador Bivolt Rápido",
      "01 clip para cinto"
    ],
    "garantia": "1 ano de garantia direto com o fabricante",
    "preco": "483,90",
    "parcelas": "Até 12x R$104,21",
    "imagens": [
      "",
      "https://exemplo.com/imagem2.jpg",
      "https://exemplo.com/imagem3.jpg"
    ]
  }
]

// Função para carregar a porqueira dos produtos
const carregarProdutos = () => {
  const produtos_ref = document.getElementById("produtos");

  // Exibe os produtos disponíveis
  produtos.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.nome} (${item.id})`;
    produtos_ref.appendChild(li);

    const adicionarBtn = document.createElement("button");
    adicionarBtn.textContent = "Adicionar";
    adicionarBtn.onclick = () => adicionarProduto(item.id);
    li.appendChild(adicionarBtn);
  });
}

// Carrega o carinho, caso exista produtos
const carregarCarrinho = () => {
  const itens = JSON.parse(localStorage.getItem("carrinho")) || [];
  const 
    carrinho_ref = document.getElementById("carrinho"),
    botoes_ref = document.getElementById("botoes");

  carrinho_ref.innerHTML = "";
  botoes_ref.innerHTML = "";
  if(itens.length > 0) {
    itens.forEach(item => {
      const li = document.createElement("li");
      li.textContent = produtos[produtos.findIndex(i => i.id === item)].nome;
      carrinho_ref.appendChild(li);

      const removerBtn = document.createElement("button");
      removerBtn.textContent = "Remover";
      removerBtn.onclick = () => removerProduto(item);
      li.appendChild(removerBtn);
    });

    // Um monte de botão aff
    const 
      limparBtn = document.createElement("button"),
      link = document.createElement("a"),
      finalizarBtn = document.createElement("button");
    
    link.setAttribute("target", "_blank");
    link.setAttribute("href", gerarLink());
    limparBtn.textContent = "Esvaziar carrinho";
    limparBtn.onclick = () => limparCarrinho();
    finalizarBtn.textContent = "Finalizar compra";
    finalizarBtn.onclick = () => limparCarrinho();
    botoes_ref.appendChild(limparBtn);
    botoes_ref.appendChild(link);
    link.appendChild(finalizarBtn);
  } else {
    // Tá
    const text = document.createTextNode("Não há produtos no carrinho.");
    carrinho_ref.appendChild(text);
  }
}

// Adiciona um produto ao carrinho shhshshshshshs
const adicionarProduto = (id) => {
  const itens = JSON.parse(localStorage.getItem("carrinho")) || [];
  itens.push(id);
  localStorage.setItem("carrinho", JSON.stringify(itens));
  carregarCarrinho();
}

// Remove um produto do carrinho shhshshshshshs
const removerProduto = (id) => {
  const itens = JSON.parse(localStorage.getItem("carrinho")) || [];
  const item = itens.findIndex(i => i === id);
  if(item >= 0) itens.splice(item, 1);
  localStorage.setItem("carrinho", JSON.stringify(itens));
  carregarCarrinho();
}


// Limpa o carrinho
const limparCarrinho = () => {
  localStorage.removeItem("carrinho");
  carregarCarrinho();
}

// Gera o link do zapers
const gerarLink = () => {
  const itens = JSON.parse(localStorage.getItem("carrinho")) || [];
  let lista = "🛍 *Pedido*\nOlá, tenho interesse em comprar os seguintes produtos:\n";

  itens.forEach((item, index) => {
    const produto = produtos[produtos.findIndex(i => i.id === item)];
    lista += `${index + 1}. *${produto.nome}* (Modelo: ${produto.modelo})\n`;
  });

  return "https://wa.me/5515998552790?text=" + encodeURI(lista);
}

window.addEventListener("load", () => {
  carregarProdutos();
  carregarCarrinho();
});