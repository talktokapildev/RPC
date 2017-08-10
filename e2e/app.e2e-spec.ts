import { RpcTest2Page } from './app.po';

describe('rpc-test2 App', () => {
  let page: RpcTest2Page;

  beforeEach(() => {
    page = new RpcTest2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to rpc!');
  });
});
