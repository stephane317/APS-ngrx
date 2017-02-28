import { AppNgRxPage } from './app.po';

describe('app-ng-rx App', function() {
  let page: AppNgRxPage;

  beforeEach(() => {
    page = new AppNgRxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
