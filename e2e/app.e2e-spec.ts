import { Ng2ExercisePage } from './app.po';

describe('ng2-exercise App', () => {
  let page: Ng2ExercisePage;

  beforeEach(() => {
    page = new Ng2ExercisePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
