import sortProps from '../sortProps';

test('testing function sortProps', () => {
  const obj = {
    name: 'мечник', 
    health: 10, 
    level: 2, 
    attack: 80, 
    defence: 40
  }

  const sortArr = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 }
  ]

  const result = sortProps(obj, ["name", "level"]);

  expect(result).toEqual(sortArr);
});
