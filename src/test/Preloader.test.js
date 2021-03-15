/* eslint-disable import/no-unresolved */
import PreloaderScene from '../Scenes/PreloaderScene';
/* eslint-enable import/no-unresolved */
const boardScene = new PreloaderScene();

test('bootScene is of type an object', () => {
  expect(typeof boardScene).toBe('object');
});

test('bootScene key name is Boot', () => {
  expect(boardScene.sys.config).toBe('Preloader');
});