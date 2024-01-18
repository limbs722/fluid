import styled from 'styled-components';
import theme from '../theme';

const WrapperMain = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 18px 0px 18px 0px;
`;

const WrapperContent = styled.div`
    width: ${`${theme.deviceSizes.medium}px`};
    ${theme.breakpoints.small} {
        width: ${`${theme.deviceSizes.small}px`};
    }
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
    justify-content: center;
    padding: 18px;
    border: 1px solid #ccc;
`;

const Header = styled.div`
    width: 100%;
    border: 1px solid #ccc;
`;

const Footer = styled.div``;

const AppStyle = {
    WrapperMain,
    WrapperContent,
    Header,
};

export default AppStyle;
