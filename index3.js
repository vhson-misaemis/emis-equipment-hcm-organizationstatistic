
// Định nghĩa function để gọi API bằng phương thức POST
function callApiWithPostMethod(Object) {
  var baseUrl = 'https://apigateway.hcm.edu.vn/SSO/CSDLGetData/getThongTinTongTruong/' + Object.Code;

  var requestBody = {
    sysUserName: 'MISA',
    sysPassword: "5k|S3t$ahMts'1!"
  };

  var requestOptions = {
    method: 'POST',
    body: JSON.stringify(requestBody), // Chuyển object sang JSON string trước khi gửi đi
    headers: {
      'Content-Type': 'application/json' // Đặt kiểu dữ liệu của body là JSON
    }
  };

  return fetch(baseUrl, requestOptions)
    .then(function(response) {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
      
    })
    .catch(function(error) {
      // Xử lý lỗi nếu có
      console.error('Fetch Error:', Object.Code);
    });
}



// Định nghĩa function để gọi API
function callApi() {
  var arrCode = ['79000701','79000702','79000703','79000704','79000705','79000706','79000708','79000709','79000710','79000711','79000712','79000713','79000714','79000715','79000716','79000717','79000718','79000719','79000720','79000721','79000722','79000723','79000724','79000725','79000726','79000727','79000728','79000729','79000730','79000731','79000732','79000733','79000734','79000735','79000736','79000737','79000738','79000739','79000740','79000741','79000742','79000743','79000744','79000745','79000746','79000747','79000748','79000749','79000750','79000752','79000753','79000754','79000755','79000756','79000757','79000758','79000759','79000760','79000761','79000762','79000763','79000764','79000768','79000769','79000784','79000786','79000793','79000794','79000796','790007A6','790007A7','790007A8','790007A9','790007B0','790007B1','790007B2','790007B3','790007B7','790007B8','790007C1','790007C2','790007C3','790007C4','790007C5','790007C6','790007C7','79000802','79000803','79000804','79000805','79000806','79000807','79000820','79000842','79000860','79000861','79000869','79000871','79000875','79000876','79000F01','79000F02','79000F03','79774507','79786701']

  var arrBudgetCode = ['1072912','1061105','1069843','1008124','1003702','1060559','1042857','1058084','1060635','1040081','1060564','1040014','1037221','1040223','1058491','1016211','1060858','1003701','1042552','1073003','1039987','1060563','1069842','1040248','1052865','1060778','1068660','1042466','1008063','1014981','1046744','1058082','1073929','1042554','1046743','1042734','1037222','1046617','1014727','1058492','1069844','1039166','1068661','1040082','1040251','1046613','1046616','1076529','1039169','1040247','1046615','1038773','1038766','1038764','1038540','1032621','1043924','1043921','1076003','1035494','1035432','1037383','1086050','1086051','1104505','1104035','1105299','1105244','1046716','1110153','1110106','1109454','1110143','1114361','1114460','1118192','1118191','1120604','1122500','1125803','1125808','1127196','1129141','1129198','1129175','1129109','1003700','1001956','1042858','1058527','1039986','1061104','1080927','1076001','1045805','1049798','1086001','1035599','1125719','1127428','1071559','1060634','1076008','1010342','1050023']
  var result = []

// Cắt mảng thành các mảng nhỏ có 10 phần tử mỗi mảng
var arrayOfChunks = splitArrayIntoChunks(arrCode,arrBudgetCode);


  for(let i = 0; i < arrayOfChunks.length; ++i)
  {
  setTimeout(() => {
    var promises = arrayOfChunks[i].map(function(requestBody) {
      return callApiWithPostMethod(requestBody);
    });
  
    Promise.all(promises)
      .then(function(results) {
        // Xử lý các kết quả từ tất cả các cuộc gọi API
  
        // if (results.filter(e=>e!=undefined).length>0){
        //   console.log(results.filter(e=>e!=undefined))
        // }
        console.log(results?.result)
  
        result = result.concat(results.filter(e=>e?.result.length>0).map(el=>{return el?.result[0]}))
        
        for (let j = 0; j < result.length; ++j){
          result[j].QHNS = arrayOfChunks[i].find(e=>e.Code == result[j].MA).BudgetCode
        }
        console.log('Last result: ',result)
        console.log('Last result by JSON: ',JSON.stringify(result))
      })
      .catch(function(error) {
        console.error('Error:', error);
      });
  }, 20000 * i+1000)
}

}

// Hàm cắt mảng thành các mảng nhỏ
function splitArrayIntoChunks(array,arrBudgetCode) {
  var chunkSize = 105
  var chunks = [];
  for (var i = 0; i < array.length; i += chunkSize) {
    var chunk = array.slice(i, i + chunkSize);
    var chunkBudget = arrBudgetCode.slice(i, i + chunkSize);
    var result = []
    
    for (var j = 0; j < chunkSize; j ++){
      result.push({
        Code : chunk[j],
        BudgetCode : chunkBudget[j],
      })
    }
    chunks.push(result);
  }
  return chunks;
}

// Gọi function để thực hiện cuộc gọi API
callApi();