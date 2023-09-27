function mascaraCNPJ(cnpj) {
    cnpj = cnpj.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
  
    if (cnpj.length !== 14) {
      return cnpj; // Retorna o CNPJ sem formatação se não tiver 14 dígitos
    }
  
    // Aplica a máscara
    return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  }
  
  // Exemplo de uso:
  const cnpjSemMascara = '12345678901234';
  const cnpjComMascara = mascaraCNPJ(cnpjSemMascara);
  console.log(cnpjComMascara); // Saída: "12.345.678/9012-34"
  

  function mascaraTelefone(telefone) {
    telefone = telefone.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
  
    if (telefone.length === 11) {
      return telefone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    } else if (telefone.length === 10) {
      return telefone.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else {
      return telefone; // Retorna o telefone sem formatação se não tiver 10 ou 11 dígitos
    }
  }
  

  function mascaraData(data) {
    data = data.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
  
    if (data.length > 8) {
      data = data.substring(0, 8); // Limita a data a 8 caracteres
    }
  
    if (data.length >= 5) {
      // Adiciona a máscara para data no formato "DD/MM/AAAA"
      return data.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
    } else {
      return data; // Retorna a data sem formatação se não tiver 5 ou mais dígitos
    }
  }
  
  // Exemplo de uso:
  const data1 = '26091990';
  const data2 = '12052021';
  const dataFormatada1 = mascaraData(data1);
  const dataFormatada2 = mascaraData(data2);
  console.log(dataFormatada1); // Saída: "26/09/1990"
  console.log(dataFormatada2); // Saída: "12/05/2021"
  
  function mascaraCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
  
    if (cpf.length !== 11) {
      return cpf; // Retorna o CPF sem formatação se não tiver 11 dígitos
    }
  
    // Aplica a máscara para CPF no formato "XXX.XXX.XXX-XX"
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }
  
  // Exemplo de uso:
  const cpfSemMascara = '12345678901';
  const cpfComMascara = mascaraCPF(cpfSemMascara);
  console.log(cpfComMascara); // Saída: "123.456.789-01"
  
  export {mascaraCNPJ, mascaraCPF, mascaraData, mascaraTelefone}