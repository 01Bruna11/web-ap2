import Filho from './Filho';

const Pai = () => {

    const receberMensagemDoFilho = (mensagem) => {
        alert("Filho falou: " + mensagem)
    }
    
    return (
        <div>
            <h1>Pai</h1>
            <Filho mesada = {10000.00} enviarMensagemProPai={receberMensagemDoFilho}/>
        </div>
    )
}

export default Pai