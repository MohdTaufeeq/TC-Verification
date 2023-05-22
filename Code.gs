function doGet(e) {
  return HtmlService.createTemplateFromFile('index').setTitle('TCVerification')
}

function include(filename) {
return HtmlService.createTemplateFromFile(filename).evaluate().getContent();
}

/*function test_verify() {
  var url = verification(123, '01-11-2003');
  console.log(url);
}*/

function verification(docText, dobData) {
  console.log('docText',docText);
  console.log('dobData',dobData);
  var url = "https://docs.google.com/spreadsheets/d/1mmQTGLVj92gu3qc_qdYxouDCR3a3NgiET5LuEJdgGqk/edit#gid=0"
  var ss = SpreadsheetApp.openByUrl(url);
  var sheet = ss.getSheetByName("data_Base");
  var range = sheet.getDataRange();
  var values = range.getValues();
  var targetUrl;
  for (var row = 1; row < values.length; row++) {
    if (values[row][0] == docText && Utilities.formatDate(values[row][1], 'IST', 'yyyy-MM-dd') === dobData) {
      targetUrl = values[row][3];

    }
  }

  return targetUrl;

}
