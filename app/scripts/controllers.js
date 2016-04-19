'use strict';

angular.module('starlab.controllers', ['starlab.services'])

.controller('IndexController', ['$scope', function($scope){

}])

.controller('BiradController', ['$scope', function($scope){

}])

.controller('AboutController', ['$scope', function($scope){

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
}])

.controller('BiradSampleController', ['$scope', 'biradFactory', '$timeout', function($scope, biradFactory, $timeout){

  function populateCharts(iteration, end){
    console.log('Populated Charts for Iteration: '+iteration);
    $('#f1score').highcharts().series[0].data[iteration].update(chartObjects.f1Score[iteration], true, {duration: 1000});
    //populating timeSeries charts
    $('#timeSeries0').highcharts(chartObjects.timeSeriesCharts[iteration][0]);
    $('#timeSeries1').highcharts(chartObjects.timeSeriesCharts[iteration][1]);
    $('#timeSeries2').highcharts(chartObjects.timeSeriesCharts[iteration][2]);
    $('#timeSeries3').highcharts(chartObjects.timeSeriesCharts[iteration][3]);
    $('#timeSeries4').highcharts(chartObjects.timeSeriesCharts[iteration][4]);
    $('#timeSeries5').highcharts(chartObjects.timeSeriesCharts[iteration][5]);
    $('#timeSeries6').highcharts(chartObjects.timeSeriesCharts[iteration][6]);
    $('#timeSeries7').highcharts(chartObjects.timeSeriesCharts[iteration][7]);
    $('#timeSeries8').highcharts(chartObjects.timeSeriesCharts[iteration][8]);
    $('#timeSeries9').highcharts(chartObjects.timeSeriesCharts[iteration][9]);
    if(iteration<(end-1)){
      $timeout(populateCharts, 1500, true, iteration+1,end);
    }
  }

  var chartObjects = biradFactory.getChartObject().get().$promise.then(
    function(response){
      chartObjects = response;
      //populating F1Score
      $('#f1score').highcharts(chartObjects.f1ScoreBaseChartObj);
      populateCharts(0, 10);
    }, function(response){
      console.log('Error: ', response);
    });


    //adding functions to trigger the modal on click of re-run algorithm
    $('#rerun-alg').click(function(){
      $('#rerun-options-modal').modal('toggle');
    });



  }])

  .controller('BiradkController', ['$scope', function($scope){

  }])

  .controller('ContactController', ['$scope', function($scope){

  }])

  .controller('TeamController', ['$scope', function($scope){

  }]);
