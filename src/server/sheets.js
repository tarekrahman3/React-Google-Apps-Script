const getSheets = () => SpreadsheetApp.getActive().getSheets();

const getActiveSheetName = () => SpreadsheetApp.getActive().getSheetName();

export const getSheetsData = () => {
  const activeSheetName = getActiveSheetName();
  return getSheets().map((sheet, index) => {
    const name = sheet.getName();
    return {
      name,
      index,
      isActive: name === activeSheetName,
    };
  });
};

export const addSheet = (sheetTitle) => {
  SpreadsheetApp.getActive().insertSheet(sheetTitle);
  return getSheetsData();
};

export const deleteSheet = (sheetIndex) => {
  const sheets = getSheets();
  SpreadsheetApp.getActive().deleteSheet(sheets[sheetIndex]);
  return getSheetsData();
};

export const setActiveSheet = (sheetName) => {
  SpreadsheetApp.getActive().getSheetByName(sheetName).activate();
  return getSheetsData();
};


export const  getRowsWithTakenOutValue = () => {
  var sheet = SpreadsheetApp.openById('your-sheet-id').getActiveSheet();
  var data = sheet.getDataRange().getValues();
  var result = data.filter(function(row) {
    return row[0] === 'Taken Out';
  });
  return result;
}

export const getTakenOutCars = () => {
  const rows = getRowsWithTakenOutValue().map((row)=>{
    return {
      status: row[0],
      dealer: row[1],
      entryTime: row[2],
      exitTime: row[16],
      brand: row[5],
      modelAndTitle: row[6],
      carUrl: row[4]
    };
  })
  return rows;
}