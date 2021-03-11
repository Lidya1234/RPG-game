
/* eslint-disable no-undef */
import Phaser from 'phaser';
import config from '../Config/config';

import Button from '../Objects/Button';


import Request from './score';

export default class CreditsScene extends Phaser.Scene {
  constructor() {
    super('Credits');
  }

  init(data) {
    this.finalScore = data.score;
  }

  create() {
    // add text
    this.add
      .text(
        this.scale.width * 0.5,
        this.scale.height * 0.1,
        'Game Over | Save Score',
        {
          fontSize: 48,
          color: '#00f',
        },
      )
      .setOrigin();
    this.add
      .text(
        this.scale.width * 0.5,
        this.scale.height * 0.2,
        `Final score: ${this.finalScore}`,
        { fontSize: 24 },
      )
      .setOrigin();

    // submit score
    const form = document.createElement('form');
    form.innerHTML = `
        <div class="form-group d-flex">
          <input class="player" type="text" name="name" placeholder="Enter your name" required minLength="3" maxLength="10" autofocus/>
          <button class="btn btn-info btn-save-score" type="submit">Submit</button>
        </div>
    `;
    this.add.dom(this.scale.width * 0.1, 10, form);

    document.querySelector('form').addEventListener('submit', (e) => {
      e.preventDefault();
      const user = document.querySelector('.player').value.trim();
      const score = this.finalScore;

      const request = new Request();

      request
        .saveScore(user, score)
        .then(() => {
          this.scene.start('Board');
        })
        .catch(() => {
          this.add
            .text(
              this.scale.width * 0.5,
              this.scale.height * 0.8,
              'Network Error. Please try again later.',
            )
            .setOrigin();
        });
    });

    this.gameButton = new Button(this,
      config.width / 2 ,
      config.height / 2 +200,
      'blueButton1', 'blueButton2',
      'LeaderBord', 'Board');
  }
}
