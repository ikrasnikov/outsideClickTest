import { OusideClickTestPage } from './app.po';

describe('ouside-click-test App', () => {
  let page: OusideClickTestPage;

  beforeEach(() => {
    page = new OusideClickTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
