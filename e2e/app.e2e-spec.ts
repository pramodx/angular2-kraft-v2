import { KraftPage } from './app.po';

describe('kraft App', function() {
  let page: KraftPage;

  beforeEach(() => {
    page = new KraftPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
