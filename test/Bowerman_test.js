import Bowerman from '../src/Bowerman';

// Проверяем класс Bowerman
describe('Bowerman', () => {
  it('should create a Bowerman with the correct properties', () => {
    const daemon = new Bowerman('Legolas');
    expect(daemon.name).toBe('Legolas');
    expect(daemon.health).toBe(100);
    expect(daemon.level).toBe(1);
    expect(daemon.type).toBe('Bowman');
    expect(daemon.attack).toBe(25);
    expect(daemon.defence).toBe(25);
  });

  it('should throw an error if the name length is less than 2 characters', () => {
    expect(() => new Bowerman('B')).toThrow('Ошибка! Имя должно содержать min 2, max 10 символов!');
  });

  it('should throw an error if the name length is greater than 10 characters', () => {
    expect(() => new Bowerman('BowermanLegolas')).toThrow('Ошибка! Имя должно содержать min 2, max 10 символов!');
  });
});
