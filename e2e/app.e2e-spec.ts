import { NgMinesweepPage } from './app.po';

describe('ng-minesweep App', function() {
  let page: NgMinesweepPage;

  beforeEach(() => {
    page = new NgMinesweepPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
