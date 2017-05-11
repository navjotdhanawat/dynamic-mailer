# How to Setup: Dynamic Mailer for sending mail with customized template using handlebar, nodejs,  express.

```
npm install dynamic-mailer --save

```

Steps:
1. Include package 'dynamic-mailer'
2. Create credentials and data object as below.
3. content, header and footer of template should be in 'td' tag.
4. Just call mailer() function.


```javascript

var mailer = require("dynamic-mailer").sendEmail;

var credentials = {
    from: "noreply@domain.com",
    host: "smtp.server.net",
    secureConnection: true,
    port: 465,
    transportMethod: "SMTP",
    auth: {
        user: "noreply@domain.com",
        pass: "**********"
    }
};
var data = {
    from: 'noreply@domain.com',
    to : 'tomail@domain.com',
    subject: 'Mail Subject',
    content: '<td><a href="www.google.com">Its Google</a></td>',
    header: '<td style="color:brown;font-size:22px;border-bottom:2px solid brown"> Its Header </td>',
    footer: '<td style="padding:15px 20px;text-align:center;padding-top:5px;border-top:solid 1px #dfdfdf"> Xxxx xxxx xxxx xxxxx Its footer</td>',
    credentials: credentials
}

mailer(data, function(err, data){
    console.log(data);
    console.log(err);
});

```



## Please let us know if any bug. [Link](https://github.com/navjotdhanawat/dynamic-mailer/issues)