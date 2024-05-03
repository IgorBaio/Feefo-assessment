import styled from "styled-components";

export const SupportContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 16px;
    width: 50%;
`;

export const SupportTitleArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`;

export const SupportTitleText = styled.span`
    color: rgb(156, 152, 152);
    font-weight: 900;
`;

export const SupportContact = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    @media only screen and (max-width: 400px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const SupportContactIcon = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgb(252, 207, 57);
    width: 10%;
    height: 10%;
    padding: 2%;
    border-radius: 10%;
    margin-right: 2%;
    justify-content: center;
    align-items: center;
`;

export const InitialLetter = styled.span`
    font-size: calc(8px + 2vmin) ;
`;

export const SupportContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 2%;
    width: 100%;
    @media only screen and (max-width: 400px) {
        align-items: center;
    }

`;

export const TitleSupport = styled.span`
    font-weight: 900;
    
`;

export const EmailArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    color: rgb(131, 131, 131);

    @media only screen and (max-width: 400px) {
        flex-direction: column;
    }
`;

export const EmailText = styled.span`
    margin: 0 5%;
`;

export const PhoneText = styled.span`
`;
