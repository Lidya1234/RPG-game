
import TitleScene from '../scenes/TitleScene';

const boardScene = new TitleScene();

test('bootScene is of type an object', () => {
  expect(typeof boardScene).toBe('object');
});

test('bootScene key name is Boot', () => {
  expect(boardScene.sys.config).toBe('Title');
});