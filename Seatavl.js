function ABC()
{

    var station = document.getElementById('text1').value;
      var url='https://api.railwayapi.com/v2/arrivals/station/'+station+'/hours/4/apikey/ 27nkbthv3y/'
     console.log(url);
     var xhr=new XMLHttpRequest();

     xhr.open('GET',url);
     xhr.setRequestHeader('Access-Control-Allow-Origin','*')
     xhr.onreadystatechange=test;

     xhr.send();
}


   function test(){
          var res=document.getElementById("res").style.display="block";

     document.getElementById('table').style.display="table";
     var table = document.getElementById('table');
 
       if(this.status==200 && this.readyState==4)
       {
           var responseData=JSON.parse(this.responseText)
           console.log(responseData);
            for(var i=0;i<responseData.trains.length;i++)
           {
             var tr = document.createElement('tr');
                 var name = document.createElement('td');
                 var number = document.createElement('td');
                 var aa = document.createElement('td');
                 var ad = document.createElement('td');
                 var sa = document.createElement('td');
                 var sd = document.createElement('td');
                   aa.innerHTML = responseData.trains[i].actarr;
                   ad.innerHTML = responseData.trains[i].actdep;
                   sa.innerHTML = responseData.trains[i].scharr;
                   sd.innerHTML = responseData.trains[i].schdep;
                   name.innerHTML = responseData.trains[i].name;
                   number.innerHTML = responseData.trains[i].number;

                 tr.appendChild(number);
                 tr.appendChild(name);
                 tr.appendChild(aa);
                 tr.appendChild(ad);
                 tr.appendChild(sa);
                 tr.appendChild(sd);
                 table.appendChild(tr);
           }
             
       }

   }
