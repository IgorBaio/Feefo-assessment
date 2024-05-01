import styled from "styled-components";

export const CardBodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: rgb(65, 62, 63);
    background-color: #FFF;
    width: 100%;
`;

export const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: rgb(65, 62, 63);
    width: 100%;
`;

export const CardSalesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: 16px;
    color: rgb(65, 62, 63);
    width: 100%;
    border-bottom: 2px solid rgb(229, 229, 229);

`;

export const SalesHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: rgb(65, 62, 63);
    position: relative;
    width: 100%;
`;

export const SalesContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 16px;
    color: rgb(65, 62, 63);
    width: 100%;
    margin: 1%;
`;

export const CardsPercentageContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: rgb(65, 62, 63);
    width: 100%;
`;

export const SalesTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    font-size: 16px;
    color: rgb(65, 62, 63);
    width: 100%;
    margin: 1% 0;
`;

export const SalesTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: #000;
    font-weight: 900;
    margin-left: 2%;
`;

export const SalesInfoContainer = styled.div`
    position: absolute;
    right: 2%;
`;

export const SalesInfoToolTip = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #FFF;
    font-weight: 900;
    background-color: rgb(178, 173, 174);
    cursor: pointer;
    border: 1px solid rgb(178, 173, 174);
    padding: 0.5%;
    border-radius: 50%;
    width: 20px;
`;

export const UploadIcon = styled.img`
    margin-left: 2%;
`;

export const ContentText = styled.span`
    font-size: 16px;
    color: rgb(131, 131, 131);
    margin-left: 2%;
`;

export const ContentTextBold = styled.strong`
    color: #000;
    font-weight: 900;
`;

export const CardContentBodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: 16px;
    color: rgb(65, 62, 63);
    width: 100%;
    padding: 2% 0;
    padding-left: 2%;
    border-left: ${props => props.hasBorder ? '2px solid rgb(229, 229, 229)' : 'none'};
`;

export const BodyCardTextBold = styled.strong`
    color: rgb(33,158,67);
    font-weight: 900;
    font-size: 32px;
`;

export const BodyCardText = styled.span`
    color: rgb(156, 152, 152);
    font-weight: 900;
`;

export const Divider = styled.div`
    height: 100%;
    width: 5px;
    margin: 0 0%;
    background-color: red;
`;