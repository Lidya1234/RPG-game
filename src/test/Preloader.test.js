
import PreloaderScene from '../scenes/PreloaderScene';

const boardScene = new PreloaderScene();

test('bootScene is of type an object', () => {
  expect(typeof boardScene).toBe('object');
});

test('bootScene key name is Boot', () => {
  expect(boardScene.sys.config).toBe('Preloader');
});