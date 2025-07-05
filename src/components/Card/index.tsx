import { get } from "../../services/HttpRequest";
import type { CEP } from "../../type/CEP";
import { useState, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";


export default function Card() {
const [cep, setCep] = useState<CEP | null>(null);
const inputCepValue = useRef<HTMLInputElement>(null);


const handleCepClick = () => {
  const inputCep = inputCepValue.current?.value;
  if(inputCep) {
    get(`https://viacep.com.br/ws/${inputCep}/json/`)
      .then(response => {
        toast.success("CEP consultado com sucesso!");
        setCep(response.data);
      })
      .catch(error => {
        toast.error("Erro ao consultar o CEP. Verifique se o CEP está correto.", error);
        setCep(null);
      });
  }
}

  return (
    <div className="flex flex-col items-center justify-center bg-slate-300/80 border-2 border-gray-700 rounded-lg p-4 w-4/5">
      <ToastContainer />
      <div className="flex items-center justify-center pb-4 w-full">
        <div className="digite-cep w-4/12">
          <h3 className="text-center font-bold text-2xl">Digite o CEP</h3>
          <input
            type="text"
            className="border-2 border-gray-400 bg-white text-black p-2 rounded-lg w-full"
            placeholder="Digite o CEP"
            ref={inputCepValue}
          />
        </div>
      </div>

      <div className="flex flex-row mb-5 w-full">
        <div className="Logradouro w-full">
          <h3 className="font-bold text-lg">Logradouro</h3>
          <input
            type="text"
            className="w-11/12 border-2 border-gray-400 bg-white text-black p-2 rounded-lg"
            value={cep?.logradouro}
            placeholder="Logradouro"
            disabled
          />
        </div>
        <div className="w-full">
          <h3 className="font-bold text-lg">Complemento</h3>
          <input
            type="text"
            className="w-11/12 border-2 border-gray-400 bg-white text-black p-2 rounded-lg"
            value={cep?.complemento}
            placeholder="Complemento"
            disabled
          />
        </div>
        <div className="w-full">
          <h3 className="font-bold text-lg">Unidade</h3>
          <input
            type="text"
            className="w-11/12 border-2 border-gray-400 bg-white text-black p-2 rounded-lg"
            value={cep?.unidade}
            placeholder="Unidade"
            disabled
          />
        </div>
        <div className="w-full">
          <h3 className="font-bold text-lg">Bairro</h3>
          <input
            type="text"
            className="w-full border-2 border-gray-400 bg-white text-black p-2 rounded-lg"
            value={cep?.bairro}
            placeholder="Bairro"
            disabled
          />
        </div>
      </div>

      <div className="flex flex-row mb-8 w-full">
        <div className="Localidade w-full">
          <h3 className="font-bold text-lg">Localidade</h3>
          <input
            type="text"
            className="w-11/12 border-2 border-gray-400 bg-white text-black p-2 rounded-lg"
            value={cep?.localidade}
            placeholder="Localidade"
            disabled
          />
        </div>
        <div className="w-full">
          <h3 className="font-bold text-lg">UF</h3>
          <input
            type="text"
            className="w-11/12 border-2 border-gray-400 bg-white text-black p-2 rounded-lg"
            value={cep?.uf}
            placeholder="UF"
            disabled
          />
        </div>
        <div className="w-full">
          <h3 className="font-bold text-lg">Estado</h3>
          <input
            type="text"
            className="w-11/12 border-2 border-gray-400 bg-white text-black p-2 rounded-lg"
            value={cep?.estado}
            placeholder="Estado"
            disabled
          />
        </div>
        <div className="w-full">
          <h3 className="font-bold text-lg">Região</h3>
          <input
            type="text"
            className="w-full border-2 border-gray-400 bg-white text-black p-2 rounded-lg"
            value={cep?.regiao}
            placeholder="Região"
            disabled
          />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button className="rounded-4xl w-48 bg-white text-shadow-blue-900 p-2 font-bold hover:bg-gray-200 duration-300" onClick={handleCepClick}>
          Consultar
        </button>
      </div>
    </div>
  );
}
