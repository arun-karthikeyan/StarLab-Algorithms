'use strict';

angular.module('starlab.controllers', ['starlab.services'])

.controller('IndexController', ['$scope', function($scope) {

}])

.controller('BiradController', ['$scope', function($scope) {
    //setting default select value
    $scope.dataSel = '0';
}])

.controller('AboutController', ['$scope', function($scope) {

}])

.controller('BiradTrainController', ['$scope', function($scope) {
    var transitionTime = 500;
    var maxIterations = 10;
    var text = ['Setting up initial model parameters...', 'Starting Model Training...'];
    var iterConst = 'iteration ';
    for (var i = 1; i <= maxIterations; ++i) {
        text.push(iterConst + i + '...');
    }
    text.push('Training Complete !');
    text.push('Evaluating Test Data...');
    text.push('Here are your Test Results');

    function transitionText(index) {

        //load inner html
        $('#transitText').html(text[index]);
        //fade in
        $('#transitText').fadeTo(transitionTime, 1, function() {
            if (index < (text.length - 1)) {
                $('#transitText').fadeTo(transitionTime, 0, function() {
                    if ((++index) < text.length) {
                        transitionText(index);
                    }
                });
            } else {
                $('#test-results').fadeTo(transitionTime, 1);
                $('#export-btn').fadeTo(transitionTime, 1);
            }
        });
    }
    transitionText(0);
}])

.controller('BiradSampleController', ['$scope', 'biradFactory', '$timeout', function($scope, biradFactory, $timeout) {
    $scope.minIteration = 0;
    $scope.maxIteration = 10;
    $scope.currentIteration = 0;
    $scope.animation = {};
    $scope.animation.togglePlay = true;
    $scope.animation.toggleRestart = false;

    $scope.cleanseF1Score = function(startIteration) {
        for (var i = startIteration; i < $scope.maxIteration; ++i) {
            $('#f1score').highcharts().series[0].data[i].update(null);
        }
    };

    $scope.populateCharts = function(iteration, end) {
        $scope.currentIteration = iteration;
        console.log('Populated Charts for Iteration: ' + iteration);
        $('#f1score').highcharts().series[0].data[iteration].update(chartObjects.f1Score[iteration], true, {
            duration: 1000
        });
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
        if (iteration < (end - 1) && $scope.animation.togglePlay && !$scope.animation.toggleRestart) {
            $timeout($scope.populateCharts, 1500, true, iteration + 1, end);
        }
    };

    var chartObjects = biradFactory.getChartObject().get().$promise.then(
        function(response) {
            chartObjects = response;
            //populating F1Score
            $('#f1score').highcharts(chartObjects.f1ScoreBaseChartObj);
            $scope.populateCharts($scope.minIteration, $scope.maxIteration);
        },
        function(response) {
            console.log('Error: ', response);
        });


    //adding functions to trigger the modal on click of re-run algorithm
    $('#rerun-alg').click(function() {
        $('#rerun-options-modal').modal('toggle');
    });

    $scope.playChart = function() {
        if (!$scope.animation.togglePlay) {
            $scope.animation.togglePlay = true;
            $scope.populateCharts($scope.currentIteration + 1, $scope.maxIteration);
        } else {
            $scope.animation.togglePlay = false;
        }
    };

    $scope.restartAnimation = function() {
        if ($scope.animation.toggleRestart) {
            $scope.animation.toggleRestart = false;
            $scope.populateCharts($scope.minIteration, $scope.maxIteration);
        } else {
            $scope.animation.toggleRestart = true;
            $scope.currentIteration = $scope.minIteration;
            $scope.cleanseF1Score($scope.minIteration);
        }
    };

    $scope.restartChart = function() {
        $('#rerun-options-modal').modal('hide');
        $scope.cleanseF1Score($scope.rerunAlg.start);
        $scope.populateCharts($scope.rerunAlg.start, $scope.rerunAlg.end);
    };
}])

.controller('BiradkController', ['$scope', function($scope) {

}])

.controller('ContactController', ['$scope', function($scope) {

}])

.controller('TeamController', ['$scope', function($scope) {

}])

.controller('SirdController', ['$scope', function($scope) {

}])

.controller('BirdController', ['$scope', function($scope) {
    $scope.dataSel = '0';
}])

