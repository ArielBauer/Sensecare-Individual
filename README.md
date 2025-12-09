# Sensecare Individual

> **Status do Projeto:** 🧪 Protótipo / Prova de Conceito (Em desenvolvimento)

## 🏥 Sobre o Projeto

O **Sensecare Individual** é um protótipo funcional desenvolvido para simular e validar os conceitos fundamentais do **Projeto Sensecare**.

Enquanto o futuro Sensecare será uma solução completa, polida e totalmente integrada (hardware e software) para hospitais, esta versão **Individual** foca na simulação web da lógica e da experiência do usuário.

O objetivo central deste protótipo é demonstrar como a tecnologia pode resolver o problema da **triagem de chamadas**, permitindo que o enfermeiro:
1.  **Diferencie prioridades:** Distinguir rapidamente entre risco de vida (ex: pressão alta) e solicitações de rotina (ex: pedido de água).
2.  **Evite erros de rotina:** Receber alertas visuais claros sobre horários de medicação e mudança de decúbito.

Esta simulação serve como base de estudos e validação para a construção da versão final do produto.

## 🚀 Funcionalidades Principais

### 1. Painel de Monitoramento (Dashboard)
A tela principal serve como central de comando:
* **Visualização da Equipe e Pacientes:** Lista com status atualizados.
* **Espaço de Simulação (Pulseira do Enfermeiro):** Uma área visual dedicada que representa a interface da pulseira que o enfermeiro usaria no braço, onde os alertas são exibidos.

### 2. Sistema de Alertas e Cores
O sistema simula a recepção de dados de sensores e chamadas, utilizando um código de cores intuitivo para priorização na pulseira do enfermeiro:

* 🔴 **Alerta Crítico (Vermelho):** Situações de risco imediato, como detecção de pressão alta, queda ou alterações vitais graves.
* 🟠 **Alerta de Rotina (Laranja/Amarelo):** Lembretes automáticos para administração de medicação e mudança de decúbito.
* 🟢 **Chamado do Paciente (Verde):** Solicitação voluntária feita pelo paciente (ex: pedido de água, dúvidas ou ajuda simples).

### 3. Gestão de Pacientes
Cadastro com foco na triagem automática:
* **Dados Pessoais:** Nome e Idade.
* **Lógica de Prioridade:** Identificação de riscos (Idosos +60, Gestantes, Deficientes Físicos, Neurodivergentes).
* **Prontuário:** Condições médicas e medicação prescrita.

### 4. Mecânica de Simulação
Como este projeto é um protótipo de validação, existem controles manuais para testar a lógica:
* **Botões de Disparo:** Simulam que o sistema recebeu uma informação externa (seja de um sensor vital ou do chamado do paciente).
* **Botão de Resolução:** Funcionalidade para "desligar" o alerta na pulseira, confirmando que o atendimento foi realizado.

---

## 🛠️ Tecnologias Utilizadas

Este protótipo utiliza tecnologias web para simular a interface e a lógica:

* **Front-end:** HTML5, CSS3, JavaScript (Vanilla).
* **Banco de Dados:** MySQL.

---

## 📋 Backlog e Requisitos

Abaixo, a lista de requisitos organizados por prioridade de implementação neste protótipo.

### 🔴 Prioridade Alta (MVP)
- [ ] **Cadastro de Pacientes:** Inserção de dados para lógica de prioridade.
- [ ] **Tela Principal:** Layout com lista de enfermeiros/pacientes.
- [ ] **Simulação da Pulseira do Enfermeiro:** Interface visual que receberá as notificações.
- [ ] **Lógica de Alertas Coloridos:**
    - Vermelho (Crítico/Pressão).
    - Amarelo (Rotina/Remédio/Decúbito).
    - Verde (Chamado do paciente).
- [ ] **Cadastro de Enfermeiros:** Limite de 4 profissionais e 4 pacientes com dados básicos.

### 🟡 Prioridade Média
- [ ] **Identidade Visual Aprimorada:** Refinamento dos ícones e paleta de cores.
- [ ] **Login:** Autenticação de enfermeiro via CPF e Senha.
- [ ] **Edição:** Alterar dados de pacientes já cadastrados.
- [ ] **Histórico do Paciente:** Log de doenças, histórico atual e medicações administradas.
- [ ] **Confirmação de Chamada em Equipe:** Visualização de quando outro enfermeiro já atendeu um chamado.

---

## 💻 Como rodar o projeto

 1. Clone o repositório:
    git clone https://github.com/ArielBauer/Sensecare-Individual
 2. Abra o projeto no VS Code.
 3. Instale a extensão Live Server, caso não tenha.
 4. Clique no arquivo index.html e clique em Go Live.

* O site deve abrir no seu navegador padrão e estar rodando normalmente.