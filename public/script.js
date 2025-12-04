// Impede que o usuario possa digitar no input da data
let dataInput=document.getElementById("data"); // Pega o input da data.
dataInput.addEventListener("keydown", e => e.preventDefault());
dataInput.addEventListener("keypress", e => e.preventDefault());
dataInput.addEventListener("keyup", e => e.preventDefault());

// Impede que possa colocar a data maior que o dia de hoje
const today = new Date(); // Pega a data atual.
const year = today.getFullYear(); // Da data atual pega apenas o ano.
let month = today.getMonth() + 1; // Da data atual pega apenas o mês, e adiona +1 para corrigir.
let day = today.getDate(); // Da data atual pega apenas o dia.

// Verifica se o mês e dia precisão de um 0 ao lado, para deixar o formato correto.
if(month < 10){month = '0' + month;};
if(day < 10){day = '0' + day;};
// Salva a data atual correta
const formattedDate = `${year}-${month}-${day}`;
// Adiciona a data atual correta como maximo no input
dataInput.setAttribute('max', formattedDate);


// Função para enviar novo paciente
function enviaPaciente(){
  // Pega os elementos necessários
  let nome = document.getElementById("nome");
  let cpf = document.getElementById("cpf");
  let data = document.getElementById("data").value;

  // Calcula a idade com base no ano e salva a comparação de dia e mês 
  const today = new Date(); // Pega a data atual.
  const dataNasc = new Date(data); // Pega a data do input e deixa no formato de data por precaução.
  let idade = today.getFullYear() - dataNasc.getFullYear(); // Define a idade subtraindo o ano da data do ano atual.
  const mesIdade = today.getMonth() - dataNasc.getMonth(); // Salva a diferença entre o mês da data e o mês atual.""
  let dataDia = dataNasc.getDate()+1; // Pega o dia do aniversário e adiciona um para ficar correto.

  // Verifica aniversário
  if(mesIdade < 0){ // Se a comparação de mês é menor que 0,
    idade++; // Adiciona +1 a idade.
  }else if(mesIdade > 0){ // Se o mês for maior que zero, não faz nada.
  }else if(today.getDate() <= dataDia){ // Sobrando assim quando o mês é 0 e o dia do aniversário é o mesmo da data atual,
    idade++; // Adiciona +1 a idade.
  };
  
  // Salva as verificações necessárias 
  let verfNome; let verfCpf; let verfData;

  // Verifica se a data está vazia e verifica a idade 
  if(data==""){
    dataInput.classList.add('is-invalid'); // Se a data está vazia, dá ao input a classe 'is-invalid', que alerta na tela
    verfData=false; // E define a verificação da data como falsa.
  }else if(idade<18){
    dataInput.classList.remove('is-invalid'); // Se foi possivel calcular a idade, remove a classe 'is-invalid',
    console.log('menor de idade'); // Avisa que é menor de idade pelo console
    verfData=true; // E define a verificação da data como verdadeira.
  }else if(idade>=60){
    dataInput.classList.remove('is-invalid'); // É possivel verificar a idade, então remove a classe 'is-invalid',
    console.log('maior de 60'); // Avisa que tem mais de 60 anos pelo console
    verfData=true; // E define a verificação da data como verdadeira.
  }else{
    dataInput.classList.remove('is-invalid'); // Remove a classe 'is-invalid'
    verfData=true; // E define a verificação da data como verdadeira.
  };

  // Verifica se o nome não esta vazio
  if(nome.value === ""){ // Se o input do nome está vazio,
    nome.classList.add('is-invalid'); // Dá ao input a classe 'is-invalid'
    verfNome=false; // E define a verificação do nome como falso.
  }else{ // Caso não esteja vazio,
    nome.classList.remove('is-invalid'); // Remove a classe 'is-invalid'
    verfNome=true; // E define a verificação do nome como verdadeira.
  };
  
  // Verifica o CPF
  if(cpf.value.length !== 11 || isNaN(cpf.value)){ // Verifica se o cpf NÃO tem 11 digitos ou se NÃO são numeros.
    cpf.classList.add('is-invalid'); // Dá ao input a classe 'is-invalid'
    verfCpf=false; // E define a verificação do cpf como falsa.
  }else{ // O cpf tem 11 digitos e todos são numeros, então
    cpf.classList.remove('is-invalid'); // Remove a classe 'is-invalid'
    verfCpf=true; // E define a verificação do cpf como verdadeira.
  };

  // Verifica se os três estão corretos para efetuar o cadastro
  if(verfCpf==true && verfNome==true && verfData==true){
    const modalElement = document.getElementById('staticBackdrop');
    const modalInstancia = bootstrap.Modal.getInstance(modalElement);
    if(modalInstancia){
      modalInstancia.hide();
    }else{
      console.log('ERROR');
    }};
};