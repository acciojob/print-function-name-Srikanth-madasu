//your JS code here. If required.
function functionName(){
	return alert(arguments.callee.name);
}

function AccioJob(){
	return alert(arguments.callee.name);
}

let a = functionName();
let b = AccioJob();