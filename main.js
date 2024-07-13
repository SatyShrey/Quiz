var qna=[['What is the currency of Japan?','Yen','Dollar','Dirham','Yuan'],
        ['In which year the Titanic sink?','1912','1920','1890','1812'],
        ['What is the largest mammal in the world?','Elephant','Blue whale','Tiger','Giraffe'],
        ['Which continent is known as the dark continent?','Africa','USA','Brazil','Russia'],
        ['In share market what do the "bull" represent?','Downward trend','Upward trend','Both','None of the above.'],
        ['Which is the oldest existing news paper in India?','Lokmat','Sandesh','The Hindu','Bombay Samachar'],
        ['Which state of India is called the Botanist paradise?','Uttar Pradesh','Rajasthan','Sikkim','Goa'],
        ['In which city can you find the river Thames?','London','Tokyo','Paris','New York'],
        ['Who is the first winner of Param Vir Chakra?','Rama Raghoba Rane','Somnath Sharma','Karam Singh','Jadunath Singh'],
        ['Choose an appropriate word for the picture below?<br><img src="/eth.jpg" alt="img">','Gold','Cryptocurrency','Bitcoin','None of the above.']];
        //qna array containing all quations and answers...........................................................
        var n=0;var sec=30; var count; var score=0;var select='not selected';
        var ans=['a','a','b','a','b','d','c','a','b','b'];//array for right answers..........................
        var dt=document.querySelector('dt');
        var opt1=document.querySelector('.option1');
        var opt2=document.querySelector('.option2');
        var opt3=document.querySelector('.option3');
        var opt4=document.querySelector('.option4');
        var section0=document.querySelector('.section0');
        var section1=document.querySelector('.section1');
        var section2=document.querySelector('.section2');
        var ol=document.getElementById('list');
        function start(){//start button.......................................................
            next();
            section2.innerHTML=`<button style='background-color: rgb(62, 140, 250);' onclick='next()'>Next</button>`;
        }
        function next(){clearInterval(count);sec=30;//next button..................................................................
           
           if(ans[n-1]){
            //rA();
            if(document.getElementById(ans[n-1]).checked){
            score++;
        }}
           if(n===(qna.length-1)){section2.innerHTML=`<button style='background-color: purple;' onclick='submit()'>Submit</button>`;}
            if(qna[n]){
                dt.innerHTML=`Q${n+1}.${qna[n][0]}`;
            opt1.innerHTML=`a.<input name='o'+${n} class='opt' id='a' type='radio'><label class='a'>${qna[n][1]}</label>`;
            opt2.innerHTML=`b.<input name='o'+${n} class='opt' id='b' type='radio'><label class='b'>${qna[n][2]}</label>`;
            opt3.innerHTML=`c.<input name='o'+${n} class='opt' id='c' type='radio'><label class='c'>${qna[n][3]}</label>`;
            opt4.innerHTML=`d.<input name='o'+${n} class='opt' id='d' type='radio'><label class='d'>${qna[n][4]}</label>`;
            n++;
            
            count=setInterval(()=>{section0.innerHTML=`<span>Time left:</span>&nbsp;<div>${sec}</div><span>&nbsp;sec</span>`;sec--;
                if(sec==-1 && n===qna.length-1){submit();}
                if(sec===-1){clearInterval(count);next();}
            },1000);}else if(!n){submit()}
        }
        function submit(){ //submit button.................................................................
            if(document.getElementById(ans[n-1]).checked){
            score++;

        }
            clearInterval(count);
            section0.innerHTML='';
            section1.innerHTML='';
            section2.innerHTML=`Your score is ${score}<br><br><button style='background-color: red;' onclick=exit()>Exit</button>`;
        }

        function rA(){
            var li=document.createElement('li');
            var right;
            if(ans[n-1]=='a'){right=1}else if(ans[n-1]=='b'){right=2}
            else if(ans[n-1]=='c'){right=3}else if(ans[n-1]=='d'){right=4}

            document.addEventListener('click',(e)=>{
                if(e.target.className==='opt'){
                    select=document.querySelector(`.${e.target.id}`).innerHTML;
                }
            })

            li.innerHTML=`Question: ${qna[n-1][0]}<br>
            Options(${qna[n-1][1]},${qna[n-1][2]},${qna[n-1][3]},${qna[n-1][4]})
            <br>Right answer: ${qna[n-1][right]}<br>You have selected: ${select}`;

            if(select==='not selected'){li.style.color='grey';}
            else if(qna[n-1][right]===select){li.style.color='green';}
            else{li.style.color='red';}

            ol.appendChild(li);select="not selected";
        }
        

        function exit(){//exit button...........................................................................
            window.close();
            location.reload();
        }