var Headers = ["Number","Caller","Short Desc","Assignment Group", "Assigned To"];
var fileName = 'Incidents.csv';
var csvData = ''; //The variable csvData will contain a string which is used to build the CSV file contents
for (var i = 0; i < Headers.length; i++) { //Build the Headers
	csvData = csvData + '"' + Headers[i] + '"' + ',';
}
csvData = csvData+"\r\n";

var gr = new GlideRecord("incident");
gr.addActiveQuery();
gr.query();
while(gr.next()) {
	csvData = csvData + '"' + gr.number + '",' + '"' + gr.caller_id.getDisplayValue() + '",' + '"' + gr.short_description+'",' + '"' + gr.assignment_group.getDisplayValue() + '",' + '"' + gr.assigned_to.getDisplayValue() + '"';
	csvData = csvData+"\r\n";
}

//attach the file to a record.
var grRec = new GlideRecord("incident");
grRec.addQuery("sys_id","6c9b1b7fdb9bff004caea386059619d8");
grRec.query();
if(grRec.next()){
	var grAttachment = new GlideSysAttachment();
	grAttachment.write(grRec, fileName, 'application/csv',csvData);
}
