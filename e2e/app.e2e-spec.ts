import { DcfullstackPage } from './app.po';

describe('dcfullstack App', () => {
  let page: DcfullstackPage;

  beforeEach(() => {
    page = new DcfullstackPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
