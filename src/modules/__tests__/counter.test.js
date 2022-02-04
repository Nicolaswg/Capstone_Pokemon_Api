import itemCount from '../counters.js';

describe('Items counter testing', () => {
  test('Test number of pokemons', () => {
    const pokeList = [{ name: 'charizard' }, { name: 'charizard' }];
    const pokeNum = itemCount(pokeList);
    expect(pokeNum).toBe(2);
  });
});