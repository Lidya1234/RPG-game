/* eslint-disable import/no-unresolved */
import BootScene from '../Scenes/BootScene';
/* eslint-enable import/no-unresolved */
const bootScene = new BootScene();

test('bootScene is of type an object', () => {
  expect(typeof bootScene).toBe('object');
});

test('bootScene key name is Boot', () => {
  expect(bootScene.sys.config).toBe('Boot');
});