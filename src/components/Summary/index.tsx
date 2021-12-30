import { Container } from './styles'
import incomeimg from '../../assets/income.svg'
import outcomeimg from '../../assets/outcome.svg'
import totalimg from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions'

export default function Summary() {

    const { transactions } = useTransactions()

    const summary = transactions.reduce((acc, transaction)=>{
        if (transaction.type === 'deposit'  ) {
            acc.deposits += transaction.amount
            acc.total += transaction.amount
        } else {
            acc.withdraws += transaction.amount
            acc.total -= transaction.amount
        }

        return acc
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeimg} alt="entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeimg} alt="saidas" />
                </header>
                <strong> - 
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdraws)}
                </strong>
            </div>
            <div className='highlight-background'>
                <header>
                    <p>Total</p>
                    <img src={totalimg} alt="total" />
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(summary.total)}
                </strong>
            </div>
            
        </Container>
    )
}
