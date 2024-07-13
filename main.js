var qna=[['What is the currency of Japan?','Yen','Dollar','Dirham','Yuan','a'],
        ['In which year the Titanic sink?','1912','1920','1890','1812','a'],
        ['What is the largest mammal in the world?','Elephant','Blue whale','Tiger','Giraffe','b'],
        ['Which continent is known as the dark continent?','Africa','USA','Brazil','Russia','a'],
        ['In share market what do the "bull" represent?','Downward trend','Upward trend','Both','None of the above.','b'],
        ['Which is the oldest existing news paper in India?','Lokmat','Sandesh','The Hindu','Bombay Samachar','d'],
        ['Which state of India is called the Botanist paradise?','Uttar Pradesh','Rajasthan','Sikkim','Goa','c'],
        ['In which city can you find the river Thames?','London','Tokyo','Paris','New York','a'],
        ['Who is the first winner of Param Vir Chakra?','Rama Raghoba Rane','Somnath Sharma','Karam Singh','Jadunath Singh','b'],
        ['Choose an appropriate word for the picture below?<br><img src="/eth.jpg" alt="img">','Gold','Cryptocurrency','Bitcoin','None of the above.','b']];
        //qna array containing all quations and answers...........................................................
        var n=0;var sec=30;var marks=0;var timeout;
        var dl=document.querySelector('dl');
        var list=document.getElementById('list');
        var section1=document.getElementById('section1');
        var section0=document.getElementById('section0');
        var section2=document.getElementById('section2');
        var selected='';
        function start(){//start button.......................................................
            
            createDl();

            section2.innerHTML=`<button id='next' onclick='next()'>Next</button>`;
        }
        
        function createDl(){
            clearInterval(timeout);
            dl.innerHTML=`<dt>Q${n+1}.${qna[n][0]}</dt>
            <dd>a.<input name='opt' id='a' type='radio'><span class='a'>${qna[n][1]}</span></dd>
            <dd>b.<input name='opt' id='b' type='radio'><span class='b'>${qna[n][2]}</span></dd>
            <dd>c.<input name='opt' id='c' type='radio'><span class='c'>${qna[n][3]}</span></dd>
            <dd>d.<input name='opt' id='d' type='radio'><span class='d'>${qna[n][4]}</span></dd>`;
            if(n===qna.length-1){section2.innerHTML=`<button id='submit' onclick='next()'>Submit</button>`;}
            timeout=setInterval(()=>{section0.innerHTML=`<div><span>Time Left:&nbsp;</span><div>${sec}</div><span>&nbsp;sec</span></div>`; sec--; if(sec===-1){
                next();
            }},1000)
        }

        function next(){
            var selected='none';
            var all=document.querySelectorAll(['input']);
            for(var i=0;i<=3;i++){
                if(all[i].checked){
                  selected=all[i].id;
                }
            }
            var right=document.getElementById(qna[n][5]);
            var color='red';
            var tik='&#10008;';
            if(selected===right.id){
                color='green';tik='&#10004;';
            }else if(selected==='none'){
                color='grey';tik='---';
            }

            var div=document.createElement('div');
            div.setAttribute('class','div');
            div.style.color=color;
            div.innerHTML=`
    <div><div class='Q'>Q${n+1}.${qna[n][0]}</div>
      <table class='opn'>
          <tr><td class='td1'>Options:</td><td></td></tr>
          <tr><td>a)${qna[n][1]}</td><td>b)${qna[n][2]}</td></tr>
          <tr><td>c)${qna[n][3]}</td><td>d)${qna[n][4]}</td></tr>
      </table>
      <div class='right'>Right answer: ${qna[n][5]}</div>
   </div>
   <div style='color:${color}'>
    <div>Your selection:${selected}</div>
    <div class='tik'>${tik}</div>
  </div>`;

            list.appendChild(div);

            if(right.checked){
                marks++;
            }
            n++;sec=30;
            if(n<qna.length){createDl();}
            else{clearInterval(timeout);section1.innerHTML='';
                section2.innerHTML=`<div class='score'>Your score is <div>${marks}</div></div><span class='feed'>Quiz feedback</span>`;
                list.style.display=`block`;
            }
        }