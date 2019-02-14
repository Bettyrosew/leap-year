var year=parseInt(prompt('Enter year'));
var mod1=year%4;
var mod2=year%100;
var mod3=year%400;
if (mod2==0){
  if (mod3==0){
    alert(year + ' is a leap year')
  }else{
    alert(year + ' is not a leap year')
  }
}else if (mod1==0) {
      alert(year + ' is a leap year')
}else{
      alert(year + ' is not a leap year')
}
