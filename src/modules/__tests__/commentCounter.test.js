import { getCounter } from '../commentPopUp.js';
describe('Test the counter for comments', () => {
        test('Comments should equal to 2', () => {
        const commentsList =  getCounter([{name: 'poki1'}, {name : 'poki2'}]);
        expect(commentsList).toBe(2);
      });

      test('Comments should be empty', () => {
        const commentsList =  getCounter([]);
        expect(commentsList).toBe(0);
      });
})
