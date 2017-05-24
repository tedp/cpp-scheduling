import { CppSchedulingPage } from './app.po';

describe('cpp-scheduling App', () => {
  let page: CppSchedulingPage;

  beforeEach(() => {
    page = new CppSchedulingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
