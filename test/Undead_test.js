import Undead from '../src/Undead';

// Проверяем класс Undead
describe('Undead', () => {
  it('should create a Undead with the correct properties', () => {
    const undead = new Undead('Artorias');
    expect(undead.name).toBe('Artorias');
    expect(undead.health).toBe(100);
    expect(undead.level).toBe(1);
    expect(undead.type).toBe('Undead');
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
  });

  it('should throw an error if the name length is less than 2 characters', () => {
    expect(() => new Undead('U')).toThrow('Ошибка! Имя должно содержать min 2, max 10 символов!');
  });

  it('should throw an error if the name length is greater than 10 characters', () => {
    expect(() => new Undead('UndeadArtorias')).toThrow('Ошибка! Имя должно содержать min 2, max 10 символов!');
  });
});
