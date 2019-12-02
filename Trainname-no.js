function ABC()
{
  var x=document.getElementById('text1').value;
  console.log(x);
     var url = 'https://api.railwayapi.com/v2/name-number/train/'+x+'/apikey/rj12iydh05/'
     var xhr=new XMLHttpRequest();
     xhr.open('GET',url);
     xhr.onreadystatechange=test;

     xhr.send();
}


   function test(){
      var res=document.getElementById("res").style.display="block";
      var table = document.getElementById('table1').style.display="table";
      var t=document.getElementById('table1');
     
      var tr = document.createElement('tr');
       if(this.status==200 && this.readyState==4)
       {
           var responseData=JSON.parse(this.responseText)
           var name = document.createElement('td');

           var no = document.createElement('td');
           var classes = document.createElement('td');
           var days = document.createElement('td');
           name.innerHTML = responseData.train.name;
           no.innerHTML = responseData.train.number;
           for(var i=0;i<responseData.train.classes.length;i++)
           {
             if(responseData.train.classes[i].available != "N")
               classes.innerHTML = classes.innerHTML + responseData.train.classes[i].name+`<br>`;
           }
           for(var i=0;i<responseData.train.days.length;i++)
           {
             if(responseData.train.days[i].run != "N")
               days.innerHTML = days.innerHTML + responseData.train.days[i].code+`<br>`;
           }
           tr.appendChild(no);
           tr.appendChild(name);
           tr.appendChild(classes);
           tr.appendChild(days);
       }
       t.appendChild(tr);
 
       

   }