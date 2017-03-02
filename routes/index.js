'use strict'

var formidable   = require('formidable');
var path         = require('path')

module.exports = function(app) {
    app.route('/').get(function(req, res){
        res.sendFile(path.resolve('public/index.html'));
    });

    app.post('/file-upload', function(req, res, next) {
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            var size = JSON.stringify(files.fileUploaded.size);
            res.send({ size: size })
        });
    });
}