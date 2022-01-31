import "./App.css"
import React from "react"

export default function App() {
  const [peso, setPeso] = React.useState()
  const [altura, setAltura] = React.useState()

  const [mensagem, setMensagem] = React.useState()

  function calcularIMC() {
    const alt = altura/100
    const imc = peso / (alt * alt)

    if(imc < 18.6) {
      setMensagem("Abaixo do peso, IMC: " + imc.toFixed(2))
    }else if(imc >= 18.6 && imc <24.9) {
      setMensagem("Peso ideal, IMC: " + imc.toFixed(2))
    }else if (imc >= 24.9 && imc < 29.9) {
      setMensagem("Você está a cima do peso IMC: " + imc.toFixed(2))
    } else if (imc >= 29.9 && imc < 34.9) {
      setMensagem("Obesidade grau I, IMC: " + imc.toFixed(2))
    }else if (imc >= 34.9 && imc < 39.9) {
      setMensagem("Obesidade grau II, IMC: " + imc.toFixed(2))
    }else if (imc > 39.9) {
      setMensagem("Obesidade grau III, IMC: " + imc.toFixed(2))
    }
  }


  return(
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC</span>

      <div className="area-input">
        <input 
          type="text"
          placeholder="Peso em (kg) Ex: 90"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <input 
          type="text"
          placeholder="altura em (cm) Ex: 180"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />

        <button onClick={calcularIMC}>
          Calcular
        </button>
      </div>
      <h2>{mensagem}</h2>
    </div>
  )
}
