import { browser, by, element } from 'protractor';
import { promise as wdpromise } from 'selenium-webdriver';

export class AppPage {
  public navigateTo(): wdpromise.Promise<{}> {
    return browser.get('/');
  }

  public getParagraphText(): wdpromise.Promise<string> {
    return element(by.css('app-root h1')).getText();
  }
}
