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

  // function display_dt_1(){
  //   $('#dataset-desc-2').css('display','none');
  //   $('#dataset-desc-1').css('display','');
  // }
  //
  // function display_dt_2(){
  //   $('#dataset-desc-1').css('display','none');
  //   $('#dataset-desc-2').css('display','');
  // }
}])

.controller('BiradSampleController', ['$scope', function($scope){
  var f1ScoreData = [0,0.92857,0.95122,0.95122,0.95122,0.95122,0.95122,0.95122,0.95122,0.95122];
  $('#f1score').highcharts({
    chart: {
      type: 'spline'
    },
    colors: ['#f2885f', '#434348', '#90ed7d', '#f7a35c', '#8085e9',
    '#f15c80', '#e4d354', '#2b908f', '#f45b5b', '#91e8e1'],
    title: {
      text: ('F-Score Vs Iterations ')
    },
    xAxis: {
      //categories: ['0','1', '2', '3', '4', '5', '6', '7', '8'],
      title: {
        text: 'Iterations ->'
      }
    },
    yAxis: {
      title: {
        text: 'F1-Score ->'
      }
    },
    plotOptions: {
      spline: {
        dataLabels: {
          enabled: true
        },
        enableMouseTracking: false
      }
    },
    series: [{
      name: 'F1-Score',
      data: f1ScoreData
    }]
  });

  var timeSeries5DataY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, {y: 1, marker: { enabled: true, symbol: 'url(http://cs624430.vk.me/v624430251/235/e8I-P96dbIM.jpg)', height: 20, width: 20 }}, 0, 0, {y: 0, marker: { enabled: true, symbol: 'url(http://cs624430.vk.me/v624430251/235/e8I-P96dbIM.jpg)', height: 20, width: 20 }}, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, {y: 1, marker: { enabled: true, symbol: 'url(http://cs624430.vk.me/v624430251/235/e8I-P96dbIM.jpg)', height: 20, width: 20 }}, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, {y: 1, marker: { enabled: true, symbol: 'url(http://cs624430.vk.me/v624430251/235/e8I-P96dbIM.jpg)', height: 20, width: 20 }}, 0, 0, 0];
  var timeSeries5DataX = [730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260];
  $('#timeSeries5').highcharts({
    chart: {
      type: 'spline'
    },
    title: {
      text: 'Time Series 5'
    },
    xAxis: {
      title: {
        text: 'Time Stamps'
      },
      categories: timeSeries5DataX
    },
    yAxis: {
      title: {
        text: 'Anomaly'
      }
    },
    tooltip: {
      crosshairs: true,
      shared: true
    },
    plotOptions: {
      spline: {
        marker: {
          enabled: false
        }
      }
    },
    series: [{
      name: 'Iteration 0',
      data: timeSeries5DataY

    }]
  });

  var timeSeries9DataY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, {y: 1, marker: { enabled: true, symbol: 'url(http://cs624430.vk.me/v624430251/235/e8I-P96dbIM.jpg)', height: 20, width: 20 }}, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, {y: 1, marker: { enabled: true, symbol: 'url(http://cs624430.vk.me/v624430251/235/e8I-P96dbIM.jpg)', height: 20, width: 20 }}, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, {y: 0, marker: { enabled: true, symbol: 'url(http://cs624430.vk.me/v624430251/235/e8I-P96dbIM.jpg)', height: 20, width: 20 }}, 0, 0, 0, 0, 0, 0, 0, 0, 0, {y: 1, marker: { enabled: true, symbol: 'url(http://cs624430.vk.me/v624430251/235/e8I-P96dbIM.jpg)', height: 20, width: 20 }}, 0, 0, 0];
var timeSeries9DataX = [355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260];
$('#timeSeries9').highcharts({
  chart: {
    type: 'spline'
  },
  title: {
    text: 'Time Series 9'
  },
  xAxis: {
    title: {
      text: 'Time Stamps'
    },
    categories: timeSeries9DataX
  },
  yAxis: {
    title: {
      text: 'Anomaly'
    }
  },
  tooltip: {
    crosshairs: true,
    shared: true
  },
  plotOptions: {
    spline: {
      marker: {
        enabled: false
      }
    }
  },
  series: [{
    name: 'Iteration 0',
    data: timeSeries9DataY

  }]
});

var timeSeries0DataY = [0, 0, 0, 0, 0, 0, 0, 0, {y: 1, marker: { enabled: true, symbol: 'url(http://cs624430.vk.me/v624430251/235/e8I-P96dbIM.jpg)', height: 20, width: 20 }}, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, {y: 1, marker: { enabled: true, symbol: 'url(http://cs624430.vk.me/v624430251/235/e8I-P96dbIM.jpg)', height: 20, width: 20 }}, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, {y: 1, marker: { enabled: true, symbol: 'url(http://cs624430.vk.me/v624430251/235/e8I-P96dbIM.jpg)', height: 20, width: 20 }}, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, {y: 0, marker: { enabled: true, symbol: 'url(http://cs624430.vk.me/v624430251/235/e8I-P96dbIM.jpg)', height: 20, width: 20 }}, {y: 0, marker: { enabled: true, symbol: 'url(http://cs624430.vk.me/v624430251/235/e8I-P96dbIM.jpg)', height: 20, width: 20 }}, {y: 0, marker: { enabled: true, symbol: 'url(http://cs624430.vk.me/v624430251/235/e8I-P96dbIM.jpg)', height: 20, width: 20 }}, {y: 0, marker: { enabled: true, symbol: 'url(http://cs624430.vk.me/v624430251/235/e8I-P96dbIM.jpg)', height: 20, width: 20 }}, {y: 0, marker: { enabled: true, symbol: 'url(http://cs624430.vk.me/v624430251/235/e8I-P96dbIM.jpg)', height: 20, width: 20 }}, {y: 0, marker: { enabled: true, symbol: 'url(http://cs624430.vk.me/v624430251/235/e8I-P96dbIM.jpg)', height: 20, width: 20 }}, {y: 0, marker: { enabled: true, symbol: 'url(http://cs624430.vk.me/v624430251/235/e8I-P96dbIM.jpg)', height: 20, width: 20 }}, {y: 0, marker: { enabled: true, symbol: 'url(http://cs624430.vk.me/v624430251/235/e8I-P96dbIM.jpg)', height: 20, width: 20 }}, {y: 0, marker: { enabled: true, symbol: 'url(http://cs624430.vk.me/v624430251/235/e8I-P96dbIM.jpg)', height: 20, width: 20 }}, {y: 0, marker: { enabled: true, symbol: 'url(http://cs624430.vk.me/v624430251/235/e8I-P96dbIM.jpg)', height: 20, width: 20 }}, {y: 0, marker: { enabled: true, symbol: 'url(http://cs624430.vk.me/v624430251/235/e8I-P96dbIM.jpg)', height: 20, width: 20 }}, {y: 0, marker: { enabled: true, symbol: 'url(http://cs624430.vk.me/v624430251/235/e8I-P96dbIM.jpg)', height: 20, width: 20 }}, {y: 0, marker: { enabled: true, symbol: 'url(http://cs624430.vk.me/v624430251/235/e8I-P96dbIM.jpg)', height: 20, width: 20 }}];
var timeSeries0DataX = [208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1420, 1421, 1422, 1423, 1424, 1425, 1426, 1427, 1428, 1429, 1430, 1431, 1432, 1433, 1434, 1435, 1436, 1437, 1438];
$('#timeSeries0').highcharts({
  chart: {
    type: 'spline'
  },
  title: {
    text: 'Time Series 0'
  },
  xAxis: {
    title: {
      text: 'Time Stamps'
    },
    categories: timeSeries0DataX
  },
  yAxis: {
    title: {
      text: 'Anomaly'
    }
  },
  tooltip: {
    crosshairs: true,
    shared: true
  },
  plotOptions: {
    spline: {
      marker: {
        enabled: false
      }
    }
  },
  series: [{
    name: 'Iteration 0',
    data: timeSeries0DataY

  }]
});

var timeSeries0DataY_it10 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var timeSeries0DataX_it10 = [208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1420, 1421, 1422, 1423, 1424, 1425, 1426, 1427, 1428, 1429, 1430, 1431, 1432, 1433, 1434, 1435, 1436, 1437, 1438];
$('#timeSeries0-it10').highcharts({
  chart: {
    type: 'spline'
  },
  title: {
    text: 'Time Series 0'
  },
  xAxis: {
    title: {
      text: 'Time Stamps'
    },
    categories: timeSeries0DataX_it10
  },
  yAxis: {
    title: {
      text: 'Anomaly'
    }
  },
  tooltip: {
    crosshairs: true,
    shared: true
  },
  plotOptions: {
    spline: {
      marker: {
        enabled: false
      }
    }
  },
  series: [{
    name: 'Iteration 10',
    data: timeSeries0DataY_it10

  }]
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
