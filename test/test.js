import {
  Bowerman, Character, Daemon, Magician, Swordsman, Undead, Zombie,
} from '../src/index';

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

// Пооверяем остальные классы
// Bowerman
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

// Deamon
describe('Daemon', () => {
  it('should create a Daemon with the correct properties', () => {
    const daemon = new Daemon('Lilith');
    expect(daemon.name).toBe('Lilith');
    expect(daemon.health).toBe(100);
    expect(daemon.level).toBe(1);
    expect(daemon.type).toBe('Daemon');
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
  });

  it('should throw an error if the name length is less than 2 characters', () => {
    expect(() => new Daemon('L')).toThrow('Ошибка! Имя должно содержать min 2, max 10 символов!');
  });

  it('should throw an error if the name length is greater than 10 characters', () => {
    expect(() => new Daemon('DaemonLilith')).toThrow('Ошибка! Имя должно содержать min 2, max 10 символов!');
  });
});

// Magician
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

// Swordsman
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

// Undead
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

// Undead
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
