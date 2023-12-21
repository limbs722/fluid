import react from 'react';
import { AppStyle } from '../styles';

const { WrapperMain, WrapperContent, Header } = AppStyle;

function App() {
    return (
        <WrapperMain>
            MAIN
            <WrapperContent>
                CONTENT
                <Header>HEADER</Header>
            </WrapperContent>
        </WrapperMain>
    );
}

export default App;
