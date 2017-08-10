import { browser, by, element } from 'protractor';

export class RpcTest2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rpc-root h1')).getText();
  }
}
