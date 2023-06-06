function validarCampos() {
  var email = document.getElementById("email").value;
  var user = document.getElementById("user").value;
  var senha = document.getElementById("senha").value;
  var senha2 = document.getElementById("senha2").value;

  if (email && user && senha && senha2) {
    alert("Usuário cadastrado com sucesso!!");
    window.location.href = "indexprj.html";
  } else {
    alert("Por favor, preencha todos os campos antes de continuar.");
  }
}

function senhared() {
  var senha = document.getElementById("senha").value;
  var senha2 = document.getElementById("senha2").value;

  if (senha === '' || senha2 === '') {
    alert("Os campos não podem ficar vazios.");
  } else if (senha === senha2) {
    alert("Senha redefinida com sucesso!!");
    window.location.href = "indexprj.html";
  } else {
    alert("As senhas não conferem, tente novamente.");
  }
}

function validarSenhaRed() {
  validarCampos();
  senhared();
}

function user() {
  var admin = document.getElementById("admin").value;
  var senha = document.getElementById("senha").value;

  if (admin === 'admin' || senha === '12345') {
    alert("Seja bem vindo!");
  }else {
    alert("Usuário ou senha incorretos.");
  }

}