.controller('BirdRunController', ['$scope', 'birdFactory', '$timeout', function($scope, birdFactory, $timeout) {
  var allGraphs = birdFactory.graph;

    // var generateForceLayout = function(idx) {
    function generateForceLayout(idx){

      var mainSvg = d3.select('#mainSvg');
      if(mainSvg){
        mainSvg.remove(); //refresh chart
      }

      var graph = allGraphs[idx];
        var margin = {
            top: -5,
            right: -5,
            bottom: -5,
            left: -5
        };
        var width = 1200 - margin.left - margin.right,
            height = 1000 - margin.top - margin.bottom;

        var color = d3.scale.category10();

        var force = d3.layout.force()
            .charge(-200)
            .linkDistance(500)
            .size([width + margin.left + margin.right, height + margin.top + margin.bottom]);

        var zoom = d3.behavior.zoom()
            .scaleExtent([1, 10])
            .on("zoom", zoomed);

        //enable dragging here
        var drag = d3.behavior.drag()
            .origin(function(d) {
                return d;
            })
            .on("dragstart", dragstarted)
            .on("drag", dragged)
            .on("dragend", dragended);


        var svg = d3.select("#map").append("svg")
            .attr("id", 'mainSvg')
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.right + ")")
            .call(zoom);

        var rect = svg.append("rect")
            .attr("width", width)
            .attr("height", height)
            .style("fill", "none")
            .style("pointer-events", "all");

        var container = svg.append("g");

        force
            .nodes(graph.nodes)
            .links(graph.links)
            .linkDistance(function(link) {
                // return Math.abs(Math.log2(1.0/link.similarity) + 5);
                // return Math.abs(Math.pow(100,link.similarity) + 100);
                // return 500;
                return Math.abs(1.0 / link.similarity);
            })
            .start();



        var link = container.append("g")
            .attr("class", "links")
            .selectAll(".link")
            .data(graph.links)
            .enter().append("line")
            .attr("class", "link");
        // .style("stroke-width", function(d) {
        //     return Math.sqrt(10);
        // });

        var node = container.append("g")
            .attr("class", "nodes")
            .selectAll(".node")
            .data(graph.nodes)
            .enter().append("g")
            .attr("class", "node")
            .attr("cx", function(d) {
                return d.x;
            })
            .attr("cy", function(d) {
                return d.y;
            })
            .call(drag);

        function g10(n) {
            var g10Colors = ["#3366cc", "#dc3912", "#ff9900", "#109618", "#990099", "#0099c6", "#dd4477", "#66aa00", "#b82e2e", "#316395", "#994499", "#22aa99", "#aaaa11", "#6633cc", "#e67300", "#8b0707", "#651067", "#329262", "#5574a6", "#3b3eac"];
            return g10Colors[n % g10Colors.length];
        }
        node.append("circle")
            .attr("r", function(d) {
                return 10;
            })
            .style("fill", function(d) {
                return g10(d.class - 1);
            });


        force.on("tick", function() {
            link.attr("x1", function(d) {
                    return d.source.x;
                })
                .attr("y1", function(d) {
                    return d.source.y;
                })
                .attr("x2", function(d) {
                    return d.target.x;
                })
                .attr("y2", function(d) {
                    return d.target.y;
                });

            node.attr("transform", function(d) {
                return "translate(" + d.x + "," + d.y + ")";
            });
        });

        var linkedByIndex = {};
        graph.links.forEach(function(d) {
            linkedByIndex[d.source.index + "," + d.target.index] = 1;
        });

        function isConnected(a, b) {
            return linkedByIndex[a.index + "," + b.index] || linkedByIndex[b.index + "," + a.index];
        }

        node.on("mouseover", function(d) {

            node.classed("node-active", function(o) {
                thisOpacity = isConnected(d, o) ? true : false;
                this.setAttribute('fill-opacity', thisOpacity);
                return thisOpacity;
            });

            link.classed("link-active", function(o) {
                return o.source === d || o.target === d ? true : false;
            });

            d3.select(this).classed("node-active", true);
            d3.select(this).select("circle").transition()
                .duration(750)
                .attr("r", 15);
        })

        .on("mouseout", function(d) {

            node.classed("node-active", false);
            link.classed("link-active", false);

            d3.select(this).select("circle").transition()
                .duration(750)
                .attr("r", 10);
        });


        function dottype(d) {
            d.x = +d.x;
            d.y = +d.y;
            return d;
        }

        function zoomed() {
            container.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
        }

        function dragstarted(d) {
            d3.event.sourceEvent.stopPropagation();

            d3.select(this).classed("dragging", true);
            force.start();
        }

        function dragged(d) {

            d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);

        }

        function dragended(d) {

            d3.select(this).classed("dragging", false);
        }
    }
    //0 to 4 - (from G1 to G5, totally 5)
    generateForceLayout(0);
    $timeout(generateForceLayout, 3000, false, 1);
    $timeout(generateForceLayout, 6000, false, 2);
    $timeout(generateForceLayout, 9000, false, 3);

}])

.controller('PublicationsController', ['$scope', function($scope) {

}]);
