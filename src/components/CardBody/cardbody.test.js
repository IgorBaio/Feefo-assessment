import { render, screen } from '@testing-library/react';
import CardBody from '.';

describe('CardBody', () => {
    let salesOverview;
    beforeEach(() => {
        salesOverview = {
            uploads: 8,
            successfulUploads: 3,
            linesAttempted: 20,
            linesSaved: 4,
            lastUploadDate: 1605001226079,
        }
    });
    test('should render upload icon', () => {
        const {getByTestId} = render(<CardBody salesOverview={salesOverview} />);
        const element = getByTestId("uploadIcon");
        expect(element).toBeInTheDocument();
    });
    test('should render sales card title', () => {
        render(<CardBody salesOverview={salesOverview} />);
        const element = screen.getByText(/Sales/i);
        expect(element).toBeInTheDocument();
    });

    test('should render tooltip button', () => {
        const { getByTestId } = render(<CardBody salesOverview={salesOverview} />);
        const element = getByTestId("tooltipButton");
        expect(element).toBeInTheDocument();
    });

    test('should render quantity uploads container', () => {
        const { getByTestId } = render(<CardBody salesOverview={salesOverview} />);
        const element = getByTestId("quatityUploads");
        expect(element).toBeInTheDocument();
    });

    test('should render percentage of uploads', () => {
        const { getByTestId } = render(<CardBody salesOverview={salesOverview} />);
        const element = getByTestId("quantityUploadsPercentage").textContent;
        expect(element).toBe("8 %");
    });
    
    test('should render percentage of lines saved', () => {
        const { getByTestId } = render(<CardBody salesOverview={salesOverview} />);
        const element = getByTestId("quantityLinesSavedPercentage").textContent;
        expect(element).toBe("4 %");
    });
    
});
