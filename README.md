# roblox-LoginCat
Attempts to mimic back-end login system of Roblox.
<br><br>

### Clearing Up Misconceptions:
- This is **NOT** an attempt to build a hacking tool.
- This is not built with any malicious intentions, and is **purely for my own educational purposes**.

### Experiment Status: 
#### :x: Failed.
- ***Reason:*** Robot Verification was not successful
- **This project is not being maintained**
<br>

## Prerequisites:
- Node JS
- Node Modules:
  - request
  
## Fruits of research:
### This is how the login system of roblox works:
1. Token Validation Steps:
    - Login request is sent.
    - Response to this request has *'X-CSRF Token'* in it. But response says 'Token Validation Failed'.
    - Login request sent with token header that was recieved in the previous response.
    - Token Validation Successful.
2. Robot Verification Steps:
    - Request sent to **https://captcha.roblox.com/v1/funcaptcha/login/web** for captcha with *'fctoken' header*. This fctoken means funcaptcha token which is for robot verification. It is different from 'X-CSRF Token'.
    - Robot verification fails since fctoken cannot be predicted.<br>

***Sidenote:*** Roblox's robot verification system is managed by a company called Arkose Labs.

### These are characteristics of fctokens:

- They look like this:
```
"fcToken":"5135cf905795d25f2.9086279104|r=ap-southeast-1|metabgclr=transparent|guitextcolor=%23474747|maintxtclr=%23b8b8b8|metaiconclr=transparent|meta=6|lang=en|pk=9F35E182-C93C-EBCC-A31D-CF8ED317B996|at=30|rid=95|ht=1|atp=2|cdn_url=https://cdn.arkoselabs.com/fc|lurl=https://audio-ap-southeast-1.arkoselabs.com|surl=https://roblox-api.arkoselabs.com"
```

- However, only the first few alphanumerics change in each token.<br>
```5135cf905795d25f2.9086279104``` is the part which actually  matters in the above example of an fctoken.
<br>

