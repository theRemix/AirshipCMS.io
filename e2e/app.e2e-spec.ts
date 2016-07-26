import { AirshipCMSSignupPage } from './app.po';

describe('airship-cms-signup App', function() {
  let page: AirshipCMSSignupPage;

  beforeEach(() => {
    page = new AirshipCMSSignupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
