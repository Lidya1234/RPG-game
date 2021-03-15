/* eslint-disable import/no-unresolved */
import GameScene from '../Scenes/GameScene';
/* eslint-enable import/no-unresolved */
const gameScene = new GameScene();

test('bootScene is of type an object', () => {
  expect(typeof gameScene).toBe('object');
});

test('bootScene key name is Boot', () => {
  expect(gameScene.sys.config).toBe('Game');
});