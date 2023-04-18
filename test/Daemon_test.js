import Daemon from '../src/Daemon';

// Проверяем класс Deamon
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
