import { GeoCacherPage } from './app.po';

describe('geo-cacher App', () => {
  let page: GeoCacherPage;

  beforeEach(() => {
    page = new GeoCacherPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
