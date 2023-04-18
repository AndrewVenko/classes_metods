import Character from '../Character';

// Проверяем класс Character
describe('Character', () => {
  const character = new Character('John');
  it('should create a new character with valid name', () => {
    const objectCharacter = {
      name: 'John',
      health: 100,
      level: 1,
      attack: 0,
      defence: 0,
    };

    expect(character).toEqual(objectCharacter);
  });

  it('should throw an error if name length is less than 2', () => {
    expect(() => new Character('')).toThrow('Ошибка! Имя должно содержать min 2, max 10 символов!');
    expect(() => new Character('A')).toThrow('Ошибка! Имя должно содержать min 2, max 10 символов!');
  });

  it('should throw an error if name length is greater than 10', () => {
    expect(() => new Character('JohnSmithJr')).toThrow('Ошибка! Имя должно содержать min 2, max 10 символов!');
  });

  it('should increase the character level by 1 when calling levelUp method', () => {
    character.levelUp();
    expect(character.level).toBe(2);
  });

  it('should increase the character attack and defence by 20% when calling levelUp method', () => {
    character.attack = 100;
    character.defence = 50;
    character.levelUp();
    expect(character.attack).toBe(120);
    expect(character.defence).toBe(60);
  });

  it('should set the character health to 100 when calling levelUp method', () => {
    character.health = 50;
    character.levelUp();
    expect(character.health).toBe(100);
  });

  it('should throw an error when calling levelUp method on a dead character', () => {
    character.health = 0;
    expect(() => character.levelUp()).toThrowError('Ошибка! Повышение уровня невозможно, персонаж мертв!');
  });

  it('should decrease the character health by the correct amount when calling damage method', () => {
    character.health = 100;
    character.defence = 20;
    character.damage(20);
    expect(character.health).toBe(84);
  });

  it('should decrease the character health by the correct amount, taking into account defence', () => {
    character.health = 100;
    character.defence = 50;
    character.damage(20);
    expect(character.health).toBe(90);
  });

  it('should not decrease the character health below 0 when calling damage method', () => {
    character.health = 0;
    character.damage(120);
    expect(character.health).toBe(0);
    character.damage(20);
    expect(character.health).toBe(0);
  });
});
