import React from 'react'
import { Container } from './styles'
import incomeimg from '../../assets/income.svg'
import outcomeimg from '../../assets/outcome.svg'
import totalimg from '../../assets/total.svg'

export default function Sumary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeimg} alt="entradas" />
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeimg} alt="saidas" />
                </header>
                <strong>- R$500,00</strong>
            </div>
            <div className='highlight-background'>
                <header>
                    <p>Total</p>
                    <img src={totalimg} alt="total" />
                </header>
                <strong>R$500,00</strong>
            </div>
            
        </Container>
    )
}
