import { render, screen } from '@testing-library/react';
import SupportComponent from '.';

describe('SupportComponent', () => {
    let supportContact;
    beforeEach(() => {
        supportContact = {
            name: 'John Smith',
            email: 'john.smith@feefo.com'
        };
    });
    test('should render support title', () => {
        render(<SupportComponent supportContact={supportContact} />);
        const element = screen.getByText(/YOUR FEEFO SUPPORT CONTACT/i);
        expect(element).toBeInTheDocument();
    });
    
    test('should render support profile icon', () => {
        const {getByTestId} = render(<SupportComponent supportContact={supportContact} />);
        const element = getByTestId("supportProfileIcon");
        expect(element).toBeInTheDocument();
    });
    
    test('should render name support', () => {
        const {getByTestId} = render(<SupportComponent supportContact={supportContact} />);
        const element = getByTestId("titleSupport");
        expect(element).toBeInTheDocument();
    });
    
    test('should render name support as John Smith', () => {
        const {getByTestId} = render(<SupportComponent supportContact={supportContact} />);
        const element = getByTestId("titleSupport").textContent;
        expect(element).toBe('John Smith');
    });
    
    test('should render support email icon', () => {
        const {getByTestId} = render(<SupportComponent supportContact={supportContact} />);
        const element = getByTestId("mailIcon");
        expect(element).toBeInTheDocument();
    });
    
    test('should render support email', () => {
        const {getByTestId} = render(<SupportComponent supportContact={supportContact} />);
        const element = getByTestId("supportEmail");
        expect(element).toBeInTheDocument();
    });
    test('should render support email john.smith@feefo.com', () => {
        const {getByTestId} = render(<SupportComponent supportContact={supportContact} />);
        const element = getByTestId("supportEmail").textContent;
        expect(element).toBe('john.smith@feefo.com');
    });
    test('should render support phone', () => {
        const {getByTestId} = render(<SupportComponent supportContact={supportContact} />);
        const element = getByTestId("supportPhone");
        expect(element).toBeInTheDocument();
    });
});
