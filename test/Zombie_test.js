import Zombie from '../src/Zombie';

// Проверяем класс Zombie
describe('Zombie', () => {
  it('should create a Zombie with the correct properties', () => {
    const zombie = new Zombie('Dolores');
    expect(zombie.name).toBe('Dolores');
    expect(zombie.health).toBe(100);
    expect(zombie.level).toBe(1);
    expect(zombie.type).toBe('Zombie');
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
  });

  it('should throw an error if the name length is less than 2 characters', () => {
    expect(() => new Zombie('Z')).toThrow('Ошибка! Имя должно содержать min 2, max 10 символов!');
  });

  it('should throw an error if the name length is greater than 10 characters', () => {
    expect(() => new Zombie('ZombieDolores')).toThrow('Ошибка! Имя должно содержать min 2, max 10 символов!');
  });
});
