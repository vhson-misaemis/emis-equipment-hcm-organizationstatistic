
// Định nghĩa function để gọi API bằng phương thức POST
function callApiWithPostMethod(Object) {
  var baseUrl = 'https://apigateway.hcm.edu.vn/SSO/CSDLGetData/getGiaoVien/' + Object.Code;

  var requestBody = {
    sysUserName: 'MSCHOOL',
    sysPassword: "NGe4DlO9st#$j23g!@%h24WFcgNws6fZvSbxnjlRF"
  };

  var requestOptions = {
    method: 'POST',
    body: JSON.stringify(requestBody), // Chuyển object sang JSON string trước khi gửi đi
    headers: {
      'Content-Type': 'application/json', // Đặt kiểu dữ liệu của body là JSON
      'Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJVSUQiOiJpMlMzYnMyVDIwajh6N1MzV3d6a1FxTVFNRzM5UitnViIsIlN5c3RlbUlEIjoyMCwiSVAiOiIxMjAuNzIuMTE3LjE2NyIsIlBhcmFtMSI6InFpdGVjaCIsIlBhcmFtMiI6bnVsbCwiUGFyYW0zIjpudWxsLCJSZXR1cm51cmkiOiJodHRwczovL2FwcC5vbmx1eWVuLWRldi9sb2dpbi1zc28iLCJleHAiOjE2OTEwNzQ2NzN9.hNIMsk9LUw74BHla_q4eT2tY6C-BPxSV4_VSE8nfBvI' 
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
  var arrCode = ['79000701','79000702','79000703','79000704','79000705','79000706','79000708','79000709','79000710','79000711','79000712','79000713','79000714','79000715','79000716','79000717','79000718','79000719','79000720','79000721','79000722','79000723','79000724','79000725','79000726','79000727','79000728','79000729','79000730','79000731','79000732','79000733','79000734','79000735','79000736','79000737','79000738','79000739','79000740','79000741','79000742','79000743','79000744','79000745','79000746','79000747','79000748','79000749','79000750','79000752','79000753','79000754','79000755','79000756','79000757','79000758','79000759','79000760','79000761','79000762','79000763','79000764','79000765','79000768','79000769','79000784','79000786','79000793','79000794','79000796','790007A6','790007A7','790007A8','790007A9','790007B0','790007B1','790007B2','790007B3','790007B7','790007B8','790007C1','790007C2','790007C3','790007C4','790007C5','790007C6','790007C7','79000802','79000803','79000804','79000805','79000806','79000807','79000820','79000842','79000860','79000861','79000869','79000871','79000875','79000876','79000F01','79000F02','79000F03','79774507','79786701']

  var arrBudgetCode = ['1072912','1061105','1069843','1008124','1003702','1060559','1042857','1058084','1060635','1040081','1060564','1040014','1037221','1040223','1058491','1016211','1060858','1003701','1042552','1073003','1039987','1060563','1069842','1040248','1052865','1060778','1068660','1042466','1008063','1014981','1046744','1058082','1073929','1042554','1046743','1042734','1037222','1046617','1014727','1058492','1069844','1039166','1068661','1040082','1040251','1046613','1046616','1046742','1039169','1040247','1046615','1038773','1038766','1038764','1038540','1032621','1043924','1043921','1076003','1035494','1035432','1037383','1037384','1086050','1086051','1104505','1104035','1105299','1105244','1046716','1110153','1110106','1109454','1110143','1114361','1114460','1118192','1118191','1120604','1122500','1125803','1125808','1127196','1129141','1129198','1129175','1129109','1003700','1001956','1042858','1058527','1039986','1061104','1080927','1076001','1045805','1049798','1086001','1035599','1125719','1127428','1071559','1060634','1076008','1010342','1050023']
  
  var arrSubject = [{ SubjectDic : 21 ,MA_MON_HOC: '70', TEN_MON: 'Ngoại ngữ 1'},
  {  SubjectDic : 1000 ,MA_MON_HOC: '91', TEN_MON: 'HĐTN'},
  {  SubjectDic : 2 ,MA_MON_HOC: '41', TEN_MON: 'Địa lí'},
  {  SubjectDic : 15 ,MA_MON_HOC: '38', TEN_MON: 'Tin học'},
  {  SubjectDic : undefined ,MA_MON_HOC: '50', TEN_MON: 'Nghề PT'}, // Hướng nghiệp?
  {  SubjectDic : 9 ,MA_MON_HOC: '37', TEN_MON: 'Sinh học'},
  {  SubjectDic : 4 ,MA_MON_HOC: '36', TEN_MON: 'Hóa học'},
  {  SubjectDic : 16 ,MA_MON_HOC: '34', TEN_MON: 'Toán'},
  {  SubjectDic : 8 ,MA_MON_HOC: '39', TEN_MON: 'Ngữ Văn'},
  {  SubjectDic : 6 ,MA_MON_HOC: '40', TEN_MON: 'Lịch sử'},
  {  SubjectDic : 22 ,MA_MON_HOC: '35', TEN_MON: 'Vật lí'},
  {  SubjectDic : 1 ,MA_MON_HOC: '46', TEN_MON: 'Công nghệ'},
  {  SubjectDic : 17 ,MA_MON_HOC: '47', TEN_MON: 'GDQP-AN'},
  {  SubjectDic : 10 ,MA_MON_HOC: '48', TEN_MON: 'Thể dục'},
  {  SubjectDic : 10 ,MA_MON_HOC: '88', TEN_MON: 'Giáo dục thể chất'},
  {  SubjectDic : 3 ,MA_MON_HOC: '52', TEN_MON: 'GDCD'},
  {  SubjectDic : 12049 ,MA_MON_HOC: '100', TEN_MON: 'GDKT&PL'},
  {  SubjectDic : undefined ,MA_MON_HOC: '99', TEN_MON: 'GDĐP'},
  {  SubjectDic : undefined ,MA_MON_HOC: '30', TEN_MON: 'Mỹ thuật'},
  {  SubjectDic : 22 ,MA_MON_HOC: '16', TEN_MON: 'Vật lí'},
  {  SubjectDic : undefined ,MA_MON_HOC: '66', TEN_MON: 'Khoa học Tự nhiên'},
  {  SubjectDic : 15 ,MA_MON_HOC: '32', TEN_MON: 'Tin học'},
  {  SubjectDic : 16 ,MA_MON_HOC: '15', TEN_MON: 'Toán'},
  {  SubjectDic : 1 ,MA_MON_HOC: '27', TEN_MON: 'Công nghệ'},
  {  SubjectDic : 10 ,MA_MON_HOC: '28', TEN_MON: 'Thể dục'},
  {  SubjectDic : 3 ,MA_MON_HOC: '26', TEN_MON: 'GDCD'},
  {  SubjectDic : 21 ,MA_MON_HOC: '69', TEN_MON: 'Ngoại ngữ 1'},
  {  SubjectDic : 8 ,MA_MON_HOC: '19', TEN_MON: 'Ngữ văn'},
  {  SubjectDic : undefined ,MA_MON_HOC: '05', TEN_MON: 'Lịch sử và địa lý'},
  {  SubjectDic : 2 ,MA_MON_HOC: '21', TEN_MON: 'Địa lí'},
  {  SubjectDic : 4 ,MA_MON_HOC: '17', TEN_MON: 'Hóa học'},
  {  SubjectDic : 6 ,MA_MON_HOC: '20', TEN_MON: 'Lịch sử'},
  {  SubjectDic : 9 ,MA_MON_HOC: '18', TEN_MON: 'Sinh học'},
  {  SubjectDic : undefined ,MA_MON_HOC: '97', TEN_MON: 'Nghệ thuật'},
  {  SubjectDic : undefined ,MA_MON_HOC: '29', TEN_MON: 'Âm nhạc'}]

  var arrOrg = [
    {
        "BudgetCode": "1058492",
        "OrganizationID": "F521AC7E-3462-45C7-9EE2-5A0B94F21698"
    },
    {
        "BudgetCode": "1086051",
        "OrganizationID": "A17CBC9E-67D5-44EC-9B97-AB931C19F5EB"
    },
    {
        "BudgetCode": "1035432",
        "OrganizationID": "EE552CB5-6ADE-4DBC-8815-F97A7173F9AD"
    },
    {
        "BudgetCode": "1114460",
        "OrganizationID": "C91E56E5-1C9A-4726-8F38-106E153AA598"
    },
    {
        "BudgetCode": "1058527",
        "OrganizationID": "3F2EC9E7-88A2-4896-A4F2-8E6121872B53"
    },
    {
        "BudgetCode": "1045805",
        "OrganizationID": "0500378B-1B23-44EC-AF26-689D49E3D963"
    },
    {
        "BudgetCode": "1042857",
        "OrganizationID": "C7922513-BDFD-44D5-B2EE-2C76CF29E718"
    },
    {
        "BudgetCode": "1069842",
        "OrganizationID": "F250D90B-CCCB-4B4B-987F-57EAC596D1FC"
    },
    {
        "BudgetCode": "1114361",
        "OrganizationID": "6E890E4D-D1B2-4BCB-91EF-5DC6591957AC"
    },
    {
        "BudgetCode": "1040014",
        "OrganizationID": "683F839D-EF5A-48C8-9749-FB9DE2CA817F"
    },
    {
        "BudgetCode": "1118192",
        "OrganizationID": "A72BD485-1E63-45EF-9516-163625D2FF85"
    },
    {
        "BudgetCode": "1110153",
        "OrganizationID": "6B428E2B-C479-41EB-95C4-0533D341B8B7"
    },
    {
        "BudgetCode": "1043924",
        "OrganizationID": "19373974-81AB-4D78-A470-61F83751FFD5"
    },
    {
        "BudgetCode": "1060559",
        "OrganizationID": "6A4D4F1B-64EB-4D6E-B158-E7D3F420CCD1"
    },
    {
        "BudgetCode": "1068660",
        "OrganizationID": "6D641E9E-6F66-4CD3-8101-138FE97C5DB3"
    },
    {
        "BudgetCode": "1042858",
        "OrganizationID": "EC0D3DAA-17F9-491E-80A2-3C69AB884D15"
    },
    {
        "BudgetCode": "1040251",
        "OrganizationID": "8D2CF345-E5B8-4389-8073-068325761FAE"
    },
    {
        "BudgetCode": "1125803",
        "OrganizationID": "D6A5A6D7-ED18-4080-8A3C-500E6AE335AF"
    },
    {
        "BudgetCode": "1072912",
        "OrganizationID": "BA54F51F-FD72-48FD-A1CB-8D6B93D52B19"
    },
    {
        "BudgetCode": "1129175",
        "OrganizationID": "FBC579AA-9A3D-461D-8AA9-05C9ED7D1876"
    },
    {
        "BudgetCode": "1058084",
        "OrganizationID": "87D18B52-AAF9-47C1-BDB4-3D2747A49808"
    },
    {
        "BudgetCode": "1076008",
        "OrganizationID": "65CA84C0-940D-4FFD-8EC1-88FCAA858CB5"
    },
    {
        "BudgetCode": "1125808",
        "OrganizationID": "F577F214-4273-48FD-AEAE-C8034F1FAC03"
    },
    {
        "BudgetCode": "1037221",
        "OrganizationID": "691BBF64-6B08-4BAD-A6F6-96B3A2A4C952"
    },
    {
        "BudgetCode": "1042552",
        "OrganizationID": "F7561B77-51A8-4E46-AC5C-122D5E61E271"
    },
    {
        "BudgetCode": "1038773",
        "OrganizationID": "299FDEE3-B9D0-44CB-9673-7916264BC4D7"
    },
    {
        "BudgetCode": "1042466",
        "OrganizationID": "8CE5303F-340F-4855-8C87-08AD547672F2"
    },
    {
        "BudgetCode": "1061105",
        "OrganizationID": "D60A78A0-8DD1-45B8-9D81-FAFB45FAD507"
    },
    {
        "BudgetCode": "1046615",
        "OrganizationID": "4E539D5A-E3E0-4E60-939E-6563F41E785A"
    },
    {
        "BudgetCode": "1014981",
        "OrganizationID": "5D02B132-D184-45BF-9D88-825656B315F9"
    },
    {
        "BudgetCode": "1069844",
        "OrganizationID": "4DFF8D47-AC7B-455E-B828-14E8A7A4BE75"
    },
    {
        "BudgetCode": "1052865",
        "OrganizationID": "08134B29-889B-4D85-A2C7-D605B39EE273"
    },
    {
        "BudgetCode": "1060564",
        "OrganizationID": "8DA69C9F-3E73-44EA-A9B2-0F422EA0C54B"
    },
    {
        "BudgetCode": "1049798",
        "OrganizationID": "28FAE579-D058-4B96-9C91-868315DDD619"
    },
    {
        "BudgetCode": "1040082",
        "OrganizationID": "CAEF972B-6EDA-4FF0-975D-1358F020B0B5"
    },
    {
        "BudgetCode": "1040081",
        "OrganizationID": "D01C00A5-49DD-4BFF-8FB1-51E22E7C0223"
    },
    {
        "BudgetCode": "1105244",
        "OrganizationID": "40F6157B-8F47-49C5-91A5-7CD20D7566F4"
    },
    {
        "BudgetCode": "1129198",
        "OrganizationID": "5AF8810D-9116-49C4-A543-F46CF6A836FC"
    },
    {
        "BudgetCode": "1046616",
        "OrganizationID": "F56DE149-402A-4F7D-BAF7-B06D45B40A76"
    },
    {
        "BudgetCode": "1038764",
        "OrganizationID": "6B9CD77E-41EC-46C8-82CB-A4C2ED909E97"
    },
    {
        "BudgetCode": "1086001",
        "OrganizationID": "AB2C07B8-D87B-4856-B7B8-FEDE0DFFEE87"
    },
    {
        "BudgetCode": "1038766",
        "OrganizationID": "55C16D5B-F4F3-45A6-9522-69FB246656A4"
    },
    {
        "BudgetCode": "1016211",
        "OrganizationID": "ECDE4C8A-9A25-4341-A929-EA5921450BA6"
    },
    {
        "BudgetCode": "1120604",
        "OrganizationID": "683E0FC1-F5E2-4D02-A719-26D37411B24E"
    },
    {
        "BudgetCode": "1003702",
        "OrganizationID": "C7BBF51A-C6B1-4B5C-84F4-AB79AC43DD78"
    },
    {
        "BudgetCode": "1125719",
        "OrganizationID": "8E63C703-049D-4194-B10F-605C16F81FA9"
    },
    {
        "BudgetCode": "1069843",
        "OrganizationID": "01BB6662-5308-4B84-BE75-4A2784750B2D"
    },
    {
        "BudgetCode": "1127428",
        "OrganizationID": "64916FB4-D274-4DDD-8CD9-7BCDA4542375"
    },
    {
        "BudgetCode": "1037222",
        "OrganizationID": "A06E2225-AFC9-41B9-9F11-2D07913A7029"
    },
    {
        "BudgetCode": "1068661",
        "OrganizationID": "4B21FFE1-BFED-4378-BDA1-40269EC94F1B"
    },
    {
        "BudgetCode": "1046742",
        "OrganizationID": "D5044CE8-A349-4871-A01E-77F3896D32B1"
    },
    {
        "BudgetCode": "1035599",
        "OrganizationID": "F52FC8E8-4908-4F37-8245-59D332021D0F"
    },
    {
        "BudgetCode": "1110106",
        "OrganizationID": "75C06819-B42B-4726-A9C5-632B4D719A37"
    },
    {
        "BudgetCode": "1046613",
        "OrganizationID": "2E4A7D8F-9DC7-41B9-B752-79D452E6199D"
    },
    {
        "BudgetCode": "1109454",
        "OrganizationID": "178F3ED7-2BBE-4F91-8642-DE274927C5A4"
    },
    {
        "BudgetCode": "1046743",
        "OrganizationID": "E4C2816F-B753-40A0-AAE4-7704293B50C7"
    },
    {
        "BudgetCode": "1039987",
        "OrganizationID": "341A310A-103D-4639-A127-B2F6880CF8F7"
    },
    {
        "BudgetCode": "1046744",
        "OrganizationID": "BA756C17-1566-43DA-9B92-1C167C681569"
    },
    {
        "BudgetCode": "1042734",
        "OrganizationID": "8236B2A5-D69B-4D14-A0BE-A3082F999B9B"
    },
    {
        "BudgetCode": "1043921",
        "OrganizationID": "6F7EDD3B-8CA9-41A6-8D69-3617D26AE3BD"
    },
    {
        "BudgetCode": "1042554",
        "OrganizationID": "D210886F-AF08-49E7-B880-65B3415BF8C2"
    },
    {
        "BudgetCode": "1037383",
        "OrganizationID": "AD4C7891-3203-4544-A339-9343A3808CFB"
    },
    {
        "BudgetCode": "1039169",
        "OrganizationID": "8059549E-F8B3-4C2F-A466-2636B39369A5"
    },
    {
        "BudgetCode": "1061104",
        "OrganizationID": "3CA58A1B-CB63-45EF-8597-726D021EBC72"
    },
    {
        "BudgetCode": "1039986",
        "OrganizationID": "5D45774A-2B98-4F1E-B051-42AC113107B1"
    },
    {
        "BudgetCode": "1105299",
        "OrganizationID": "E2183476-7FA7-40C7-8B3B-993407FCC45F"
    },
    {
        "BudgetCode": "1003700",
        "OrganizationID": "EC0644D9-F2B3-46CE-AAB0-01372A8D6F5F"
    },
    {
        "BudgetCode": "1073929",
        "OrganizationID": "95611A89-BD56-496A-ABA8-7FF7C99DBFFA"
    },
    {
        "BudgetCode": "1040248",
        "OrganizationID": "59CB0C6A-6FA3-4D26-9CB6-707E993BD919"
    },
    {
        "BudgetCode": "1032621",
        "OrganizationID": "83FC1540-C8F6-4BBC-8E88-CE95D84300BA"
    },
    {
        "BudgetCode": "1086050",
        "OrganizationID": "BD09FF04-F146-4BB7-9557-D5973A8F2C5E"
    },
    {
        "BudgetCode": "1060635",
        "OrganizationID": "93AB9F08-E2A5-4DAF-8A20-EF7ADF2A27FA"
    },
    {
        "BudgetCode": "1046617",
        "OrganizationID": "258FB4E5-A89C-4BFA-A0A2-8B9D55E5F839"
    },
    {
        "BudgetCode": "1058491",
        "OrganizationID": "88B67343-1873-4661-80F9-2505E70F9E60"
    },
    {
        "BudgetCode": "1014727",
        "OrganizationID": "347D23DA-F7BB-41A2-A1C8-3C3ACFD4AD5A"
    },
    {
        "BudgetCode": "1129141",
        "OrganizationID": "9D137A58-3865-4DFB-B5FD-AED903060F1A"
    },
    {
        "BudgetCode": "1010342",
        "OrganizationID": "EFB45320-A755-49FE-AF07-958858D16D6C"
    },
    {
        "BudgetCode": "1046716",
        "OrganizationID": "BCA4822C-004C-419F-B086-8DE506B053A0"
    },
    {
        "BudgetCode": "1118191",
        "OrganizationID": "2ABD6405-C843-45C7-A4B5-19B5C6E51DCE"
    },
    {
        "BudgetCode": "1039166",
        "OrganizationID": "4FC0A1F8-CD2E-4634-8CC0-982B6D65D13E"
    },
    {
        "BudgetCode": "1104035",
        "OrganizationID": "35088B3A-C511-4054-B950-9B44EA4291AC"
    },
    {
        "BudgetCode": "1127196",
        "OrganizationID": "0030ECB8-F2B1-41B2-98A4-054ED15D7685"
    },
    {
        "BudgetCode": "1060778",
        "OrganizationID": "66C16F60-E4D4-4243-943E-8BC226D62297"
    },
    {
        "BudgetCode": "1040223",
        "OrganizationID": "F1FA269D-096F-4E55-B5D6-69B95B0FB52A"
    },
    {
        "BudgetCode": "1050023",
        "OrganizationID": "BBD3F7AE-5E93-4F69-BFF6-F912EFC53A5E"
    },
    {
        "BudgetCode": "1060634",
        "OrganizationID": "778B49E1-3690-42A4-BC73-F5C447E04718"
    },
    {
        "BudgetCode": "1037384",
        "OrganizationID": "46FADBC5-3093-4EAE-9493-63B15429EE4C"
    },
    {
        "BudgetCode": "1110143",
        "OrganizationID": "2FAFD2DC-2A6E-4354-B8C2-160D745D1347"
    },
    {
        "BudgetCode": "1003701",
        "OrganizationID": "AD431154-C328-43F6-BC0D-7035A3A3F2FC"
    },
    {
        "BudgetCode": "1035494",
        "OrganizationID": "E735D2D9-9FEE-468D-A71C-329A4CE094D5"
    },
    {
        "BudgetCode": "1040247",
        "OrganizationID": "DE4359CD-D808-43F7-8968-0225B9BEE984"
    },
    {
        "BudgetCode": "1060563",
        "OrganizationID": "EC7CA7C2-EED2-423B-8DFE-A8952917AEBF"
    },
    {
        "BudgetCode": "1104505",
        "OrganizationID": "3B8294E1-9E92-4052-9A53-E5F6463CF872"
    },
    {
        "BudgetCode": "1001956",
        "OrganizationID": "BEFF063A-C14B-497F-8E66-B141D12F8C79"
    },
    {
        "BudgetCode": "1060858",
        "OrganizationID": "A6207874-3260-4876-8A5A-09B73C38349C"
    },
    {
        "BudgetCode": "1008063",
        "OrganizationID": "48F7CDE0-CFA1-413C-B6D3-446D6C4CFDEC"
    },
    {
        "BudgetCode": "1071559",
        "OrganizationID": "607816A5-8591-454D-A6E3-D2A6245F99EC"
    },
    {
        "BudgetCode": "1073003",
        "OrganizationID": "70E9B52B-B18C-474C-A7C1-4235F070FEE1"
    },
    {
        "BudgetCode": "1129109",
        "OrganizationID": "56E37CCE-01D9-48AF-9F16-B7D6AC4EE353"
    },
    {
        "BudgetCode": "1058082",
        "OrganizationID": "B2CEABBA-5DEB-4082-A226-F3D5255FF2B3"
    },
    {
        "BudgetCode": "1038540",
        "OrganizationID": "A0CB46D2-6059-4A8F-8AF6-CE007EFF6827"
    },
    {
        "BudgetCode": "1122500",
        "OrganizationID": "F2C1A118-6C75-42FE-95FA-D1BD3274D433"
    },
    {
        "BudgetCode": "1008124",
        "OrganizationID": "113B779E-75FB-4957-A58A-F02FA0110DCD"
    },
    {
        "BudgetCode": "1080927",
        "OrganizationID": "EA6CED89-5FF3-47D5-AA55-35A7174CD7BC"
    },
    {
        "BudgetCode": "1076001",
        "OrganizationID": "45C1A75A-B107-4763-BC20-6A239DA77474"
    },
    {
        "BudgetCode": "1076003",
        "OrganizationID": "6CB6C598-AB07-40A2-BBF1-DA0659E59611"
    }
]
  
  var result = []
  var strResult = ""
  var lastResult =[];

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

        for (let j = 0; j < results.length; ++j){
          results[j]?.result?.map(e=>{
            e.ORG_ID = arrOrg.find(e=>e.BudgetCode==arrBudgetCode[j])?.OrganizationID;
          })
          result = result.concat(results[j]?.result?.filter(e=>e.PHAN_CONG_GIANG_DAY.length>0))
        }

        var strResult = ""
        var lastResult =[];
        for(let i = 0; i < result.length; ++i)
            {
              var temp = result[i]?.PHAN_CONG_GIANG_DAY.map(e=>{
                return {
                  MA_NHAN_SU : result[i].MA_NHAN_SU,
                  ORG_ID : result[i].ORG_ID,
                  MA_KHOI : e.MA_KHOI,
                  SubjectDic : arrSubject.find(sub=>sub.MA_MON_HOC == e.MA_MON_HOC)?.SubjectDic
                }
              })
              lastResult = lastResult.concat(temp?.filter(e=>e.SubjectDic!= undefined))
            }   
       
        // const uniqueRecords = removeDuplicatesByField(lastResult, 'MA_MON_HOC');
        // console.log('uniqueRecords: ',uniqueRecords)
        
        
        lastResult.map(e=>{
          strResult = strResult + "INSERT INTO organizationstatistic(OrganizationID,UserID,UserType,SubjectDictionaryKey,GradeID) VALUE ('" + e.ORG_ID + "','" + e.MA_NHAN_SU + "'," + 1 + "," + e.SubjectDic + "," + e.MA_KHOI  + ")\n"
        })
        console.log('Last result: ',lastResult)

        console.log('Last result by SCRIPT INSERT: ',JSON.stringify(strResult))
        
      })
      .catch(function(error) {
        console.error('Error:', error);
      });
  }, 20000 * i+1000)
}

}


function removeDuplicatesByField(arr, fieldName) {
  const uniqueRecords = [];
  const seenValues = new Set();

  for (const record of arr) {
    const fieldValue = record[fieldName];

    if (!seenValues.has(fieldValue)) {
      uniqueRecords.push(record);
      seenValues.add(fieldValue);
    }
  }

  return uniqueRecords;
}


// Hàm cắt mảng thành các mảng nhỏ
function splitArrayIntoChunks(array,arrBudgetCode) {
  var chunkSize = 40
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