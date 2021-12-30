import Summary from '../Summary'
import { TransactionTable } from '../TransactionTable'
import { Container } from './styles'

export default function Dashboard() {
    return (
        <Container>
            <Summary />
            <TransactionTable />
        </Container>
    )
}
