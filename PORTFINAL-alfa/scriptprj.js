function validarCampos() {
  var email = document.getElementById("email").value;
  var user = document.getElementById("user").value;
  var senha = document.getElementById("senha").value;
  var senha2 = document.getElementById("senha2").value;

  if (email && user && senha && senha2) {
    if (senha === senha2) {
      alert("Usuário cadastrado com sucesso!! Clique em Voltar à página inicial.");
      window.location.href = "indexprj.html";
    } else {
      alert("As senhas não conferem, tente novamente.");
    }
    return true;
  } else {
    alert("Por favor, preencha todos os campos antes de continuar.");
    return false;
  }
}

function validarSenhaRed() {
  var camposValidos = validarCampos();
  if (camposValidos) {
    senhared();
  }
}

function user() {
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  if (email === 'admin' || senha === '12345') {
    alert("Seja bem vindo!");
  }else {
    alert("Usuário ou senha incorretos.");
  }

}
