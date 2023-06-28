const Filho = (props) => {
    return (
      <div>
        <h1>Filho</h1>
        <h3> Mesada: {props.mesada} </h3>
        <button 
            onClick={
                () => {
                    //alert("Thank you daddy")
                    props.enviarMensagemProPai("Obrigado querido papai")
                }
            } 
        >
            Agradecer Pai
        </button>
      </div>
    )
  }
  
  export default Filho