// Selecionar os elementos da interface do menu
let cartIcon = document.querySelector("#menu-icon"); // Ícone do menu
let cart = document.querySelector(".menu"); // Área do menu
let closeCart = document.querySelector("#close-cart"); // Ícone para fechar o menu

// Quando o ícone do menu é clicado, mostra ou oculta o menu
cartIcon.addEventListener("click", function() {
    cart.classList.toggle("active");
});

// Quando o ícone para fechar o menu é clicado, esconde o menu
closeCart.addEventListener("click", function() {
    cart.classList.remove("active");
});

// Adiciona event listeners para os botões "menu" em cada produto
document.addEventListener("DOMContentLoaded", function() {
    var addCartButtons = document.querySelectorAll('.add-menu');
    addCartButtons.forEach(button => {
        button.addEventListener("click", addCartClicked);
    });
});

// Função para o "Hover" permanecer ao ser clicado
document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-op li');

    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            menuItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

// Adiciona event listeners para os itens do menu
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-op li');

    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            // Fecha o menu
            const menu = document.querySelector('.menu');
            menu.classList.remove('active');

            // Obtém o ID da seção correspondente ao item do menu clicado
            const sectionId = this.querySelector('a').getAttribute('href').slice(1);

            // Encontra a seção correspondente
            const section = document.getElementById(sectionId);

            // Rola a página para a seção correspondente
            section.scrollIntoView({ behavior: 'smooth' });

            // Impede que o link padrão seja seguido
            event.preventDefault();
        });
    });
});
