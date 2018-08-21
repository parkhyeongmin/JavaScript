var Links = {
  setColor:function (color){
    var links = document.querySelectorAll('a');
    var i =0;
    while(i<links.length){
      links[i].style.color=color;
      i=i+1;
    }
  }
}

var Body = {
  setColor:function (color){
   document.querySelector('body').style.color= color;
 },
  setBackgroundColor:function (color){
    document.querySelector('body').style.backgroundColor = color;
  }
}


<!-- 위에는 아래 함수를 간략하게 만들기 위한 정리 -->

function nightDayHandler(self){
if(self.value === 'day'){
  Body.setBackgroundColor('white');
  Body.setColor('black');
  self.value='night';

  Links.setColor('red');
}
else {
  Body.setBackgroundColor('black');
  Body.setColor('white');
  self.value = 'day';

  Links.setColor('powderblue');
  }
}
