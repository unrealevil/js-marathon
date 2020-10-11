import {random} from './utils.js';
import log from './battle-log.js';
import {buttonDefault, buttonGreen} from "./widgets.js";
import api from './api.js';

class Action {
    actionLog = [];
    btn = buttonDefault;

    constructor({id, name, maxCount = null}) {
        this.id = id;
        this.name = name;
        this.amount = maxCount;
    }

    isDisable() {
        return null !== this.amount && this.amount <= 0;
    }

    apply(player, enemy) {
        return new Promise((resolve, reject) => {
            if (player.isDead() || enemy.isDead()) {
                return reject();
            }

            if (null === this.amount) {
                return resolve(); //бесконечное количество действий
            }

            if (!this.isDisable()) {
                --this.amount;
                return resolve();
            }

            return reject();
        });
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

    constructor({minDamage, maxDamage, ...actionProps}) {
        super(actionProps);
        this.damageMin = minDamage;
        this.damageMax = maxDamage;
    }

    apply(player, enemy) {
        return new Promise((resolve, reject) => {
            super.apply(player, enemy).then(async () => {
                    const {kick: {player1: playerDamage, player2: enemyDamage}} = await api.makeDamage(player, this, enemy);
                    enemy.makeDamage(enemyDamage);
                    this.pushLog(log.doDamage(enemy, player));
                    this.pushLog(log.damageInfo(enemyDamage, player, this, enemy));
                    this.pushLog(log.hpInfo(enemy));

                    player.makeDamage(playerDamage);
                    this.pushLog(log.doDamage(player, enemy));
                    this.pushLog(log.damageInfo(playerDamage, enemy, this, player));
                    this.pushLog(log.hpInfo(player));

                    resolve();
                }
            ).catch(reject);
        });
    }
}

export class HealthAction extends Action {
    btn = buttonGreen;

    constructor({minHp, maxHp, ...actionProps}) {
        super(actionProps);
        this.hpMin = minHp;
        this.hpMax = maxHp;
    }

    apply(player, enemy) {
        return new Promise((resolve, reject) => {
            super.apply(player, enemy).then(() => {
                    const hp = random(this.hpMin, this.hpMax);
                    player.addHp(hp);
                    this.pushLog(log.doHealing(player));
                    this.pushLog(log.healingInfo(hp, this, player));
                    this.pushLog(log.hpInfo(player));
                    resolve();
                }
            ).catch(reject);
        });
    }
}
