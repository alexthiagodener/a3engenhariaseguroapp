// Definindo as perguntas
const questions = [
    {
      question: "O que é autenticação de dois fatores e por que é importante usá-la?",
      choices: [
        "Um método de autenticação que usa duas senhas em vez de uma",
        "Um método de autenticação que usa dois fatores físicos, como um cartão inteligente e uma impressão digital",
        "Um método de autenticação que usa dois fatores diferentes, como uma senha e um código enviado por SMS",
        "Um método de autenticação que usa um fator de autenticação forte, como um token de segurança",
      ],
      answer: 2,
    },
    {
      question: 'Qual é a diferença entre uma conexão HTTP e uma conexão HTTPS?',
      choices: [
        'HTTP é mais seguro que HTTPS',
        'HTTPS usa criptografia para proteger as informações transmitidas',
        'HTTP usa criptografia para proteger as informações transmitidas',
        'Não há diferença entre as duas'
      ],
      answer: 1
    },
    {
      question: 'O que é phishing e como podemos nos proteger dele?',
      choices: [
        'Uma técnica de invasão que usa softwares maliciosos para se infiltrar em sistemas',
        'Uma técnica de invasão que utiliza engenharia social para enganar usuários a revelarem informações pessoais',
        'Uma técnica de invasão que se aproveita de vulnerabilidades em softwares para acessar informações',
        'Uma técnica de invasão que se aproveita de vulnerabilidades em hardware para acessar informações'
      ],
      answer: 1
    },
    {
      question: 'Quais são as melhores práticas para criar senhas seguras?',
      choices: [
      'Usar senhas curtas e fáceis de lembrar',
      'Usar a mesma senha para todas as contas',
      'Usar uma combinação de letras, números e caracteres especiais',
      'Compartilhar a senha com outras pessoas'
      ],
      answer: 2
      },
      {
        question: 'Como podemos proteger nossas informações pessoais em redes Wi-Fi públicas?',
        choices: [
        'Não usar redes Wi-Fi públicas',
        'Usar uma VPN',
        'Não acessar informações confidenciais em redes Wi-Fi públicas',
        'Usar senhas fracas para evitar que os invasores se interessem por nossos dados'
        ],
        answer: 1
        },
        {
          question: 'O que é um vírus de computador?',
          choices: [
            'Um tipo de software que ajuda a proteger o computador contra ataques',
            'Um tipo de programa que ajuda a acelerar o desempenho do computador',
            'Um tipo de programa malicioso que se espalha e infecta outros arquivos do computador',
            'Um tipo de programa que é usado para criar documentos e planilhas'
          ],
          answer: 2
        },
        {
          question: 'Por que é importante manter seus dispositivos atualizados com as últimas atualizações de segurança?',
          choices: [
          'As atualizações geralmente deixam os dispositivos mais lentos',
          'As atualizações podem causar problemas de compatibilidade com outros softwares',
          'As atualizações corrigem vulnerabilidades de segurança e protegem contra novas ameaças',
          'As atualizações adicionam novos recursos e funcionalidades ao dispositivo'
          ],
          answer: 2
          },
        {
        question: 'O que é criptografia e por que é importante para a segurança dos dados?',
        choices: [
        'Um método para excluir permanentemente dados de um dispositivo',
        'Um método para esconder dados em um dispositivo',
        'Um método para converter dados em um formato ilegível para proteger sua confidencialidade',
        'Um método para detectar e corrigir erros de dados'
        ],
        answer: 2
        },
        {
          question: 'O que é um ataque de negação de serviço (DDoS)?',
          choices: [
            'Um ataque que força um usuário a sair de sua conta online',
            'Um ataque que sequestra os dados de um usuário',
            'Um ataque que sobrecarrega um servidor ou rede, tornando-a inacessível',
            'Um ataque que instala malware em um dispositivo'
          ],
          answer: 2
        },
        {
          question: "Como podemos verificar se um site é seguro antes de fornecer informações pessoais?",
          choices: [
          "Verificar se o site tem um cadeado verde na barra de endereço do navegador",
          "Verificar se o site tem muitos anúncios",
          "Verificar se o site pede informações pessoais",
          "Não há como verificar a segurança de um site"
          ],
          answer: 0
          }


  ];
  
  // Obtendo os elementos do HTML
  const questionEl = document.getElementById("question");
  const choicesEl = document.getElementById("choices");
  const submitBtn = document.getElementById("submit");
  const resultEl = document.getElementById("result");
  
  // Variáveis do quiz
  let currentQuestion = 0;
  let score = 0;
  
  // Função para carregar a pergunta atual
  function loadQuestion() {
    const question = questions[currentQuestion];
    questionEl.textContent = question.question;
    choicesEl.innerHTML = "";
  
    // Adicionando as opções de resposta
    question.choices.forEach((choice, index) => {
      const li = document.createElement("li");
      li.innerHTML = `<input type="radio" name="answer" value="${index}" required> ${choice}`;
      choicesEl.appendChild(li);
    });
  }
  
  // Carregando a primeira pergunta
  loadQuestion();
  
  // Função para verificar a resposta do usuário e mostrar a próxima pergunta
  submitBtn.addEventListener("click", () => {
    const answerEls = document.getElementsByName("answer");
    let userAnswer;
  
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        userAnswer = answerEl.value;
      }
    });
  
    if (userAnswer === undefined) {
      alert("Por favor, selecione uma resposta");
      return;
    }
  
    if (userAnswer == questions[currentQuestion].answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion >= questions.length) {
      // Mostrando o resultado final
      resultEl.innerHTML = `<h2>Você acertou ${score} de ${questions.length} perguntas.</h2>`;
      submitBtn.disabled = true;
    } else {
      // Carregando a próxima pergunta
      loadQuestion();
    }
  });
  // Exibe o resultado do quiz
function showResult() {
  quiz.style.display = 'none';
  result.innerHTML = `Você acertou ${score} de ${quizData.length} perguntas!`;
}


  