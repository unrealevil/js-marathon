import {random} from './utils.js';
import log from './battle-log.js';
import {buttonDefault, buttonGreen} from "./widgets.js";

class Action {
    actionLog = [];
    btn = buttonDefault;

    constructor({name, amount = null}) {
        this.name = name;
        this.amount = amount;
    }

    isDisable() {
        return null !== this.amount && this.amount <= 0;
    }

    apply(player, enemy) {
        if (player.isDead() || enemy.isDead()) {
            return false;
        }

        if (null === this.amount) {
            return true; //бесконечное количество действий
        }
        if (!this.isDisable()) {
            --this.amount;
            return true;
        }
        return false;
    }

    pushLog(msg) {
        this.actionLog.push(msg);
    }

    popLogs() {
        const logs = this.actionLog;
        this.actionLog = [];
        return logs;
    }
}

export class DamageAction extends Action {

    constructor({damageMin, damageMax, ...actionProps}) {
        super(actionProps);
        this.damageMin = damageMin;
        this.damageMax = damageMax;
    }

    apply(player, enemy) {
        if (super.apply(player, enemy)) {
            const damage = random(this.damageMin, this.damageMax);
            enemy.makeDamage(damage);
            this.pushLog(log.doDamage(enemy, player));
            this.pushLog(log.damageInfo(damage));
            this.pushLog(log.hpInfo(enemy));
            return true;
        }
        return false;
    }
}

export class HealthAction extends Action {
    btn = buttonGreen;
    constructor({hpMin, hpMax, ...actionProps}) {
        super(actionProps);
        this.hpMin = hpMin;
        this.hpMax = hpMax;
    }

    apply(player, enemy) {
        if (super.apply(player, enemy)) {
            const hp = random(this.hpMin, this.hpMax);
            player.addHp(hp);
            this.pushLog(log.doHealing(player));
            this.pushLog(log.healingInfo(hp));
            this.pushLog(log.hpInfo(player));
            return true;
        }
        return false;
    }
}
