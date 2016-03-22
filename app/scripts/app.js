'use strict';
$(document).ready(function(){
  var transitionTime = 500;
  var maxIterations = 10;
  var text = ['Setting up initial model parameters...', 'Starting Model Training...'];
  var iterConst = 'iteration ';
  for(var i=1;i<=maxIterations;++i){
    text.push(iterConst+i+'...');
  }
  text.push('Training Complete !');
  text.push('Evaluating Test Data...');
  text.push('Here are your Test Results');

  function transitionText(index){

    //load inner html
    $('#transitText').html(text[index]);
    //fade in
    $('#transitText').fadeTo(transitionTime,1, function(){
      if(index<(text.length-1)){
        $('#transitText').fadeTo(transitionTime,0,function(){
          if((++index)<text.length){
            transitionText(index);
          }
        });
      }else{
        $('#test-results').fadeTo(transitionTime,1);
        $('#export-btn').fadeTo(transitionTime,1);
      }
    });
  }
  transitionText(0);
});
