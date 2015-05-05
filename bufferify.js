
var through = require('through2');
var path = require('path');

module.exports = function (file, opts) {
	var exts = opts._;
	if (exts.length === 0) {
		return through();
	}
	if (exts.indexOf(path.extname(file)) === -1) {
		return through();
	}
	return through(function (buf, enc, next) {
		var b = buf.toString('base64');
		b = 'var Buffer = require("buffer").Buffer;module.exports = new Buffer("'+b+'", "base64");'
		this.push(b);
		next();
	});
};

