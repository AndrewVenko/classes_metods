import Swordsman from '../src/Swordsman';

// Проверяем класс Swordsman
describe('Swordsman', () => {
  it('should create a Swordsman with the correct properties', () => {
    const swordsman = new Swordsman('Aragorn');
    expect(swordsman.name).toBe('Aragorn');
    expect(swordsman.health).toBe(100);
    expect(swordsman.level).toBe(1);
    expect(swordsman.type).toBe('Swordsman');
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
  });

  it('should throw an error if the name length is less than 2 characters', () => {
    expect(() => new Swordsman('S')).toThrow('Ошибка! Имя должно содержать min 2, max 10 символов!');
  });

  it('should throw an error if the name length is greater than 10 characters', () => {
    expect(() => new Swordsman('SwordsmanAragorn')).toThrow('Ошибка! Имя должно содержать min 2, max 10 символов!');
  });
});
