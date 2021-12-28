import React from 'react'
import Sumary from '../Sumary'
import { TransactionTable } from '../TransactionTable'
import { Container } from './styles'

export default function Dashboard() {
    return (
        <Container>
            <Sumary />
            <TransactionTable />
        </Container>
    )
}
