var allQuestions = [
 
    {
      question: "The first world cup,which was played underlights in",
      choices: ["1983","1992","1996","1999"],
      correctAnswer: 2
    },
    {
      question: "The name of the cricket world cup 1996 was",
      choices: ["Wills world cup","Benson and Hedges world cup","Reliance cup","Prudential cup"],
      correctAnswer: 1
    },
    {
      question: "India hosted their first world cup in",
      choices: ["1983","1987","1992","2011"],
      correctAnswer: 2
    },
    {
      question: "The australian captain to win the cricket world cup for the first time was",
      choices: ["Steve Waugh","Allan Border","Ricky Ponting","Michel Clarke"],
      correctAnswer: 2
    },
    {
      question: "The country that was beaten by Pakistan in the 1992 world cup final was",
      choices: ["England","Australia","India","Newzeland"],
      correctAnswer: 1
    },
    {
      question:"India faced Pakistan first time in the world cup in",
      choices: ["1987","1996","2003","1992"],
      correctAnswer: 4
    },
    {
      question: "Brian Lara played his last match of his career in the world cup 2007 against",
      choices: ["England","Pakistan","Australia","Newzeland"],
      correctAnswer: 1
    },
    {
      question: "The decision review system  was first used in the world cup in",
      choices: ["2007","2003","2011","2015"],
      correctAnswer: 3
    },
    {
      question: "The first tie in a cricket world cup final was in",
      choices: ["2011","2015","2019","2007"],
      correctAnswer: 3
    },
    {
      question: "The country that won the world cup most number of times is",
      choices: ["England","West Indies","India","Australia"],
      correctAnswer: 4
    }
];
  var count=0;
  var score=0;
  if(count==0){
    displayNext();
  }
  
  
  function displayNext(){
    if(count==10){
      document.getElementsByClassName("container")[0].innerHTML="";
      document.getElementById("title").innerHTML="Score:"+score;
    }
    else{
      document.getElementById("submit").style.backgroundColor="blue";
    document.getElementById("correct").style.display="none";
    document.getElementById("incorrect").style.display="none";
    document.getElementById("submit").setAttribute("onclick","Next()");
    
    addQues();
    addAns();
    removeDisabled();
    
    }
  }
  function addQues(){
    var currQuestion=document.getElementById("question").innerHTML= allQuestions[count].question;
  }
  function addAns(){
    var checkbox=document.getElementsByTagName("input");
    var label=document.getElementsByTagName("label");
    
    for(var i=0;i<4;i++)
      {
        label[i].innerHTML= allQuestions[count].choices[i];
        checkbox[i].setAttribute("value",i+1);
        
      }
  }
  function Next(){
    
   var options=document.getElementsByTagName("input");
    for(var i=0;i<4;i++){
      options[i].setAttribute("disabled","true");
      if(options[i].checked){
        if(options[i].value==allQuestions[count].correctAnswer){
          document.getElementById("correct").style.display="block";
          score++;
        }
        else{
          document.getElementById("incorrect").style.display="block";
          
          
        }
      }
    
      
      
    }
     var btn = document.getElementsByTagName("button")[0];
      btn.innerHTML="Next";
       btn.style.backgroundColor="blue";
    
      btn.setAttribute("onclick","displayNext()");//Disables all the check boxes and checks if the answer is correct
  
    count++;
  }
  function removeDisabled(){
    var options=document.getElementsByTagName("input");
    for(var i=0;i<4;i++){
      options[i].removeAttribute("checked");
      options[i].removeAttribute("disabled");
    }
  }