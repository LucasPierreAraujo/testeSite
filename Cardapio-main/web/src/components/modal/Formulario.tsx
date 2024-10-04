import { useState } from 'react';

import { Cliente, IClienteInfor } from '../FormularioEtapas/Cliente';
import { ArrowArcLeft , Check, Coins, IdentificationBadge, MapPin, X } from 'phosphor-react';
import Endereco, { IEndereco } from '../FormularioEtapas/Endereço';
import FormaPagamento, { IMeioPagamento } from '../FormularioEtapas/FormaPagamento';
import Resumo from '../FormularioEtapas/Resumo';

import Entregador from '../../../public/Entregador.gif'


interface IProps {
    closeModal: () => void;
    closeSacola: () => void;
}

export default function Formulario(props: IProps) {

    const [step, setStep] = useState(1);
    const [error, setError] = useState('');
    const [pedidoEnviado,setPedidoEnviado] = useState(false);

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handlePreviousStep = () => {
        if(step == 1 ){
            return
        }

        setStep(step - 1);
    };

    const [dadosCliente,setDadosCliente] = useState<IClienteInfor>({
        nomeCompleto: '',
        telefone:'',
        cpf:''
    })

    const [endereco, setEndereco] = useState<IEndereco>({
        bairro: "",
        rua: "",
        numerp: null,
        complemento: "",
        formaRetirada: "",
        frete: 0,
        referencia:""
    })

    const [formaPagamento, setFormaPagamento] = useState<IMeioPagamento>({
        meioPagamento: '',
        troco: 0
    })
    

    function verificacao(){
        if (step === 1 ){
            if (dadosCliente.nomeCompleto.length === 0) {
                setError('nome')
                return false;
            }
            if (dadosCliente.telefone.length === 0) {
                setError('telefone')
                return false;
            }
            setError('')
            return true;
        }
        if (step === 2 ){
            if (endereco.rua.length === 0) {
                setError('rua')
                return false;
            }
            if (endereco.bairro.length === 0) {
                setError('bairro')
                return false;
            }
            if (endereco.referencia.length === 0) {
                setError('referencia')
                return false;
            }
            setError('')
            return true;
        }
        if (step === 3 ){
            if (formaPagamento.meioPagamento.length === 0) {
                setError('escolha uma forma de pagamento')
                return false;
            }
            setError('')
            return true;
        }

    }

    function etapaClienteProximo(){
        if(!verificacao()){
            return
        }
        handleNextStep()
        console.log(step)
    }

    return (
        <div className="fixed w-full h-full left-0 top-0 bg-black bg-opacity-15 flex items-center justify-center z-50">
            {
                pedidoEnviado ? (
                    <div className="bg-[rgb(228 228 231)] md:w-[60%] md:h-[80%] h-full w-full bg-white rounded-md shadow-md overflow-hidden flex flex-col py-4 px-2 md:px-8 items-center">
                        <div className='relative'>
                            <img src={Entregador} alt="" />
                        </div>
                        <h1 className='text-1xl font-semibold'>
                            Estamos preparando seu pedido
                        </h1>
                        <button onClick={() => {
                            props.closeSacola()
                            props.closeModal()
                        }} className="py-1 bg-green-500 rounded-md w-full text-center mt-4">
                            Voltar ao cardápio
                        </button>
                    </div>
                ) : (
                    <div className="bg-[rgb(228 228 231)] md:w-[60%] md:h-[80%] h-full w-full bg-white rounded-md shadow-md overflow-hidden flex flex-col py-4 px-2 md:px-8 items-center">
                        <div className='flex w-full justify-between'>
                            <button onClick={handlePreviousStep}>
                                <ArrowArcLeft size={25}/>
                            </button>
                            <h1 className='font-semibold'>
                                Formulário
                            </h1>
                            <button onClick={props.closeModal}>
                                <X size={25}/>
                            </button>
                        </div>
                        
                        <ul className="flex w-full items-center px-4 md:px-20 pt-5 pb-4 border-b">
                            <li className="flex flex-col relative items-center">
                                <strong className={`w-10 h-10 rounded-full border flex items-center justify-center ${step == 1 ? 'bg-green-500 text-white' : ''} ${step > 1 ? 'bg-green-600 text-white' : ''}`}>
                                    <IdentificationBadge size={26} />
                                </strong>
                            </li>
                            <li className="w-full">
                                <hr className={`border-2 ${step > 1 ? 'border-green-600' : 'border-dashed'}`} />
                            </li>
                            <li className="flex flex-col relative items-center">
                                <strong className={`w-10 h-10 rounded-full border flex items-center justify-center ${step == 2 ? 'bg-green-500 text-white' : ''} ${step > 2 ? 'bg-green-600 text-white' : ''}`}>
                                    <MapPin size={26} />
                                </strong>
                            </li>
                            <li className="w-full">
                                <hr className={`border-2 ${step > 2 ? 'border-green-600' : 'border-dashed'}`} />
                            </li>
                            <li className="flex flex-col relative items-center">
                                <strong className={`w-10 h-10 rounded-full border flex items-center justify-center ${step == 3 ? 'bg-green-500 text-white' : ''} ${step > 3 ? 'bg-green-600 text-white' : ''}`}>
                                    <Coins size={26} />
                                </strong>
                            </li>
                            <li className="w-full">
                            <hr className={`border-2 ${step > 3 ? 'border-green-600' : 'border-dashed'}`} />
                            </li>
                            <li className={`px-2 md:px-4 h-10 rounded-lg border flex items-center justify-center ${step == 4 ? 'bg-green-600 text-white' : ''}`}>
                                <Check size={26} />
                            </li>
                        </ul>
                        
                        {step === 1 && (
                            <Cliente clienteInfo={(dados) => setDadosCliente(dados)} proximo={etapaClienteProximo} dados={dadosCliente} error={error}/>
                        )}
                        {step === 2 && (
                            <Endereco callBackDate={(date) => setEndereco(date)} dateEndereco={endereco} next={etapaClienteProximo} error={error}/>
                        )}
                        {step === 3 && (
                            <FormaPagamento callBackDate={(date) => setFormaPagamento(date)} error={error} meioPagamento={formaPagamento} next={etapaClienteProximo} />
                        )}
                        {step === 4 && (
                            <Resumo close={props.closeModal} pedidoEnviado={() => setPedidoEnviado(true)} cliente={dadosCliente} endereco={endereco} formaPagamento={formaPagamento} 
                            
                            />
                        )}
                    </div>
                )
            }
        </div>

    );
}
