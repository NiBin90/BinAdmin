import { SseAppPage } from './app.po';

describe('sse-app App', () => {
  let page: SseAppPage;

  beforeEach(() => {
    page = new SseAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
