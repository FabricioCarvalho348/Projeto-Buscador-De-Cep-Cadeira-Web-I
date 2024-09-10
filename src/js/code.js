async function pesquisarCep() {
  var cep = document.getElementById("cep");

  if (cep.value == "") alert("CEP Vazio");
  else {
    //Chamada da API
    //https://viacep.com.br/ws/62823000/json/

    try {
      var resposta = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`);
      var dados = await resposta.json();
      console.log(dados);
      console.log(dados.localidade);
      console.log(dados.regiao);
  
      var logradouro = document.getElementById("log");
      var bairro = document.getElementById("bairro");
      var localidade = document.getElementById("loc");
      var estado = document.getElementById("estado");
  
      logradouro.innerHTML = dados.logradouro;
      bairro.innerHTML = dados.bairro;
      localidade.innerHTML = dados.localidade;
      estado.innerHTML = dados.estado;
    }
    catch(e) {
      alert("CEP Inválido!")
    }

  }
}

