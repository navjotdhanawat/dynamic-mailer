/**
 * dymanic-mailer
 *
 *
 * Copyright (c) 2017 Navjot Dhanawat
 * Licensed under the MIT license.
 */

/**
 * Send mail using nodejs with custom handlebar template.
 *
 * @param  {options}
 * @return {callback}
 */

var fs = require('fs'),
    path = require('path'),
    nodemailer = require('nodemailer'),
    Handlebars = require('handlebars');

var source = fs.readFileSync(path.join(__dirname, 'template/template.hbs'), 'utf8');
var template = Handlebars.compile(source);

var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');


var sendEmail = function (data, callback) {
    var transporter = nodemailer.createTransport(data.credentials);

    var options = {
        from: data.from,
        to: data.to,
        subject: data.subject,
        html: template(data)
    };
    transporter.sendMail(options, function (err, data) {
        if (data) {
            callback({ status: 1, data: data });
        } else {
            callback({ status: 0, data: err });
        }
    });
}

module.exports.sendEmail = sendEmail;