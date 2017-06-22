function fun()
{
  
  var l = document.getElementById('length').value;
  var w = document.getElementById('width').value;
  var g = document.getElementById('GSM').value;
  var cal1 = document.getElementById('cal1');
  var cal2 = document.getElementById('cal2');

 if (l && w && g)
 {
    
    cal1.style.display  = 'inline-block';
 } 
 else
 {
   cal1.style.display  = 'none';
 }

  var l = document.getElementById('length').value;
  var w = document.getElementById('width').value;
  var wt = document.getElementById('weight').value;
  
  if (l && w && wt)
 {
    
    cal2.style.display  = 'inline-block';
 } 
 else
 {
   cal2.style.display  = 'none';
 }


}


// function func1()
// {
//   var l = document.getElementById('length').value;
//   var w = document.getElementById('width').value;
//   var g = document.getElementById('GSM').value;
  
//   if (l && w && g)
//   {
//     var wt = document.getElementById('weight');

//   wt.value = eval(l)+eval(w)+eval(g);
//   wt.value = wt.value.toFixed(2);

//   }

//   else
//   {
//     //alert('can not');
//   }

// }

function func1()
{
  var l = document.getElementById('length').value;
  var w = document.getElementById('width').value;
  var g = document.getElementById('GSM').value;
  
  if (l && w && g)
  {
    var wt = document.getElementById('weight');

    var calculate = eval(l)*eval(w)*eval(g)/3100;

    wt.value = calculate.toFixed(2);

  }

  else
  {
   //p.inner
  }

}

function func2()
{
  var l = document.getElementById('length').value;
  var w = document.getElementById('width').value;
  //var g = document.getElementById('GSM').value;
  var wt = document.getElementById('weight').value;

  if (l && w && wt)
  {
    var g = document.getElementById('GSM');
    

  var calculate = (eval(wt)*3100)/(eval(l)*eval(w));
  g.value = calculate.toFixed(2);
  }

  else
  {
    //alert('can not');
  }

}