'use strict';

angular.module('starlab.controllers', [])

.controller('IndexController', ['$scope', function($scope){

}])

.controller('BiradController', ['$scope', function($scope){

}])

.controller('BiradTrainController', ['$scope', function($scope){
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

    function display_dt_1(){
      $('#dataset-desc-2').css('display','none');
      $('#dataset-desc-1').css('display','');
    }

    function display_dt_2(){
      $('#dataset-desc-1').css('display','none');
      $('#dataset-desc-2').css('display','');
    }
}])

.controller('BiradkController', ['$scope', function($scope){

}])

.controller('ContactController', ['$scope', function($scope){

}])

.controller('TeamController', ['$scope', function($scope){

}]);
