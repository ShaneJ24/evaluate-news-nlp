import { handleSubmit } from '../formHandler';
import { enableFetchMocks, disableFetchMocks } from 'jest-fetch-mock'

//Leanred about mocking from https://stackoverflow.com/questions/41885841/how-to-mock-the-javascript-window-object-using-jest
describe('Function: handleSubmit', () => {
    beforeAll(() => {
        enableFetchMocks();
    });

    afterAll(() => {
        disableFetchMocks();
    })
    
    test('should call preventDefault on the passed event', () => {
        const preventDefault = jest.fn(() => {});
        fetch.mockResponse(Promise.resolve({
            confidence: 100,
            subjectivity: 80,
            irony: 20
        }));
        // referenced from https://stackoverflow.com/questions/59272297/react-tests-fails-when-i-use-document-getelementbyid-jestenzyme
        document.getElementById = jest.fn().mockReturnValueOnce({ value: 'Name' });
        global.Client = {
            validateURL : jest.fn().mockReturnValueOnce(true)
        }
        const event = {
            preventDefault
        };
        handleSubmit(event);
        expect(preventDefault).toHaveBeenCalled();
    });
});