function toggleForms() {
    const loginForm = document.querySelector('.login-form');   // Seleciona o formulário de login
    const signupForm = document.querySelector('.signup-form'); // Seleciona o formulário de cadastro
    const loginBox = document.getElementById('login-box');     // Seleciona a caixa de texto do login
    const signupBox = document.getElementById('signup-box');   // Seleciona a caixa de texto do cadastro
    const formContainer = document.querySelector('.form-container'); // Seleciona o container dos formulários

    // Log para garantir que a função está sendo executada
    console.log('Trocando de formulário');

    // Alternar entre exibir e esconder os formulários
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'flex';      // Exibe o formulário de login
        signupForm.style.display = 'none';     // Esconde o formulário de cadastro
    } else {
        loginForm.style.display = 'none';      // Esconde o formulário de login
        signupForm.style.display = 'flex';     // Exibe o formulário de cadastro
    }

    // Alternar o texto da caixa de informação
    if (loginBox.style.display === 'none') {
        loginBox.style.display = 'block';
        signupBox.style.display = 'none';
    } else {
        loginBox.style.display = 'none';
        signupBox.style.display = 'block';
    }

    // Alternar a classe que move o bloco verde para cima ou para baixo
    formContainer.classList.toggle('signup-active');
}