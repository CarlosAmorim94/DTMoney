import Logo from '../../assets/logo.svg'
import { Container, Content } from './styles'


export default function Header() {
    return (
        <Container>
            <Content>
                <img src={Logo} alt="Logo" />
                <button type="button">
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}
