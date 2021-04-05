function tz() {
	var txt = document.getElementById('htext').value;
	if (txt != "") {
		if (txt.indexOf(".com") > 0) {
			alert('请输入商品名称搜索！');
		}else {
			window.location.href = "https://zuihuitao.cn/index.php/cate/k/" + toutf(txt);
		}
	}else{
		document.getElementById("htext").focus();
	}
    
}
function onkey(){
	if (window.event.keyCode==13)
	 {
	 	tz();
	 	return false;
	 }
}

window.onload=function(){ 
  try {
    if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)))
    {
        chgview();//手机
    }
  }
  catch(err)
  {
  }
} 
function chgview(){

  var wth = document.body.offsetWidth-50;
  document.getElementById("ss").style.width=wth + "px";
  document.getElementById("htext").style.width=wth*0.8 + "px";
  document.getElementById("btn").style.width=wth*0.2 + "px";
  document.getElementById("shuoming").style.width=wth+20 + "px";
}

function toutf(s1)   {       
var s = escape(s1);       
var sa = s.split("%");       
var retV ="";       
if(sa[0] != "")       
{          
retV = sa[0];       
}       
for(var i = 1; i < sa.length; i ++)       
{            if(sa[i].substring(0,1) == "u")           
 {                retV += Hex2Utf8(Str2Hex(sa[i].substring(1,5)));                            }            
 else retV += "%" + sa[i];       }              return retV;   }   
 
 function Str2Hex(s)   {       var c = "";       var n;       var ss = "0123456789ABCDEF";       
 var digS = "";       for(var i = 0; i < s.length; i ++)       {          c = s.charAt(i);          n = ss.indexOf(c);          digS += Dec2Dig(eval(n));                   }       
 //return value;      
  return digS;   
  }   
  function Dec2Dig(n1)   
  {       var s = "";       
  var n2 = 0;       
  for(var i = 0; i < 4; i++)       {          n2 = Math.pow(2,3 - i);          
  	if(n1 >= n2)          {             s += '1';             n1 = n1 - n2;           }          
  	else           s += '0';                  }       return s;          }   
  function Dig2Dec(s)   {       
  		var retV = 0;       if(s.length == 4)       {           for(var i = 0; i < 4; i ++)           {               
  			retV += eval(s.charAt(i)) * Math.pow(2, 3 - i);           }           return retV;       }       return -1;   
  		}    
  function Hex2Utf8(s)   {      var retS = "";      var tempS = "";      var ss = "";      
  if(s.length == 16)      {          tempS = "1110" + s.substring(0, 4);          tempS += "10" +  s.substring(4, 10);           
  tempS += "10" + s.substring(10,16);           var sss = "0123456789ABCDEF";          for(var i = 0; i < 3; i ++)          {             retS += "%";             ss = tempS.substring(i * 8, (eval(i)+1)*8);                                                    retS += sss.charAt(Dig2Dec(ss.substring(0,4)));             retS += sss.charAt(Dig2Dec(ss.substring(4,8)));          }          return retS;      }      return "";   }
        
        
        
        