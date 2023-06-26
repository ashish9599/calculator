var show="";
// console.log(string)


var button=document.getElementsByClassName('button');
// console.log('working')
var display=document.querySelector("#display");
for(var i=0;i<button.length;i++){
    button[i].addEventListener('click',  handleclick) 
}


function handleclick(e){
  const text=e.target.innerHTML;
  //  console.log(text);
  if(text=='='){
   try{
     const ans=eval(show);
     display.value=ans;
     show="";
   }catch{
      alert("Please Enter valid expression");
   }
}else if(text=='AC'){
  display.value="";
  show="";
 }else  if(text=='C'){
  const afterdelete=  display.value.toString().slice(0,-1);
//  console.log(show);
  display.value=afterdelete;
 show=afterdelete;
 }
else 

{
    show=show+text;
    display.value=show;
 }

}