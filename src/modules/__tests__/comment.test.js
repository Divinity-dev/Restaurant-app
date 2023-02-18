import getTotalComments from '../comment.js';

describe(' comments for each meals', () => {
  test('Count  comment items showing on the detail popup', () => {
    const commentsArray = [{}, {}, {}, {}, {}];
    const counter = getTotalComments(commentsArray);
    expect(commentsArray).toHaveLength(5);
    expect(counter).toBe(5);
  });
});