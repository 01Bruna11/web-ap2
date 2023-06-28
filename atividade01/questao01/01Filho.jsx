import React from "react";

//calcular imc = peso / (altura*altura)
const Filho = ({altura, peso}) => {

    const calcularIMC = (altura, peso) => peso / (altura*altura);
    const renderizerMensagem = (calcularIMC) => {
        if(calcularIMC > 25) return <h3>Acima do peso</h3>;
        else if(calcularIMC < 18.3) return <h3>Abaixo do peso</h3>;
        return <h3>Peso normal</h3>;
    }
    return (
        <div>
            <h1>IMC é: {calcularIMC(altura, peso)}</h1>
            {renderizerMensagem(calcularIMC(altura, peso))}
            
        </div>
    );
}
export default Filho;