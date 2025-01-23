import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../Button';
import { ArrowLeft, CheckCheck } from 'lucide-react';
import './style.css';

interface Question {
  question: string;
  options: string[];
  answer: number;
  subject: string;
}

export function Quiz() {
  const [score, setScore] = useState<number>(0);
  const [answered, setAnswered] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<string>('');
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);

  const questions: Question[] = [
    {
      question: "O que é um Buraco Negro?",
      options: ["Objeto com grande massa e densidade", "Uma estrela supernova", "Uma nebulosa densa", "Uma estrela normal"],
      answer: 0,
      subject: "Buraco Negro"
    },
    {
      question: "Qual é a principal característica de uma Nebulosa?",
      options: [ "São buracos negros", "São estrelas muito antigas", "São planetas gasosos","São áreas de formação de estrelas"],
      answer: 3,
      subject: "Nebulosas"
    },
    {
      question: "O que são exoplanetas?",
      options: [ "Planetas gigantes gasosos","Planetas fora do nosso sistema solar", "Estrelas", "Cometas"],
      answer: 1,
      subject: "Exoplanetas"
    },
    {
      question: "O que é a Astronomia Observacional?",
      options: ["Estudo de objetos e fenômenos no espaço através de telescópios", "Estudo de cometas apenas", "Estudo da atmosfera terrestre", "Estudo da biologia em outros planetas"],
      answer: 0,
      subject: "Astronomia Observacional"
    },
    {
      question: "Qual é a composição principal de uma estrela?",
      options: ["Oxigênio e nitrogênio", "Carbono e oxigênio","Hidrogênio e hélio",  "Água e carbono"],
      answer: 2,
      subject: "Estrelas"
    },
    {
      question: "O que são cometas?",
      options: [ "Planetas formados por gases","Corpos de gelo e poeira que viajam pelo sistema solar", "Estrelas que explodiram", "Regiões de colisão de asteroides"],
      answer: 1,
      subject: "Cometas"
    },
    {
      question: "O que é um Eclipse Solar?",
      options: ["Quando a Lua passa entre a Terra e o Sol", "Quando a Terra passa entre a Lua e o Sol", "Quando o Sol explode", "Quando uma estrela é coberta por uma nebulosa"],
      answer: 0,
      subject: "Eclipses"
    },
    {
      question: "Quais são os principais métodos de busca por exoplanetas?",
      options: [ "Observação de buracos negros", "Exploração de cometas", "Observação direta de estrelas","Método de trânsito e de velocidade radial"],
      answer: 3,
      subject: "Exoplanetas"
    },
    {
      question: "O que significa o termo 'Exploração Espacial'?",
      options: [ "Construção de bases em Marte","Estudo e exploração do espaço através de missões espaciais", "Exploração do fundo dos oceanos", "Pesquisa de vida extraterrestre em laboratórios"],
      answer: 1,
      subject: "Exploração Espacial"
    },
    {
      question: "Qual é a função de um telescópio espacial?",
      options: [ "Medir a temperatura das estrelas", "Captar imagens da Terra","Observar o espaço sem a interferência da atmosfera", "Estudar cometas de perto"],
      answer: 2,
      subject: "Tecnologia Espacial"
    },
  ];

  const handleAnswer = (questionIndex: number, selectedOption: number) => {
    if (answered) return;

    setSelectedOptions(prev => {
      const updatedSelections = [...prev];
      updatedSelections[questionIndex] = selectedOption;
      return updatedSelections;
    });

    if (selectedOption === questions[questionIndex].answer) {
      setScore(prevScore => prevScore + 1);
    }
  };

  const handleSubmit = () => {
    setAnswered(true);
    if (score === questions.length) {
      setFeedback("Parabéns! Você tem um ótimo conhecimento sobre o Cosmos.");
    } else if (score >= questions.length * 0.7) {
      setFeedback("Bom trabalho! Mas ainda há pontos que você pode melhorar.");
    } else {
      setFeedback("Parece que você ainda precisa revisar alguns tópicos. Continue estudando!");
    }
  };

  return (
    <div className="quiz-container">
      <h2 className="quiz-title">Quiz: Explorando o Cosmos</h2>
      <div className="questions">
        {questions.map((question, index) => (
          <div key={index} className="question">
            <p>{question.question}</p>
            <div className="options">
              {question.options.map((option, i) => {
                let optionClass = "";

                if (answered) {
                  if (i === question.answer) {
                    optionClass = "correct";  // Resposta correta
                  } else if (i === selectedOptions[index] && i !== question.answer) {
                    optionClass = "incorrect";  // Resposta errada
                  }
                } else if (i === selectedOptions[index]) {
                  optionClass = "selected";  // Opção selecionada
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleAnswer(index, i)}
                    disabled={answered}
                    className={`option-button ${optionClass}`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div id="botoesquiz">
        {!answered ? (
          <Button
            Icon={CheckCheck}
            onClick={handleSubmit}
            style={{
              backgroundColor: '#3b0764',
              border: '2px solid #93c5fd',
              marginTop: '2rem'
            }}
          >
            Finalizar Quiz
          </Button>
        ) : (
          <div className="feedback">
            <p>Pontuação: {score} de {questions.length}</p>
            <p>{feedback}</p>
          </div>
        )}
      </div>

      
      <div id="back-button-container">
        <Link to="/acessivel">
          <Button
            Icon={ArrowLeft}
            style={{
              backgroundColor: '#3b0764',
              border: '2px solid #93c5fd',
              marginTop: '2rem',
              marginLeft: '1rem'
            }}
          />
        </Link>
      </div>
    </div>
  );
}
