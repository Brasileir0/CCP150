const { useState, useEffect } = React;

function App() {
  const [num, setNum] = useState(null);
  const [num_adivinha, setNum_adivinha] = useState(null);
  const [msg, setMsg] = useState('');
  const [tipoMsg, setTipoMsg] = useState('');
  const [shakeMsg, setShakeMsg] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const temp = Math.floor(Math.random() * 100);
    setNum_adivinha(temp);
    console.log("Número a adivinhar:", temp);
  }, []);

  function adivinha() {
    const tentativa = parseInt(num, 10);

    if (isNaN(tentativa)) {
      setMsg("Insira um valor válido!");
      setTipoMsg('erro');
      triggerShake();
      return;
    }

    if (tentativa === num_adivinha) {
      setMsg("Você acertou!!!");
      setTipoMsg('acerto');
      triggerShake();
    } else if (tentativa < num_adivinha) {
      setMsg(`O número certo é maior que ${tentativa}`);
      setTipoMsg('erro');
      triggerShake();
    } else {
      setMsg(`O número certo é menor que ${tentativa}`);
      setTipoMsg('erro');
      triggerShake();
    }
  }

  function triggerShake() {
    setShakeMsg(true);
    setTimeout(() => setShakeMsg(false), 500); // duração da animação shake
  }

  const styleMsg = {
    padding: '10px 15px',
    borderRadius: '5px',
    color: 'white',
    fontWeight: 'bold',
    backgroundColor:
      tipoMsg === 'acerto' ? '#4CAF50' : tipoMsg === 'erro' ? '#f44336' : 'transparent',
    minHeight: '40px',
    marginTop: '15px',
    transition: 'background-color 0.3s ease',
    display: 'inline-block',
  };

  const containerStyle = {
    maxWidth: '400px',
    margin: '30px auto',
    padding: '20px',
    border: '2px solid #ccc',
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  };

  const inputStyle = {
    padding: '8px',
    fontSize: '16px',
    width: '80%',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginTop: '10px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    marginTop: '15px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: 'white',
    cursor: 'pointer',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  return (
    <>
      <style>
        {`
          @keyframes shake {
            0% { transform: translateX(0); }
            20% { transform: translateX(-10px); }
            40% { transform: translateX(10px); }
            60% { transform: translateX(-10px); }
            80% { transform: translateX(10px); }
            100% { transform: translateX(0); }
          }
          .shake {
            animation: shake 0.5s;
          }
        `}
      </style>

      <div style={containerStyle}>
        <h1>Jogo da Adivinhação</h1>
        <p>Adivinhe o número que estou pensando de 0 a 99</p>
        <input
          type="number"
          onChange={(e) => setNum(e.target.value)}
          placeholder="Digite um número"
          style={inputStyle}
        />
        <br />
        <button
          onClick={adivinha}
          style={hover ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Clique Aqui
        </button>
        <br></br>
        <p style={styleMsg} className={shakeMsg ? "shake" : ""}>{msg}</p>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
