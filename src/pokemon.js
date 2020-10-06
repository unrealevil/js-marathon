export class Pokemon {

    constructor({name, hp, image, level}) {
        this.name = name;
        this.hp = this.defaultHp = hp;
        this.image = image;
        this.level = level;
    }

    isDead() {
        return 0 === this.hp;
    }

    makeDamage(amount) {
        this.hp -= amount;
        if (this.hp < 0) {
            this.hp = 0;
        }
    }

    addHp(amount) {
        this.hp += amount;
        if (this.hp > this.defaultHp) {
            this.hp = this.defaultHp;
        }
    }
}