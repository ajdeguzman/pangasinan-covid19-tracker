var sheetNameRange = "Report!A1:B13";
var spreadsheetUrl = 'https://sheets.googleapis.com/v4/spreadsheets/1on2-Uew2bdrU-ZoeRGO0LZPi9c4dYs5e7PollFRKKmM/values/' + 
                      sheetNameRange + '?key=AIzaSyCrg4I0wSZMMQ9_uWbW6pXQLFoTerawhGM';

function getPangData() {
      $.ajax({
        url: spreadsheetUrl,
        type: "GET",
        success: function (data) {
          parseJSON = data.values;
          
          console.log(parseJSON);

          asOfDate = parseJSON[0][1];
          totalCasesNum = parseJSON[1][1];
          totalDeathNum = parseJSON[2][1];
          totalConfinedNum = parseJSON[3][1];
          totalRecoveredNum = parseJSON[4][1];
          totalPUINum = parseJSON[5][1];
          totalPUIDeathNum = parseJSON[6][1];
          totalPUIConfinedNum = parseJSON[7][1];
          totalPUIRecoveredNum = parseJSON[8][1];
          totalPUMNum = parseJSON[9][1];
          totalPUMQuarantinedNum = parseJSON[10][1];
          totalPUMCompletedQuarantineNum = parseJSON[11][1];
          totalPUMIncompleteQuarantineNum = parseJSON[12][1];
        },
        error: function (data) {
          console.log(data);
        },
        complete: function (data) {
          console.log(data);
          PangObjData = {
            "asOfDate": asOfDate,
            "totalCasesNum": totalCasesNum,
            "totalDeathNum": totalDeathNum,
            "totalConfinedNum": totalConfinedNum,
            "totalRecoveredNum": totalRecoveredNum,
            "totalPUINum": totalPUINum,
            "totalPUIDeathNum": totalPUIDeathNum,
            "totalPUIConfinedNum": totalPUIConfinedNum,
            "totalPUIRecoveredNum": totalPUIRecoveredNum,
            "totalPUMNum": totalPUMNum,
            "totalPUMQuarantinedNum": totalPUMQuarantinedNum,
            "totalPUMCompletedQuarantineNum": totalPUMCompletedQuarantineNum,
            "totalPUMIncompleteQuarantineNum": totalPUMIncompleteQuarantineNum
          }
          renderData(PangObjData);
        }
      });
  }

  function renderData(PangObjData) {
  
    $("#asOfDate").append('<br>(As of ' + PangObjData.asOfDate + ')');

    $("#totalCasesNum").html(PangObjData.totalCasesNum);
  
    $("#totalConfinedNum").html(PangObjData.totalConfinedNum);
  
    $("#totalRecoveredNum").html(PangObjData.totalRecoveredNum);
  
    $("#totalDeathNum").html(PangObjData.totalDeathNum);
  
    $("#totalPUINum").html(PangObjData.totalPUINum);
  
    $("#totalPUIDeathNum").html(PangObjData.totalPUIDeathNum);
  
    $("#totalPUIConfinedNum").html(PangObjData.totalPUIConfinedNum);
  
    $("#totalPUIRecoveredNum").html(PangObjData.totalPUIRecoveredNum);
  
    $("#totalPUMNum").html(PangObjData.totalPUMNum);
  
    $("#totalPUMQuarantinedNum").html(PangObjData.totalPUMQuarantinedNum);
  
    $("#totalPUMCompletedQuarantineNum").html(PangObjData.totalPUMCompletedQuarantineNum);
  
    $("#totalPUMIncompleteQuarantineNum").html(PangObjData.totalPUMIncompleteQuarantineNum);
  }


function render() {
  getPangData();
    //.then(nConVList);
}

render();