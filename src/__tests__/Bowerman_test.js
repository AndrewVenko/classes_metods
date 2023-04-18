import Bowerman from '../Bowerman';

// Проверяем класс Bowerman
describe('Bowerman', () => {
  it('should create a Bowerman with the correct properties', () => {
    const bowman = new Bowerman('Legolas');
    expect(bowman.name).toBe('Legolas');
    expect(bowman.health).toBe(100);
    expect(bowman.level).toBe(1);
    expect(bowman.type).toBe('Bowman');
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
  });

  it('should throw an error if the name length is less than 2 characters', () => {
    expect(() => new Bowerman('B')).toThrow('Ошибка! Имя должно содержать min 2, max 10 символов!');
  });

  it('should throw an error if the name length is greater than 10 characters', () => {
    expect(() => new Bowerman('BowermanLegolas')).toThrow('Ошибка! Имя должно содержать min 2, max 10 символов!');
  });
});
