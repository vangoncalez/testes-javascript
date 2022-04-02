const { queryString, parse } = require('./queryString');

describe('Object to query string', () => {
  it('should create a valid query string when an object is ', () => {
    const obj = {
      name: 'Fabio',
      profession: 'developer',
    };
    expect(queryString(obj)).toBe('name=Fabio&profession=developer');
  });
  it('should create a valid query string even when an array is passed as value ', () => {
    const obj = {
      name: 'Fabio',
      abilities: ['JS', 'TDD'],
    };
    expect(queryString(obj)).toBe('name=Fabio&abilities=JS,TDD');
  });

  it('should throw an error ', () => {
    const obj = {
      name: 'Fabio',
      abilities: { first: 'JS', second: 'TDD' },
    };
    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe('Query string to object', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=Vanessa&profession=developer';
    expect(parse(qs)).toEqual({
      name: 'Vanessa',
      profession: 'developer',
    });
  });

  it('should convert a query string of a single key-value', () => {
    const qs = 'name=Vanessa';
    expect(parse(qs)).toEqual({
      name: 'Vanessa',
    });
  });


});
