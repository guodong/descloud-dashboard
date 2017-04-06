import { DescloudPage } from './app.po';

describe('descloud App', () => {
  let page: DescloudPage;

  beforeEach(() => {
    page = new DescloudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
