function go(){
	let arr=[2,3,4,5,6]
	var sum=0;
	
	for (var number of arr){
		sum+= number;
	}
	console.log(sum);
	average=sum/arr.length;
	console.log(average);
	
	document.getElementById("array").innerHTML=arr+", "
	document.getElementById("sum").innerHTML="Sum: "+sum
	document.getElementById("average").innerHTML="Mean: "+average
}
