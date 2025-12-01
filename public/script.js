// Impede que o usuario possa digitar no input da data
let dataInput=document.getElementById("data");
dataInput.addEventListener("keydown", e => e.preventDefault());
dataInput.addEventListener("keypress", e => e.preventDefault());
dataInput.addEventListener("keyup", e => e.preventDefault());

// Impede que possa colocar a data maior que o dia de hoje
const today = new Date();

const year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();

if (month < 10) {
  month = '0' + month;
};
if (day < 10) {
  day = '0' + day;
};
const formattedDate = `${year}-${month}-${day}`;
dataInput.setAttribute('max', formattedDate);


// Função para enviar novo paciente
function enviaPaciente(){
  // Pega os elementos necessarios
  let nome=document.getElementById("nome");
  let cpf=document.getElementById("cpf");
  let data=document.getElementById("data").value;
//   let modal=document.getElementById("staticBackdrop");

  // Calcula a idade 
  const today = new Date();
  const dataNasc=new Date(data);
  let idade = today.getFullYear() - dataNasc.getFullYear();
  const mesIdade = today.getMonth() - dataNasc.getMonth();
  let dataDia = dataNasc.getDate()+1; // Pega o dia do aniversario e adiciona um para ficar correto.

  // Verifica aniversário
  if(mesIdade < 0){
    idade++;
  }else if(mesIdade > 0){
  }else if(today.getDate() <= dataDia){
    idade++;
  };
  
  // Salva as verificações necessarias 
  let verfNome;
  let verfCpf;
  let verfData;


  // Verifica se a data está vazia e verifica a idade 
  if(data==""){
    dataInput.classList.add('is-invalid');
    verfData=false;
  }else if(idade<18){
    dataInput.classList.remove('is-invalid');
    console.log('menor de idade');
    verfData=true;
  }else if(idade>=60){
    dataInput.classList.remove('is-invalid');
    console.log('maior de 60');
    verfData=true;
  }else{
    dataInput.classList.remove('is-invalid');
    verfData=true;
  };

  // Verifica se o nome não esta vazio
  if(nome.value === ""){
    nome.classList.add('is-invalid');
    verfNome=false;
  }else{
    nome.classList.remove('is-invalid');
    verfNome=true;
  };
  
  // Verifica o CPF
  if(cpf.value.length !== 11 || isNaN(cpf.value)){
    cpf.classList.add('is-invalid')
    verfCpf=false;
  }else{
    cpf.classList.remove('is-invalid')
    verfCpf=true;
  };

  // Verifica se os três estão corretos para efetuar o cadastro
  if(verfCpf==true && verfNome==true && verfData==true){
  console.log(idade, nome.value, cpf.value);
//   modal.hide();
  };
};