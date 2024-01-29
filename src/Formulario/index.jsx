import { useState } from "react";

const Formulario = () => {
  let [peso, setPeso] = useState('');
  let [altura, setAltura] = useState('');

  const redenrizaConta = () => {
    const imc = peso / (altura * altura).toFixed(2)

    if (imc <= 16.9) {
        return (
            <p>Muito abaixo do peso</p>
        )
    } else if (imc <= 18.4){
        return (
            <p>Abaixo do peso</p>
        )
    } else if (imc <= 24.9){
        return (
            <p>Peso normal</p>
        )
    } else if (imc <= 29.9){
        return (
            <p>Acima do peso</p>
        )
    } else if (imc <= 34.9){
        return (
            <p>Obesidade grau I</p>
        )
    } else if (imc <= 40){
        return (
            <p>Obesidade grau II</p>
        )
    } else if (imc >= 40){
        return (
            <p>Obesidade grau III</p>
        )
    } 
  }

  let resultado = peso / (altura * altura).toFixed(2)

  return (
    <>
    <h1 className="text-center mt-5">Calculadora IMC</h1>
    <form className="text-center my-5">
      <input
        type="number"
        value={peso}
        placeholder="Seu peso? ex: 80"
        onChange={evento => setPeso(parseFloat(evento.target.value))}
        onKeyDownCapture={evento => setPeso(parseFloat(evento.target.value))}
      />
      <input
        type="number"
        value={altura}
        placeholder="Sua altura? ex: 1,70"
        onChange={evento => setAltura(parseFloat(evento.target.value))}
        onKeyUp={evento => setAltura(parseFloat(evento.target.value))}
      />
      <p className="mt-4">{"Seu imc é " + resultado.toFixed(2)} </p>
      <p>Sua classificação é</p>
      <h4>{redenrizaConta()}</h4>
    </form>
    </>
  );
};



export default Formulario;

