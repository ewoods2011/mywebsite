import { EdwardWebsitePage } from './app.po';

describe('edward-website App', () => {
  let page: EdwardWebsitePage;

  beforeEach(() => {
    page = new EdwardWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
