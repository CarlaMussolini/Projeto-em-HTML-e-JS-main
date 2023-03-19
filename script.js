function cadastroPessoas(nome, email, dias, meses, anos, cargo) {
  
    var tb = document.getElementById("tabela");
    var quantidadelinhas = tb.rows.length;
    var linha = tb.insertRow(quantidadelinhas);
  
    var cellcodigo = linha.insertCell(0);
    var cellcodigoNome = linha.insertCell(1);
    var cellcodigoEmail = linha.insertCell(2);
    var cellcodigoDias = linha.insertCell(3);
    var cellcodigoMeses = linha.insertCell(4);
    var cellcodigoAnos = linha.insertCell(5);
    var cellcodigoCargo = linha.insertCell(6);
  
    cellcodigo.innerHTML = quantidadelinhas;
    cellcodigoNome.innerHTML = nome;
    cellcodigoEmail.innerHTML = email;
    cellcodigoDias.innerHTML = dias;
    cellcodigoMeses.innerHTML = meses;
    cellcodigoAnos.innerHTML = anos;
    cellcodigoCargo.innerHTML = cargo;
  
  }
