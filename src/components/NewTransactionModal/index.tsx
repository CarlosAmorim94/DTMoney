import CloseImg from '../../assets/close.svg'
import Modal from 'react-modal'
import { Container, RadioBox, TransactionTypeContainer } from './styles'
import incomeimg from '../../assets/income.svg'
import outcomeimg from '../../assets/outcome.svg'
import { FormEvent, useState } from 'react'
import { api } from '../../services/api'

interface NewTransactionProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export default function NewTransactionModal({isOpen, onRequestClose}: NewTransactionProps) {

    const [type, setType] = useState('deposit')
    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault()
        const data = {
            title,
            value,
            category,
            type
        }

        api.post('transactions', data)
    }

    return (
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
        >

        <Container onSubmit={handleCreateNewTransaction}>

            <button type='button' 
            onClick={onRequestClose} 
            className="react-modal-close">
                <img src={CloseImg} alt="Fechar" />
            </button>

            <h2>Cadastrar transação</h2>

            <input 
            placeholder='Título'
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
            />

            <input
            type="number"
            placeholder='Valor'
            value={value}
            onChange={(e)=> setValue(Number(e.target.value))}
            />

            <TransactionTypeContainer>
                <RadioBox 
                type="button"
                onClick={()=>{setType('deposit')}}
                isActive={type === 'deposit'}
                activeColor='green'
                >
                    <img src={incomeimg} alt="Entrada" />
                    <span>Entrada</span>
                </RadioBox>

                <RadioBox  
                type="button"
                onClick={()=>{setType('withdraw')}}
                isActive={type === 'withdraw'}
                activeColor='red'
                >
                    <img src={outcomeimg} alt="Saída" />
                    <span>Saída</span>
                </RadioBox>
            </TransactionTypeContainer>

            <input
            placeholder='Categoria'
            value={category}
            onChange={(e)=> setCategory(e.target.value)}
            />

            <button type="submit">Cadastrar</button>

        </Container>

      </Modal>
    )
}
