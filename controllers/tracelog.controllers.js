const fs = require('fs');

exports.saveError = function(req, res){
	const error  = req.body;
	let errorString = "";
	if(error.errorName != undefined && error.errorType != undefined && error.errorFile != undefined && error.erroLine != undefined && errorFolder != undefined){
		const errorDate = new Date();
		errorDateString =   errorDate.getHours() + ":" +  errorDate.getMinutes() + ":" + errorDate.getSeconds() + ":" + errorDate.getMilliseconds();
		errorDateString  += " " + errorDate.getDate() + "/"  + errorDate.getMonth() + "/" + errorDate.getYear();
		errorString = "Error:  " + error.errorName + "  " + error.errorType + "  " + error.errorFile + "  " + error.errorLine + "  " + errorDateString + "\n";
		fs.appendFile(`../errors/${error.errorFolder}.txt`, errorString, function(err){
			if(err) throw err;
		});

		res.send({message:'ok'})
		console.log('ok')
	}else{
		res.send({message:'Undefined request'});
	}
}
