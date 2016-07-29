import { AirshipCmsSignupPage } from './app.po';

describe('airship-cms-signup App', function() {
  let page: AirshipCmsSignupPage;

  beforeEach(() => {
    page = new AirshipCmsSignupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
