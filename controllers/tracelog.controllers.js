const fs = require('fs');

exports.saveError = function(req, res){
	let errorString = "";
		const errorDate = new Date();
		errorDateString =   errorDate.getHours() + ":" +  errorDate.getMinutes() + ":" + errorDate.getSeconds() + ":" + errorDate.getMilliseconds();
		errorDateString  += " " + errorDate.getDate() + "/"  + errorDate.getMonth() + "/" + errorDate.getYear();
		errorString = "Error:  " + req.body.errorName.toString() + "  " + req.body.errorFile.toString() + "  " + req.body.errorLine + "  " + errorDateString + "\n";
		console.log(errorString);
		fs.appendFile(`./errors/${req.body.errorFolder}.txt`, errorString, function(err){
			if(err) console.log(err);
		});
}
