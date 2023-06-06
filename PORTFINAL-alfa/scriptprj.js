function validarCampos() {
  var email = document.getElementById("email").value;
  var user = document.getElementById("user").value;
  var senhaa = document.getElementById("senhaa").value;
  var senhaa2 = document.getElementById("senhaa2").value;

  if (email && user && senhaa && senhaa2) {
     if (senhaa === senhaa2) {
      window.location.href = "indexprj.html";
      alert("Usuário cadastrado com sucesso!!");
    } else {
      alert("As senhas não conferem, tente novamente.");
    }
    return true;
  } else {
    alert("Por favor, preencha todos os campos antes de continuar.");
    return false;
  }
}

function senhared() {
  var senha = document.getElementById("senha").value;
  var senha2 = document.getElementById("senha2").value;

  if (senha === '' || senha2 === '') {
    alert("Os campos não podem ficar vazios.");
  } else if (senha === senha2) {
    alert("Senha redefinida com sucesso!!");
    } else {
    alert("As senhas não conferem, tente novamente.");
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

    if (email === 'admin' && senha === '12345') {
    window.location.href = "indexprj.html";
    alert("Seja bem vindo!");
  }else {
    alert("Usuário ou senha incorretos.");
  }

}
