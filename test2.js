 // var a =parseInt(prompt("enter the value"))
  // var b=1
  // for(i=a; i>=1; i--){
       // b=b*i
	  // }
	  // document.write(b)
	 
	 // var a=prompt('enter the number')
	 // var b=0
// for(i=a; i>0; i--){
	// document.write(b=i)
	// document.write("<br>")
// }
 // var a=prompt('Enter the number')
 // var b=0
 // for(i=1; i<=a; i++){
			// document.write(b=a*i)	
			// document.write("<br>")
			// }
 
// var a=prompt('enter the number')
// for(i=1; i<=a; i++){
    // if(a/i){
     // document.write(" a is the primenumber")
	// }
// }
// var number = parseInt(prompt("Enter a positive number: "));
// var isPrime = true;
// if (number === 1) {
    // document.write("1 is neither prime nor composite number.");
// }

// else if (number > 1) {
    // for (let i = 2; i < number; i++) {
        // if (number % i == 0) {
            // isPrime = false;
            // break;
        // }
    // }

    // if (isPrime) {
        // console.log(`${number} is a prime number`);
    // } else {
        // document.write(`${number} is a not prime number`);
    // }
// }
// else {
    // document.write("The number is not a prime number.");
// }
 var a=parseInt(prompt("Enter the value"))
 var prime=true
 if(a===1){
	 document.write("it is not a prime and composite")
 }
 else if(a>1){
	  for(i=2; i<a; i++){
		  if(a%i==0){
			  prime=false;
			  break;
		  }
	  }
		  if(prime){
			  document.write(`${a}it is  prime number`)
		  }
		  else{
			 document.write(`${a}it is not  a prime number`)
		  }
		  
	  
 }	  
 else{
    document.write("it is whole number")
 }	
		  