
import BootScene from '../scenes/BootScene';

const bootScene = new BootScene();

test('bootScene is of type an object', () => {
  expect(typeof bootScene).toBe('object');
});

test('bootScene key name is Boot', () => {
  expect(bootScene.sys.config).toBe('Boot');
});