
import LeaderBoardScene from '../scenes/LeaderBoardScene';

const boardScene = new LeaderBoardScene();

test('bootScene is of type an object', () => {
  expect(typeof boardScene).toBe('object');
});

test('bootScene key name is Boot', () => {
  expect(boardScene.sys.config).toBe('Board');
});