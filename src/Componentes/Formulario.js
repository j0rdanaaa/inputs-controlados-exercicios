//declare todo o componente formulário e seus inputs. Exporte o formulário.
export default function Formulario({
    onChangePagamento, pagamento, onClickForm,
    onChangeNome, nome,
    numero,
    validade,
    cvc
    
  }) {
    return (
      <>
        <h1>Form</h1>
        <form onSubmit={onClickForm}>
          <input placeholder="forma de pagamento"
            onChange={onChangePagamento}
            value={pagamento}/>
          <input placeholder="Nome da pessoa"
          onChange={onChangeNome}
          value={nome}/>
          <input placeholder="número do cartão"
          onChange={numero}
          value={numero}/>
          <input placeholder="validade"
          onChange={validade}
          value={validade}/>
          <input placeholder="CVC"
          onChange={cvc}
          value={cvc}/>
  
          <button type="submit">enviar</button>
        </form>
      </>
    );
  }
  