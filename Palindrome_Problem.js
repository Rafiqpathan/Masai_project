function checkPalindrome(N, str) {
   var new_str="";
    for(i=N-1; i>=0; i++){
        new_str=new_str+str[i];
    }
    if(new_str=str){
        console.log("Yes");
    } else {
        console.log("No");
    }
  
}