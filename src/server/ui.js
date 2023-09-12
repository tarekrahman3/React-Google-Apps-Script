export const onOpen = () => {
  const menu = SpreadsheetApp.getUi()
    .createMenu('Car Visualization')
    .addItem('DATA TABLE', 'openDialogMUI')

  menu.addToUi();
};

export const openDialogMUI = () => {
  const html = HtmlService.createHtmlOutputFromFile('dialog-demo-mui')
    .setWidth(1500)
    .setHeight(800);
  SpreadsheetApp.getUi().showModalDialog(html, 'Sheet Editor (MUI)');
};

