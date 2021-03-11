
/* eslint-disable no-undef */
import Phaser from 'phaser';
import config from '../Config/config';
import Request from './score';
import Button from '../Objects/Button';

export default class LeadersBoardScene extends Phaser.Scene {
  constructor() {
    super('Board');
  }

  async create() {
    this.add
      .text(this.scale.width * 0.5, this.scale.height * 0.1, 'Leadersboard', {
        fontSize: 48,
        color: '#00f',
      });


    let position = 130;
    this.add.text(300, position, 'RANK').setTint(0x00ff00);
    this.add.text(400, position, 'NAME').setTint(0x00ff00);
    this.add.text(500, position, 'SCORE').setTint(0x00ff00);
    const request = new Request();
    this.usersScore = await request.getAllPlayers();
    this.usersSortedScore = this.usersScore.result.sort((a, b) => (a.score > b.score ? -1 : 1));

    position += 25;
    this.usersSortedScore.forEach((result, index) => {
      if (index < 10) {
        this.add.text(300, position, `  ${index + 1} `).setTint(0xff0000);

        this.add.text(400, position, `${result.user}`).setTint(0xff0000);

        this.add.text(500, position, `${result.score}`).setTint(0xff0000);

        position += 25;
      }
    });


    this.gameButton = new Button(this, config.width / 2, config.height / 2 + 200, 'blueButton1', 'blueButton2', 'Restart', 'Game');

  }
}