import Magician from '../src/Magician';

// Проверяем класс Magician
describe('Magician', () => {
  it('should create a Magician with the correct properties', () => {
    const magician = new Magician('Gandalf');
    expect(magician.name).toBe('Gandalf');
    expect(magician.health).toBe(100);
    expect(magician.level).toBe(1);
    expect(magician.type).toBe('Magician');
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
  });

  it('should throw an error if the name length is less than 2 characters', () => {
    expect(() => new Magician('M')).toThrow('Ошибка! Имя должно содержать min 2, max 10 символов!');
  });

  it('should throw an error if the name length is greater than 10 characters', () => {
    expect(() => new Magician('MagicianGandalf')).toThrow('Ошибка! Имя должно содержать min 2, max 10 символов!');
  });
});
