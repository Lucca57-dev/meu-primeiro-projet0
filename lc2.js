function entrar() {
    const emailInput = document.getElementById("email");
    const senhaInput = document.getElementById("senha");
    const mensagem = document.getElementById("mensagem");
  
    const emailDigitado = emailInput.value.trim();
    const senhaDigitada = senhaInput.value.trim();
  
    mensagem.className = "";
  
    if (!emailDigitado || !senhaDigitada) {
      mensagem.textContent = "Preenche o e-mail e a senha.";
      mensagem.classList.add("erro");
      return;
    }
  
    if (emailDigitado === "teste@teste.com" && senhaDigitada === "1234") {
      mensagem.textContent = "Login realizado com sucesso!";
      mensagem.classList.add("sucesso");
    } else {
      mensagem.textContent = "E-mail ou senha incorretos.";
      mensagem.classList.add("erro");
      //pqp
    }
  }