var request = require("request");

console.log("program started")

var token;

var options = { method: 'POST',
  url: 'https://auth.roblox.com/v2/login',
  headers: 
   { Accept: '*/*',
     'X-CSRF-TOKEN': '',
     'Content-Type': 'application/json',
  },
  body: 
   { "ctype": "Username",
     "cvalue": "ImSecondToo",
     "password": "ImAwesomeToo",
     "fcToken": "5135cf905795d25f2.9086279104|r=ap-southeast-1|metabgclr=transparent|guitextcolor=%23474747|maintxtclr=%23b8b8b8|metaiconclr=transparent|meta=6|lang=en|pk=9F35E182-C93C-EBCC-A31D-CF8ED317B996|at=30|rid=95|ht=1|atp=2|cdn_url=https://cdn.arkoselabs.com/fc|lurl=https://audio-ap-southeast-1.arkoselabs.com|surl=https://roblox-api.arkoselabs.com",
     "credentialsType": "Username",
     "credentialsValue": "ImSecondToo" },
  json: true };

var sendReq= function(log, responseLog, bodyLog) {
  request(options, function(error, response, body) {
    console.log(log);
    if(error) throw new Error(error);
    if(responseLog===true) {
      console.log(response);
    }
    if(bodyLog===true) {
      console.log(body);
    } 
    console.log("Response Status Code: " + JSON.parse(JSON.stringify(response)).statusCode);
  });
};
request(options, function (error, response, body) {
  console.log("Login Request Initiated(Getting Token...)")
  if (error) throw new Error(error);
  console.log(body);

  token=JSON.parse(JSON.stringify(response)).headers['x-csrf-token'];
  options.headers['X-CSRF-TOKEN']=token;
  console.log("Auth Token: "+token);

  sendReq("Login Request Initiated(Sending Token...)", false, true);

  options.method="POST";
  options.url="https://captcha.roblox.com/v1/funcaptcha/login/web";
  //This is the correct request
  //fcToken needs to be correct for captcha to pass
  //find way to get fcToken
  //way to get token: try every token possible
  sendReq("Skipping Robot Verification(1)...", false, true);

  /*options.method="GET";
  options.url="https://ecsv2.roblox.com/www/e.png?solveDuration=9844&success=true&provider=FunCaptcha&session=1285cf49aea1c1dd4.4131916704%7Cr%3Dap-southeast-1%7Cmetabgclr%3Dtransparent%7Cguitextcolor%3D%2523474747%7Cmaintxtclr%3D%2523b8b8b8%7Cmetaiconclr%3Dtransparent%7Cmeta%3D6%7Clang%3Den%7Cpk%3D9F35E182-C93C-EBCC-A31D-CF8ED317B996%7Cat%3D30%7Csup%3D1%7Crid%3D89%7Cht%3D1%7Catp%3D2%7Ccdn_url%3Dhttps%3A%2F%2Fcdn.arkoselabs.com%2Ffc%7Clurl%3Dhttps%3A%2F%2Faudio-ap-southeast-1.arkoselabs.com%7Csurl%3Dhttps%3A%2F%2Froblox-api.arkoselabs.com&evt=captcha&ctx=Login&url=https%3A%2F%2Fwww.roblox.com%2F&lt=2019-06-03T03%3A58%3A39.409Z&gid=-1330133374";
  sendReq("Skipping Robot Verification(2)...", false , true);
*/
  options.method="POST";
  options.url="https://auth.roblox.com/v2/login";
  sendReq("Testing Login...", false, false);
/*
  request(options, function(error, response, body) {
    console.log("Login Request Initiated(Sending Token...)")
    if(error) throw new Error(error);
    console.log(body);
    
    options.url="https://captcha.roblox.com/v1/funcaptcha/login/web";
    request(options, function(error, response, body) {
      console.log("(Skipping Robot Verification...)")
      if(error) throw new Error(error);
      console.log(response);
      console.log("Verification Skipped Status:"+JSON.parse(JSON.stringify(response)).statusCode);
      console.log(body);

      options.method="GET";
      options.url="https://ecsv2.roblox.com/www/e.png?solveDuration=9844&success=true&provider=FunCaptcha&session=1285cf49aea1c1dd4.4131916704%7Cr%3Dap-southeast-1%7Cmetabgclr%3Dtransparent%7Cguitextcolor%3D%2523474747%7Cmaintxtclr%3D%2523b8b8b8%7Cmetaiconclr%3Dtransparent%7Cmeta%3D6%7Clang%3Den%7Cpk%3D9F35E182-C93C-EBCC-A31D-CF8ED317B996%7Cat%3D30%7Csup%3D1%7Crid%3D89%7Cht%3D1%7Catp%3D2%7Ccdn_url%3Dhttps%3A%2F%2Fcdn.arkoselabs.com%2Ffc%7Clurl%3Dhttps%3A%2F%2Faudio-ap-southeast-1.arkoselabs.com%7Csurl%3Dhttps%3A%2F%2Froblox-api.arkoselabs.com&evt=captcha&ctx=Login&url=https%3A%2F%2Fwww.roblox.com%2F&lt=2019-06-03T03%3A58%3A39.409Z&gid=-1330133374";
      request(options, function(error,response,body) {
          console.log("(Testing...)");
          if (error) throw new Error(error);
          console.log(response);
          console.log(body);
      });      
    });
  
  });*/
  
});