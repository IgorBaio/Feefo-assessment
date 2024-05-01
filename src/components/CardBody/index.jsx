import React from 'react';
import PropTypes from 'prop-types';
import { CardBodyContainer, CardsContainer, CardSalesContainer, SalesHeader, SalesContent, CardsPercentageContainer, SalesTitleContainer, SalesTitle, SalesInfoContainer, SalesInfoToolTip, UploadIcon, ContentText, ContentTextBold, CardContentBodyContainer, BodyCardTextBold, BodyCardText, Divider } from './styles';
import Tooltip from '@mui/material/Tooltip';

export const CardBodyComponent = ({ salesOverview }) => {

    return (
        <CardBodyContainer>
            <CardsContainer>
                <CardSalesContainer >
                    <SalesHeader>
                        <SalesTitleContainer>
                            <UploadIcon data-testid='uploadIcon' width="20" height="20" src="https://img.icons8.com/ultraviolet/40/upload--v1.png" alt="upload--v1" aria-label="upload--v1" />
                            <SalesTitle aria-label='sales area title' alt='sales area title'>Sales</SalesTitle>
                        </SalesTitleContainer>
                        <SalesInfoContainer>
                            <Tooltip title="Infos here">
                                <SalesInfoToolTip aria-label='info button' alt='info button' data-testid='tooltipButton'>
                                    i
                                </SalesInfoToolTip>
                            </Tooltip>
                        </SalesInfoContainer>
                    </SalesHeader>
                    <SalesContent aria-label='quantity of uploads was made and saved' alt='quantity of uploads was made and saved' data-testid='quatityUploads'>
                        <ContentText >You had{" "}
                            <ContentTextBold>
                                {salesOverview.uploads} uploads{" "}
                            </ContentTextBold>
                            and <ContentTextBold>
                                {salesOverview.linesAttempted}
                            </ContentTextBold> lines added
                        </ContentText>
                    </SalesContent>
                </CardSalesContainer>
                <CardsPercentageContainer>
                    <CardContentBodyContainer aria-label='quantity of uploads was made with success' alt='quantity of uploads was made with success'>
                        <BodyCardTextBold aria-label='percentage of uploads was made with success' alt='percentage of uploads was made with success' data-testid='quantityUploadsPercentage'>{salesOverview.uploads} %</BodyCardTextBold>
                        <BodyCardText aria-label='text upload success' alt='text upload success'>UPLOADS SUCCESS</BodyCardText>
                    </CardContentBodyContainer>
                    <CardContentBodyContainer hasBorder aria-label='quantity of lines was saved' alt='quantity of lines was saved'>
                        <BodyCardTextBold aria-label='percentage of lines was saved' alt='percentage of lines was saved' data-testid='quantityLinesSavedPercentage'>{salesOverview.linesSaved} %</BodyCardTextBold>
                        <BodyCardText aria-label='text lines saved' alt='text lines saved'>LINES SAVED</BodyCardText>
                    </CardContentBodyContainer>
                </CardsPercentageContainer>
            </CardsContainer>
        </CardBodyContainer>
    )
}

CardBodyComponent.propTypes = {
    salesOverview: PropTypes.shape({
        uploads: PropTypes.number,
        successfulUploads: PropTypes.number,
        linesAttempted: PropTypes.number,
        linesSaved: PropTypes.number,
        lastUploadDate: PropTypes.number
    })

}

export default CardBodyComponent;