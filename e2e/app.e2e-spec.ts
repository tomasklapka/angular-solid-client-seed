import { SolidAngularSeedPage } from './app.po';

describe('solid-angular-seed App', () => {
  let page: SolidAngularSeedPage;

  beforeEach(() => {
    page = new SolidAngularSeedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
