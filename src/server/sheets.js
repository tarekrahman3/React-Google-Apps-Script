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

['Status', 'Dealer', 'Entry Time (UTC)', 'Taken Out Time (UTC)', 'Stayed For (Days)', 'Product_URL', 'Brand', 'Title and Model', 'Year', 'KM', 'Price', 'Fuel_type', 'Horse_power', 'Transmission', 'Color', 'Marker']
export const getAllTakenOutCars = () => {
  const takenOutCars = [];
  const rows = SpreadsheetApp.getActive().getSheetByName(sheetName).getDataRange().getValues()
  for (const row of rows) {
    if (row[0]=="Taken Out"){
       takenOutCars.push({
        column1:row[0]
       })
    }
  }
}