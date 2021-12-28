import CloseImg from '../../assets/close.svg'
import Modal from 'react-modal'
import { Container, TransactionTypeContainer } from './styles'
import incomeimg from '../../assets/income.svg'
import outcomeimg from '../../assets/outcome.svg'

interface NewTransactionProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export default function NewTransactionModal({isOpen, onRequestClose}: NewTransactionProps) {
    return (
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
        >

        <Container>

            <button type='button' 
            onClick={onRequestClose} 
            className="react-modal-close">
                <img src={CloseImg} alt="Fechar" />
            </button>

            <h2>Cadastrar transação</h2>

            <input 
            placeholder='Título'
            />

            <input
            type="number"
            placeholder='Valor'
            />

            <TransactionTypeContainer>
                <button type="button">
                    <img src={incomeimg} alt="Entrada" />
                    <span>Entrada</span>
                </button>

                <button type="button">
                    <img src={outcomeimg} alt="Saída" />
                    <span>Saída</span>
                </button>
            </TransactionTypeContainer>

            <input
            placeholder='Categoria'
            />

            <button type="submit">Cadastrar</button>

        </Container>

      </Modal>
    )
}
