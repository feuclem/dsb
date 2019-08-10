import {browser, by, element} from 'protractor'

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('dsb-root h1')).getText();
  }
}
