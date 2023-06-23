import { useState } from "react";
import Cartao from "../Componentes/Cartao";
import Formulario from "../Componentes/Formulario";
import { LayoutDaPagina } from "./estiloDaPaginaDoCartao";

function PaginaDoCartao() {
  const [pagamento, setPagamento] = useState("oi");
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [validade, setValidade] = useState("");
  const [cvc, setCvc] = useState("");

  //declare as funções de controle de inputs aqui
  const onChangePagamento = (event) => {
    setPagamento(event.target.value);
  };

  console.log(pagamento);

  const onClickForm = (event) => {
    event.preventDefault();
    setPagamento("");
  };

  const onChangeNome = (event) => {
    setNome(event.target.value)
  };

  console.log (nome)

  const onClickForm2 = (event) => {
    event.preventDefault();
    setNome("")
  };

  const onChangeNumero = (event) => {
    setNumero(event.target.value)
  };

  console.log (numero)

  const onClickForm3 = (event) => {
    event.preventDefault();
    setNumero("")
  };

  const onChangeValidade = (event) => {
    setValidade(event.target.value)
  };

  console.log (validade)

  const onClickForm4 = (event) => {
    event.preventDefault();
    setValidade("")
  };

  const onChangeCvc = (event) => {
    setCvc(event.target.value)
  };

  console.log (cvc)

  const onClickForm5 = (event) => {
    event.preventDefault();
    setCvc("")
  };
  return (
    <LayoutDaPagina>
      {/* Passe as variáveis de estado para o Cartão. Use Props. */}
      <Cartao
        pagamento={pagamento}
        numero={numero}
        nome={nome}
        cvc={cvc}
        validade={validade}
      />

      {/* Chame o Componente Formulário Aqui */}
      <Formulario
        onChangePagamento={onChangePagamento}
        pagamento={pagamento}
        onClickForm={onClickForm}
        onChangeNome={onChangeNome}
        nome={nome}
        onClickForm2={onClickForm2}
        onChangeNumero={onChangeNumero}
        numero={numero}
        onClickForm3={onClickForm3}
        onChangeValidade={onChangeValidade}
        validade={validade}
        onClickForm4={onClickForm4}
        onChangeCvc={onChangeCvc}
        cvc={cvc}
        onClickForm5={onClickForm5}
      />
      {/* Passe a função de controle de input e variável de estado para o formulário. Para isso use Props */}
    </LayoutDaPagina>
  );
}

export default PaginaDoCartao;
