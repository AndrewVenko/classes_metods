// Базовый класс для остальных классов персонажей
export default class Character {
  constructor(name) {
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
      this.health = 100;
      this.level = 1;
      this.attack = 0;
      this.defence = 0;
    } else {
      throw new Error('Ошибка! Имя должно содержать min 2, max 10 символов!');
    }
  }

  // Метод повышения уровня персонажа
  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += Math.round(this.attack * 0.2);
      this.defence += Math.round(this.defence * 0.2);
      this.health = 100;
    } else {
      throw new Error('Ошибка! Повышение уровня невозможно, персонаж мертв!');
    }
  }

  // Метод наносимого урона персонажу
  damage(points) {
    const damageTaken = Math.round(points * (1 - this.defence / 100));
    this.health = Math.max(0, this.health - damageTaken);
  }
}
