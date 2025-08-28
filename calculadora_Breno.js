// import React from "react";
// import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { eq: "" };
  }

  handleClick = (valor) => {
    if (valor === "C") {
      this.setState({ eq: "" });
    } else if (valor === "=") {
      try {
        const resultado = eval(this.state.eq);
        this.setState({ eq: resultado.toString() });
      } catch {
        this.setState({ eq: "Erro" });
      }
    } else {
      this.setState({ eq: this.state.eq + valor });
    }
  };

  render() {
    return (
      <>
        <style>{`
          * {
            box-sizing: border-box;
          }
          body {
            background: #f0f0f0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
          }
          .calculator {
            background: #222;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            width: 280px;
          }
          .display {
            background: #111;
            color: #0f0;
            font-size: 2rem;
            padding: 10px 15px;
            border-radius: 5px;
            margin-bottom: 20px;
            width: 100%;
            text-align: right;
            font-family: 'Courier New', Courier, monospace;
            user-select: none;
            border: none;
          }
          .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 12px;
          }
          button {
            padding: 15px;
            font-size: 1.2rem;
            border-radius: 8px;
            border: none;
            background: #333;
            color: #eee;
            cursor: pointer;
            transition: background 0.3s, transform 0.1s;
            box-shadow: inset 0 -3px #111;
            user-select: none;
          }
          button:hover {
            background: #555;
          }
          button:active {
            transform: scale(0.95);
            background: #0a0;
            color: #fff;
          }
          button.operator {
            background: #ff9500;
            color: white;
            box-shadow: inset 0 -3px #cc7a00;
          }
          button.operator:hover {
            background: #ffa733;
          }
          button.operator:active {
            background: #cc7a00;
            color: #fff;
          }
          button.clear {
            background: #ff3b30;
            color: white;
            box-shadow: inset 0 -3px #cc2c23;
          }
          button.clear:hover {
            background: #ff5c52;
          }
          button.clear:active {
            background: #cc2c23;
          }
        `}</style>

        <div className="calculator">
          <input
            className="display"
            type="text"
            value={this.state.eq}
            readOnly
            aria-label="Display da calculadora"
          />

          <div className="buttons">
            <button onClick={() => this.handleClick("7")}>7</button>
            <button onClick={() => this.handleClick("8")}>8</button>
            <button onClick={() => this.handleClick("9")}>9</button>
            <button
              className="operator"
              onClick={() => this.handleClick("*")}
              aria-label="Multiplicação"
            >
              &times;
            </button>

            <button onClick={() => this.handleClick("4")}>4</button>
            <button onClick={() => this.handleClick("5")}>5</button>
            <button onClick={() => this.handleClick("6")}>6</button>
            <button
              className="operator"
              onClick={() => this.handleClick("/")}
              aria-label="Divisão"
            >
              &divide;
            </button>

            <button onClick={() => this.handleClick("1")}>1</button>
            <button onClick={() => this.handleClick("2")}>2</button>
            <button onClick={() => this.handleClick("3")}>3</button>
            <button
              className="operator"
              onClick={() => this.handleClick("-")}
              aria-label="Subtração"
            >
              &minus;
            </button>

            <button className="clear" onClick={() => this.handleClick("C")}>
              C
            </button>
            <button onClick={() => this.handleClick("0")}>0</button>
            <button onClick={() => this.handleClick("=")}>=</button>
            <button
              className="operator"
              onClick={() => this.handleClick("+")}
              aria-label="Adição"
            >
              +
            </button>
          </div>
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
