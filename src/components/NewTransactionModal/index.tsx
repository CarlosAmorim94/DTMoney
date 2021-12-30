import CloseImg from '../../assets/close.svg'
import Modal from 'react-modal'
import { Container, RadioBox, TransactionTypeContainer } from './styles'
import incomeimg from '../../assets/income.svg'
import outcomeimg from '../../assets/outcome.svg'
import { FormEvent, useContext, useState } from 'react'
import { TransactionContext } from '../../TransactionContext'

interface NewTransactionProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export default function NewTransactionModal({isOpen, onRequestClose}: NewTransactionProps) {

    const { createTransaction } = useContext(TransactionContext)

    const [type, setType] = useState('deposit')
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')

    async function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault()
        
        await createTransaction({
            title,
            amount,
            category,
            type
        })
        
        setTitle('')
        setType('')
        setAmount(0)
        setCategory('')
        onRequestClose()
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
            value={amount}
            onChange={(e)=> setAmount(Number(e.target.value))}
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
