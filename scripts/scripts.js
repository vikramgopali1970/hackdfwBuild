'use strict';

/**
 * @ngdoc overview
 * @name feApp
 * @description
 * # feApp
 *
 * Main module of the application.
 */
angular
  .module('feApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(["$stateProvider", function ($stateProvider) {

      let insights =  {
          name : 'insights',
          url : '/insights',
          templateUrl: 'views/signaPay.html',
          controller: 'AboutCtrl',
          controllerAs: 'main'
      };

      let auction =  {
          name : 'auction',
          url : '/auction',
          templateUrl: 'views/auction.html',
          controller: 'auction',
          controllerAs: 'main'
      };

    $stateProvider.state(insights);
    $stateProvider.state(auction);
    $stateProvider.state("otherwise", { url : '/insights'})

  }]);

'use strict';

/**
 * @ngdoc function
 * @name feApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the feApp
 */
angular.module('feApp')
  .controller('MainCtrl', ["$scope", "Events", function ($scope,Events) {

    console.log("inside main controller");
      $scope.show = true;
    $scope.getData = ()=>{
        Events.getWeatherApi($scope.zipCode).then(success=>{
            console.log("herreeeeee",success.data.main.humidity);
            $scope.humidity = success.data.main.humidity;
            document.getElementById("openModel1").click();
        }).catch(error=>{

        });
        $scope.show = false;
    };







      // $(window).bind('load', function () {
      //     const raf = function (entry) {
      //         window.requestAnimationFrame(entry);
      //     };
      //     const random = function (min, max) {
      //         max = max + 1;
      //         return Math.floor(Math.random() * (max - min) + min);
      //     }
      //
      //     var
      //         container = document.getElementById('container'),
      //         cContainer = $('#c-container'),
      //         mainCanvas = document.getElementById('c'),
      //         c2Container = $('#c2-container'),
      //         mainCanvas2 = document.getElementById('c2'),
      //         mainContext = c.getContext('2d'),
      //         mainContext2 = c2.getContext('2d'),
      //         particlesLoaded = false,
      //         Particle,
      //         Particle2,
      //         canvas,
      //         w,
      //         h,
      //         w2,
      //         h2,
      //         hue = random(180, 215),
      //         globalGrassNum = 200,
      //         globalGrassLw = [],
      //         globalGrassHeight = [],
      //         globalGrassX = [],
      //         globalGrassHue = [],
      //         containerHue = random(0, 360),
      //         globalHue = 180,
      //         globalHue2 = globalHue,
      //         globalSat = 100,
      //         globalSat2 = globalSat,
      //         globalLight = 70,
      //         globalLight2 = 10,
      //         globalOpacity = 0.2,
      //         globalOpacity2 = globalOpacity,
      //         mouseX = null,
      //         mouseY = null,
      //         canvas2;
      //
      //     container.style.opacity = 1;
      //
      //     w = mainCanvas.width = mainCanvas.offsetWidth;
      //     h = mainCanvas.height = mainCanvas.offsetHeight;
      //
      //     w2 = mainCanvas2.width = mainCanvas2.offsetWidth;
      //     h2 = mainCanvas2.height = mainCanvas2.offsetHeight;
      //
      //     for (var i = 0; i < globalGrassNum; i++) {
      //         globalGrassX.push(random(0, w));
      //         globalGrassLw.push(1);
      //         globalGrassHeight.push(random(1, 100) * 0.05);
      //         globalGrassHue.push(random(120, 160));
      //     }
      //
      //     TweenMax.set(c2Container, {
      //         transformOrigin: 'center bottom',
      //         scaleY: -1,
      //         opacity: 1
      //     });
      //
      //     TweenMax.set(mainCanvas2, {
      //         filter: 'blur(5px)'
      //     });
      //
      //
      //     var grd = mainContext.createLinearGradient(0, 0, w, 0),
      //         grd2 = mainContext2.createLinearGradient(0, 0, w, 0);
      //     grd.addColorStop(0, "#48c9ff");
      //     grd.addColorStop(1, "#005aff");
      //     grd2.addColorStop(0, "#6483f5");
      //     grd2.addColorStop(1, "#1635ac");
      //
      //     //INITIAL CANVAS DRAW
      //     mainContext.fillStyle = 'rgba(0,0,0,1)';
      //     mainContext.fillRect(0, 0, w, h);
      //     mainContext2.fillStyle = 'rgba(0,0,0,1)';
      //     mainContext2.fillRect(0, 0, w2, h2);
      //
      //     function particleFactory(thisCanvas, thisContext, thisParticleName, thisCanvasFunction) {
      //
      //         var particleIndex = 0,
      //             grassIndex = 0,
      //             particles = {},
      //             grass = {},
      //             particleNum = 4,
      //             grassNum = globalGrassNum,
      //             Grass,
      //             c = thisCanvas,
      //             cx = thisContext,
      //             particlesLoaded = false,
      //             grassLoaded = false;
      //
      //         Grass = function () {
      //
      //             this.grassLw = globalGrassLw[grassIndex];
      //
      //             this.grassHue = globalGrassHue[grassIndex];
      //             this.grassSat = 100;
      //             this.grassLight = random(10, 40);
      //             this.grassOpacity = 1;
      //
      //             this.grassX = globalGrassX[grassIndex];
      //             this.grassY = h - 1;
      //             this.grassHeight = globalGrassHeight[grassIndex];
      //             this.grassXEnd = this.grassX;
      //             this.grassYEnd = this.grassY * 0.9;
      //             this.grassXIntensity = 10;
      //             this.grassX0 = random(this.grassXEnd - this.grassXIntensity, this.grassXEnd + this.grassXIntensity);
      //             this.grassY0 = this.grassY - (5 * this.grassHeight);
      //             this.grassX1 = this.grassXEnd;
      //             this.grassY1 = this.grassY - (10 * this.grassHeight);
      //             this.grassX2 = random(this.grassXEnd - this.grassXIntensity, this.grassXEnd + this.grassXIntensity);
      //             this.grassY2 = this.grassY - (15 * this.grassHeight);
      //             this.grassX3 = this.grassXEnd;
      //             this.grassY3 = this.grassY - (20 * this.grassHeight);
      //
      //             this.tick = 0;
      //             this.tickInc = random(1, 5) * 0.05;
      //             this.tickMin = -5;
      //             this.tickMax = 5;
      //
      //             grass[grassIndex] = this;
      //             this.id = grassIndex;
      //             grassIndex++;
      //         }
      //
      //         Grass.prototype.draw = function () {
      //
      //             this.tick += this.tickInc;
      //
      //             //GRASS
      //             cx.beginPath();
      //             cx.strokeStyle = `hsla(${this.grassHue},${this.grassSat}%,${this.grassLight}%,${this.grassOpacity})`;
      //             cx.lineWidth = this.grassLw;
      //             cx.moveTo(this.grassX, this.grassY);
      //             cx.quadraticCurveTo(this.grassX0 + this.tick, this.grassY0, this.grassX1 + this.tick, this.grassY1);
      //             cx.quadraticCurveTo(this.grassX2 + this.tick, this.grassY2, this.grassX3 + this.tick, this.grassY3);
      //             cx.stroke();
      //             if (this.tick > this.tickMax) {
      //                 this.tickInc *= -1;
      //             }
      //             if (this.tick < this.tickMin) {
      //                 this.tickInc *= -1;
      //             }
      //         }
      //
      //         thisParticleName = function () {
      //             this.rStart = 1;
      //             this.r = this.rStart;
      //             this.rTop = 10;
      //
      //             this.lw = this.r * 2;
      //
      //             this.rChange = 0.25;
      //             this.rChangeDown = -0.25;
      //             this.rEnd = 50;
      //             this.xPosition = random(1, 2);
      //             this.xPos1 = w * 0.35 - this.r / 2;
      //             this.xPos2 = w * 0.65 - this.r / 2;
      //             this.xInit = () => {
      //                 switch (true) {
      //                     case this.xPosition === 1:
      //                         return this.xPos1;
      //                         break;
      //                     case this.xPosition === 2:
      //                         return this.xPos2;
      //                         break;
      //                 }
      //             };
      //             this.x = this.xInit();
      //             this.dir = this.xPosition === 1 ? 5 : -5;
      //             this.vx = mouseX != null ? ((mouseX - (w / 2)) * -0.01) : this.dir;
      //             this.xOld;
      //             this.xNew;
      //
      //             this.neutral = random(1, 2) === 1;
      //
      //             this.yInit = h - this.r / 2;
      //             this.y = this.yInit;
      //             this.vyInit = random(-15, -5);
      //             this.vy = this.vyInit;
      //             this.yOld;
      //             this.yNew;
      //
      //             this.gravity = 0.5;
      //
      //             this.hue = random(180, 215);
      //             this.sat = 100;
      //             this.light = 50;
      //
      //             this.opacity = c === mainCanvas ? 1 : 0.5;
      //             this.opacityChange = -0.1;
      //             this.opacityEnd = 0;
      //             this.life = 0;
      //             this.maxLife = 250;
      //             this.doneBouncing = false;
      //             this.hasHitGround = false;
      //
      //             this.counter = 0;
      //             this.counterInc = 0.05;
      //
      //             particles[particleIndex] = this;
      //             this.id = particleIndex;
      //             particleIndex++;
      //
      //         }
      //
      //         thisParticleName.prototype.draw = function () {
      //             this.counter += this.counterInc;
      //             this.xOld = this.x;
      //             this.yOld = this.y;
      //             if (this.neutral) {
      //                 this.x -= this.vx;
      //                 this.y += this.vy;
      //             } else {
      //                 this.x -= this.vx;
      //                 this.y += this.vy;
      //             }
      //
      //             this.xNew = this.x;
      //             this.yNew = this.y;
      //             cx.beginPath();
      //             cx.fillStyle = `hsla(${this.hue},${this.sat}%,${this.light}%,${this.opacity})`;
      //             cx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      //             cx.fill();
      //
      //             //SPRINKLE TRAIL
      //             cx.beginPath();
      //             cx.strokeStyle = `hsla(${this.hue},${this.sat}%,${this.light}%,${this.opacity})`;
      //             cx.lineWidth = this.lw;
      //             cx.moveTo(this.xOld, this.yOld);
      //             cx.lineTo(this.x, this.y);
      //             cx.stroke();
      //
      //             if (this.r > this.rTop) {
      //                 this.rPeakHit = true;
      //             }
      //
      //             if (!this.hasHitGround) {
      //                 if (!this.rPeakHit) {
      //                     this.r += this.rChange;
      //                     this.lw = this.r * 2;
      //                 } else {
      //                     this.r += this.rChangeDown;
      //                     this.lw = this.r * 2;
      //                 }
      //             } else {
      //                 this.r += this.rChangeDown;
      //                 this.lw = this.r * 2;
      //             }
      //
      //             if (this.y > h - this.r) {
      //                 this.hasHitGround = true;
      //                 if (this.vy < 0.35) {
      //                     this.doneBouncing = true;
      //                 }
      //                 this.vx *= 0.5;
      //                 this.vy *= -0.5;
      //                 this.y = h - this.r;
      //             }
      //             this.life++;
      //             this.vy += this.gravity;
      //             if (this.life > this.maxLife) {
      //                 this.opacity += this.opacityChange;
      //             }
      //             if ((this.opacity < this.opacityEnd) || (this.r < 0.5)) {
      //                 delete particles[this.id];
      //             }
      //             if (this.doneBouncing) {}
      //         }
      //
      //         thisCanvasFunction = function () {
      //             thisContext.globalCompositeOperation = 'source-over';
      //             if (c === mainCanvas) {
      //                 thisContext.fillStyle = grd;
      //             } else {
      //                 thisContext.fillStyle = grd2;
      //             }
      //             thisContext.fillRect(0, 0, c.width, c.height);
      //             if (!particlesLoaded) {
      //                 //                                particlesLoaded = true;
      //                 for (var i = 0; i < particleNum; i++) {
      //                     new thisParticleName();
      //                 }
      //             }
      //             //            thisContext.globalCompositeOperation = 'lighter';
      //             for (var i in particles) {
      //                 particles[i].draw();
      //             }
      //             if (!grassLoaded) {
      //                 grassLoaded = true;
      //                 for (var i = 0; i < grassNum; i++) {
      //                     new Grass();
      //                 }
      //             }
      //             for (var i in grass) {
      //                 grass[i].draw();
      //             }
      //
      //             raf(thisCanvasFunction);
      //         }
      //         raf(thisCanvasFunction);
      //
      //     }
      //
      //     $(window).resize(function initial() {
      //         window.addEventListener('mousemove', mouseCoord, false);
      //
      //         w = mainCanvas.width = mainCanvas.offsetWidth;
      //         h = mainCanvas.height = mainCanvas.offsetHeight;
      //
      //         w2 = mainCanvas2.width = mainCanvas2.offsetWidth;
      //         h2 = mainCanvas2.height = mainCanvas2.offsetHeight;
      //
      //         return initial;
      //     }());
      //
      //     particleFactory(mainCanvas, mainContext, Particle, canvas);
      //     particleFactory(mainCanvas2, mainContext2, Particle2, canvas2);
      //
      //     window.addEventListener('mousemove', mouseCoord, false);
      //
      //     function mouseCoord(e) {
      //         mouseX = e.clientX;
      //         mouseY = e.clientY;
      //     }
      // });


  }]);

'use strict';


class Events{
    constructor($state,$http){
        this.$state = $state;
        this.$http = $http;
    }

    getWeatherApi(zipCode){
        console.log("zip requested is ",zipCode);
        return this.$http.get(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=3b7bc1fd628e07379305e67707643203`).then(success=>{
            console.log(success);
            return success;
        }).catch(error=>{

        });
    }

    getBusinessDetails(bObj){
        console.log("zip requested is ",bObj);
        return this.$http.post("http://localhost:8000/verifyBusiness",bObj).then(success=>{
            console.log(success);
            return success;
        }).catch(error=>{

        });
    }

}

angular
    .module('feApp')
    .service('Events',
        ["$state", "$http", function($state,$http){
            return new Events($state,$http);
        }]);

'use strict';

/**
 * @ngdoc function
 * @name feApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the feApp
 */
angular.module('feApp')
  .controller('AboutCtrl', ["$scope", "Events", function ($scope,Events) {
      // $scope.plot();
      // Highcharts.chart('qwq', {
      //
      //     xAxis: {
      //         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      //             'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      //     },
      //
      //     series: [{
      //         data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      //     }]
      // });


      // $scope.open = (data)=>{
      //     console.log("clicked");
      // };
      //
      //
      //
      //
      // let data = [{:}]

      Highcharts.chart('container11', {
          title: {
              text: 'Runs scored across seasons'
          },
          chart: {
              type: 'line',

          },

          credits: {
              enabled: false
          },

          plotOptions: {
              series: {
                  fillColor: {
                      linearGradient: [0, 0, 0, 300],
                      stops: [
                          [0, Highcharts.getOptions().colors[0]],
                          [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                      ]
                  }
              },
              animation: {
                  duration: 2000
              }
          },
          yAxis: {
              alignTicks : true,
              labels: {
                  enabled: true
              }

          },

          xAxis:{
              categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
              labels: {
                  enabled: true
              }
          },

          legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle'
          },



          series: [{
              name: 'Runs',
              fillColor : {
                  linearGradient : [0, 0, 0, 300],
                  stops : [
                      [0, Highcharts.getOptions().colors[0]],
                      [1, 'rgba(2,0,0,0)']
                  ]
              },
              data: [17937, 16353, 18883, 21154, 22453, 22602, 18931, 18353, 18862, 18786]
          }]
      })

      Highcharts.chart('container12', {
          title: {
              text: 'Number of matches played each season'
          },
          chart: {
              type: 'line',

          },

          credits: {
              enabled: false
          },

          subtitle: {
              text: 'IPL'
          },

          plotOptions: {
              series: {
                  fillColor: {
                      linearGradient: [0, 0, 0, 300],
                      stops: [
                          [0, Highcharts.getOptions().colors[0]],
                          [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                      ]
                  }
              },
              animation: {
                  duration: 2000
              }
          },
          yAxis: {
              alignTicks : true,
              labels: {
                  enabled: true
              }

          },

          xAxis:{
              categories: [2008,2009,2010,2011,2012,2013,2014,2015,2016,2017],
              labels: {
                  enabled: true
              }
          },

          legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle'
          },



          series: [{
              name: 'Matches',
              fillColor : {
                  linearGradient : [0, 0, 0, 300],
                  stops : [
                      [0, Highcharts.getOptions().colors[0]],
                      [1, 'rgba(2,0,0,0)']
                  ]
              },
              data: [58,57,60,73,74,76,60,59,60,59]
          }]
      });



      Highcharts.chart('container13', {
          title: {
              text: 'Man of the match awards'
          },
          chart: {
              type: 'bar',

          },

          credits: {
              enabled: false
          },

          subtitle: {
              text: 'IPL'
          },

          plotOptions: {
              series: {
                  fillColor: {
                      linearGradient: [0, 0, 0, 300],
                      stops: [
                          [0, Highcharts.getOptions().colors[0]],
                          [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                      ]
                  }
              },
              animation: {
                  duration: 2000
              }
          },
          yAxis: {
              alignTicks : true,
              labels: {
                  enabled: true
              }

          },

          xAxis:{
              categories: ['CH Gayle', 'YK Pathan', 'AB de Villiers', 'DA Warner', 'SK Raina', 'RG Sharma', 'MS Dhoni', 'G Gambhir', 'MEK Hussey', 'AM Rahane'],
              labels: {
                  enabled: true
              }
          },

          legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle'
          },



          series: [{
              name: 'Matches',
              fillColor : {
                  linearGradient : [0, 0, 0, 300],
                  stops : [
                      [0, Highcharts.getOptions().colors[0]],
                      [1, 'rgba(2,0,0,0)']
                  ]
              },
              data: [18, 16, 15, 15, 14, 14, 13, 13, 12, 12]
          }]
      });



      Highcharts.chart('container14', {
          chart: {
              type: 'pie',
              options3d: {
                  enabled: true,
                  alpha: 45
              }
          },
          title: {
              text: 'Likelihood of Toss determining win'
          },
          credits: {
              enabled: false
          },
          subtitle: {
              text: 'IPL'
          },
          plotOptions: {
              pie: {
                  innerSize: 100,
                  depth: 45
              }
          },
          series: [{
              name: 'Delivered amount',
              data: [
                  ["Yes",51.1],
                  ["No",48.9]
              ]
          }]
      });




      Highcharts.chart('container15', {
          title: {
              text: 'Favourite venues'
          },
          chart: {
              type: 'column',

          },

          credits: {
              enabled: false
          },

          subtitle: {
              text: 'IPL'
          },

          plotOptions: {
              series: {
                  fillColor: {
                      linearGradient: [0, 0, 0, 300],
                      stops: [
                          [0, Highcharts.getOptions().colors[0]],
                          [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                      ]
                  }
              },
              animation: {
                  duration: 2000
              }
          },
          yAxis: {
              alignTicks : true,
              labels: {
                  enabled: true
              }

          },

          xAxis:{
              categories: ['M Chinnaswamy Stadium', 'Eden Gardens', 'Feroz Shah Kotla', 'Wankhede Stadium', 'Rajiv Gandhi International Stadium, Uppal', 'MA Chidambaram Stadium, Chepauk', 'Punjab Cricket Association Stadium, Mohali', 'Sawai Mansingh Stadium', 'Subrata Roy Sahara Stadium', 'Dr DY Patil Sports Academy', 'Kingsmead', 'Maharashtra Cricket Association Stadium', 'Sardar Patel Stadium, Motera', 'SuperSport Park', 'Punjab Cricket Association IS Bindra Stadium, Mohali'],
              labels: {
                  enabled: true
              }
          },

          legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle'
          },



          series: [{
              name: 'Rating',
              fillColor : {
                  linearGradient : [0, 0, 0, 300],
                  stops : [
                      [0, Highcharts.getOptions().colors[0]],
                      [1, 'rgba(2,0,0,0)']
                  ]
              },
              data:  [66, 61, 60, 57, 49, 48, 35, 33, 17, 17, 15, 15, 12, 12, 11]
          }]
      });



      Highcharts.chart('container16', {
          title: {
              text: 'Toss Decisions over the seasons'
          },
          chart: {
              type: 'column'
          },
          credits: {
              enabled: false
          },
          xAxis: {
              categories: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017']
          },

          plotOptions: {
              series: {
                  groupPadding: 0
              }
          },

          series: [{
              name:"Bat",
              data: [26, 35, 39, 25, 37, 45, 19, 25, 11, 11]
          }, {
              name:"Field",
              data: [32, 22, 21, 48, 37, 31, 41, 34, 49, 48]
          }]
      });



      Highcharts.chart('container17', {
          title: {
              text: 'Experienced Umpires'
          },
          chart: {
              type: 'column',

          },

          credits: {
              enabled: false
          },

          subtitle: {
              text: 'IPL'
          },

          plotOptions: {
              series: {
                  fillColor: {
                      linearGradient: [0, 0, 0, 300],
                      stops: [
                          [0, Highcharts.getOptions().colors[0]],
                          [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                      ]
                  }
              },
              animation: {
                  duration: 2000
              }
          },
          yAxis: {
              alignTicks : true,
              labels: {
                  enabled: true
              }

          },

          xAxis:{
              categories: ['HDPK Dharmasena', 'S Ravi', 'AK Chaudhary', 'C Shamshuddin', 'SJA Taufel', 'M Erasmus', 'Asad Rauf', 'BR Doctrove', 'CK Nandan', 'RE Koertzen'],
              labels: {
                  enabled: true
              }
          },

          legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle'
          },



          series: [{
              name: 'Rating',
              fillColor : {
                  linearGradient : [0, 0, 0, 300],
                  stops : [
                      [0, Highcharts.getOptions().colors[0]],
                      [1, 'rgba(2,0,0,0)']
                  ]
              },
              data:  [87, 85, 58, 56, 55, 54, 51, 42, 41, 41]
          }]
      });


      Highcharts.chart('container18', {
          chart: {
              type: 'column'
          },
          title: {
              text: 'Stacked column chart'
          },
          xAxis: {
              categories: ['MI', 'RCB', 'KKR', 'KXIP', 'DD', 'CSK', 'RR', 'SRH', 'DC', 'PW', 'GL', 'RPS', 'KTK']
          },
          yAxis: {
              min: 0,
              title: {
                  text: 'Wins / matches'
              },
              stackLabels: {
                  enabled: true,
                  style: {
                      fontWeight: 'bold',
                      color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                  }
              }
          },
          legend: {
              align: 'right',
              x: -30,
              verticalAlign: 'top',
              y: 25,
              floating: true,
              backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
              borderColor: '#CCC',
              borderWidth: 1,
              shadow: false
          },
          credits: {
              enabled: false
          },
          plotOptions: {
              column: {
                  stacking: 'normal',
                  dataLabels: {
                      enabled: true,
                      color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white'
                  }
              }
          },
          series: [{
              name: 'Loss',
              data: [65, 73, 71, 75, 77, 68, 56, 34, 46, 31, 17, 18, 8]
          }, {
              name: 'Wins',
              data:  [92, 79, 77, 73, 70, 63, 62, 42, 29, 15, 13, 12, 6]
          }]
      });



      Highcharts.chart('container19', {
          title: {
              text: 'Analyzing two teams battle over seasons (MI vs CSK)',
          },
          chart: {
              type: 'column'
          },
          credits: {
              enabled: false
          },
          xAxis: {
              categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015]
          },

          plotOptions: {
              series: {
                  groupPadding: 0
              }
          },

          series: [{
              name:"MI",
              color: 'blue',
              data: [7, 5, 11, 10, 10, 13, 7, 10]
          }, {
              name:"CSK",
              color: 'yellow',
              data: [9, 8, 9, 11, 10, 12, 10, 10]
          }]
      });


      Highcharts.chart('container20', {
          title: {
              text: 'Average innings score across seasons',
          },
          chart: {
              type: 'column'
          },
          credits: {
              enabled: false
          },
          xAxis: {
              categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017]
          },

          plotOptions: {
              series: {
                  groupPadding: 0
              }
          },

          series: [{
              name:"Innings 1",
              data:  [160.97, 150.53, 164.93, 152.37, 157.54, 156.36, 163.25, 166.51, 162.6, 165.97]
          }, {
              name:"Innings 2",
              data:  [148.29, 136.37, 149.78, 137.41, 145.88, 141.04, 152.27, 144.56, 151.77, 152.44]
          }]
      });


      Highcharts.chart('container21', {
          title: {
              text: 'Top run scorers'
          },
          chart: {
              type: 'bar',

          },

          credits: {
              enabled: false
          },

          subtitle: {
              text: 'IPL'
          },

          plotOptions: {
              series: {
                  fillColor: {
                      linearGradient: [0, 0, 0, 300],
                      stops: [
                          [0, Highcharts.getOptions().colors[0]],
                          [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                      ]
                  }
              },
              animation: {
                  duration: 2000
              }
          },
          yAxis: {
              alignTicks : true,
              labels: {
                  enabled: true
              }

          },

          xAxis:{
              categories: ['SK Raina', 'V Kohli', 'RG Sharma', 'G Gambhir', 'DA Warner'],
              labels: {
                  enabled: true
              }
          },

          legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle'
          },



          series: [{
              name: 'Matches',
              fillColor : {
                  linearGradient : [0, 0, 0, 300],
                  stops : [
                      [0, Highcharts.getOptions().colors[0]],
                      [1, 'rgba(2,0,0,0)']
                  ]
              },
              data: [4548, 4423, 4207, 4132, 4014]
          }]
      });



      Highcharts.chart('container22', {
          title: {
              text: 'Highest Wicket Takers'
          },
          chart: {
              type: 'column',

          },

          credits: {
              enabled: false
          },

          subtitle: {
              text: 'IPL'
          },

          plotOptions: {
              series: {
                  fillColor: {
                      linearGradient: [0, 0, 0, 300],
                      stops: [
                          [0, Highcharts.getOptions().colors[0]],
                          [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                      ]
                  }
              },
              animation: {
                  duration: 2000
              }
          },
          yAxis: {
              alignTicks : true,
              labels: {
                  enabled: true
              }

          },

          xAxis:{
              categories: ['SL Malinga', 'A Mishra', 'Harbhajan Singh', 'PP Chawla', 'DJ Bravo'],
              labels: {
                  enabled: true
              }
          },

          legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'middle'
          },



          series: [{
              name: 'Wickets',
              fillColor : {
                  linearGradient : [0, 0, 0, 300],
                  stops : [
                      [0, Highcharts.getOptions().colors[0]],
                      [1, 'rgba(2,0,0,0)']
                  ]
              },
              data:   [154, 134, 127, 126, 122]
          }]
      });




      Highcharts.chart('container23', {
          chart: {
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: false,
              type: 'pie',
          },
          title: {
              text: 'Suresh Raina'
          },
          tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          legend : {
              enabled : false
          },
          credits: {
              enabled: false
          },
          plotOptions: {
              pie: {
                  allowPointSelect: true,
                  cursor: 'pointer',
                  dataLabels: {
                      enabled: true
                  },
                  showInLegend: true
              }
          },
          series: [{
              name: 'S Raina',
              colorByPoint: true,
              data: [{
                  name: '0\'s',
                  y: 1163,
              }, {
                  name: '1\'s',
                  y: 1377
              }, {
                  name: '2\'s',
                  y: 242
              }, {
                  name: '3\'s',
                  y: 10
              }, {
                  name: '4\'s',
                  y: 403
              }, {
                  name: '6\'s',
                  y: 174,
                  sliced: true,
                  selected: true
              }]
          }]
      });

      Highcharts.chart('container24', {
          chart: {
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: false,
              type: 'pie'
          },
          title: {
              text: 'Virat Kohli'
          },
          credits: {
              enabled: false
          },
          legend : {
              enabled : false
          },
          tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
              pie: {
                  allowPointSelect: true,
                  cursor: 'pointer',
                  dataLabels: {
                      enabled: true
                  },
                  showInLegend: true
              }
          },
          series: [{
              name: 'V Kohli',
              colorByPoint: true,
              data: [{
                  name: '0\'s',
                  y: 1287,
              }, {
                  name: '1\'s',
                  y: 1410
              }, {
                  name: '2\'s',
                  y: 242
              }, {
                  name: '3\'s',
                  y: 11
              }, {
                  name: '4\'s',
                  y: 384
              }, {
                  name: '6\'s',
                  y: 160,
                  sliced: true,
                  selected: true
              }]
          }]
      });


      Highcharts.chart('container25', {
          chart: {
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: false,
              type: 'pie'
          },
          credits: {
              enabled: false
          },
          legend : {
              enabled : false
          },
          title: {
              text: 'Rohit Sharma'
          },
          tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
              pie: {
                  allowPointSelect: true,
                  cursor: 'pointer',
                  dataLabels: {
                      enabled: true
                  },
                  showInLegend: true
              }
          },
          series: [{
              name: 'R Sharma',
              colorByPoint: true,
              data: [{
                  name: '0\'s',
                  y: 1185,
              }, {
                  name: '1\'s',
                  y: 1379
              }, {
                  name: '2\'s',
                  y: 277
              }, {
                  name: '3\'s',
                  y: 5
              }, {
                  name: '4\'s',
                  y: 355
              }, {
                  name: '6\'s',
                  y: 173,
                  sliced: true,
                  selected: true
              }]
          }]
      });


      Highcharts.chart('container26', {
          chart: {
              type: 'pie',
              options3d: {
                  enabled: true,
                  alpha: 45
              }
          },
          title: {
              text: 'Player dismissal distribution'
          },
          credits: {
              enabled: false
          },
          subtitle: {
              text: 'IPL'
          },
          plotOptions: {
              pie: {
                  innerSize: 100,
                  depth: 45
              }
          },
          series: [{
              name: 'Delivered amount',
              data: [['caught', 4373], ['bowled', 1382], ['run out', 755], ['lbw', 455], ['stumped', 243], ['caught and bowled', 211]]
          }]
      });

      // $scope.plot=()=>{
      //     console.log("hihihih");
      //     var myChart = Highcharts.chart('container11', {
      //         title: {
      //             text: 'Sentimental Analysis Of Reviews'
      //         },
      //
      //         subtitle: {
      //             text: 'Source: yelp.com and google reviews'
      //         },
      //
      //         yAxis: {
      //             // title: {
      //             //     text: 'Number of Employees'
      //             // }
      //
      //         },
      //
      //         xAxis:{
      //             categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      //                 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      //             labels: {
      //                 enabled: false
      //             }
      //         },
      //
      //         legend: {
      //             layout: 'vertical',
      //             align: 'right',
      //             verticalAlign: 'middle'
      //         },
      //
      //         plotOptions: {
      //             series: {
      //                 label: {
      //                     connectorAllowed: false
      //                 },
      //                 // pointStart: 2010
      //             }
      //         },
      //
      //         series: [{
      //             name: 'Polarities',
      //             data: [17937, 16353, 18883, 21154, 22453, 22602, 18931, 18353, 18862, 18786]
      //         }]
      //     });
      // };
  }]);

'use strict';

/**
 * @ngdoc function
 * @name feApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the feApp
 */
angular.module('feApp')
  .controller('auction', ["$scope", "Events", function ($scope,Events) {
      console.log("auction");
      $scope.pgno = {
          start:1,
          end : 10
      };
      $scope.pgnoy = {
          start:1,
          end : 10
      };
      const data = [{'Player': 'SK Raina', 'Runs': 4548, 'Wickets': 25.0, 'Age': 32, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Batsman', 'Rating': 10.0, 'Buy': 'Excellent Purchase'}, {'Player': 'V Kohli', 'Runs': 4423, 'Wickets': 4.0, 'Age': 30, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Batsman', 'Rating': 9.18, 'Buy': 'Excellent Purchase'}, {'Player': 'RG Sharma', 'Runs': 4207, 'Wickets': 15.0, 'Age': 31, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Batsman', 'Rating': 10.0, 'Buy': 'Excellent Purchase'}, {'Player': 'G Gambhir', 'Runs': 4132, 'Wickets': 0.0, 'Age': 37, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Legbreak', 'Country': 'India', 'Type': 'Batsman', 'Rating': 6.68, 'Buy': 'Good Buy'}, {'Player': 'DA Warner', 'Runs': 4014, 'Wickets': 0.0, 'Age': 32, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Legbreak', 'Country': 'Australia', 'Type': 'Batsman', 'Rating': 8.32, 'Buy': 'Excellent Purchase'}, {'Player': 'RV Uthappa', 'Runs': 3778, 'Wickets': 0.0, 'Age': 33, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Batsman', 'Rating': 7.5, 'Buy': 'Excellent Purchase'}, {'Player': 'CH Gayle', 'Runs': 3651, 'Wickets': 18.0, 'Age': 39, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'West Indies', 'Type': 'Batsman', 'Rating': 6.68, 'Buy': 'Good Buy'}, {'Player': 'S Dhawan', 'Runs': 3561, 'Wickets': 4.0, 'Age': 33, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Batsman', 'Rating': 7.5, 'Buy': 'Excellent Purchase'}, {'Player': 'MS Dhoni', 'Runs': 3560, 'Wickets': 0.0, 'Age': 37, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Batsman', 'Rating': 5.82, 'Buy': 'Good Buy'}, {'Player': 'AB de Villiers', 'Runs': 3486, 'Wickets': 0.0, 'Age': 35, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'South Africa', 'Type': 'Batsman', 'Rating': 5.0, 'Buy': 'Good Buy'}, {'Player': 'AM Rahane', 'Runs': 3057, 'Wickets': 1.0, 'Age': 30, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Batsman', 'Rating': 7.5, 'Buy': 'Excellent Purchase'}, {'Player': 'YK Pathan', 'Runs': 2922, 'Wickets': 41.0, 'Age': 36, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'All Rounder', 'Rating': 6.68, 'Buy': 'Good Buy'}, {'Player': 'BB McCullum', 'Runs': 2755, 'Wickets': 0.0, 'Age': 37, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'New Zealand', 'Type': 'Batsman', 'Rating': 4.18, 'Buy': 'Maybe'}, {'Player': 'V Sehwag', 'Runs': 2728, 'Wickets': 6.0, 'Age': 40, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Batsman', 'Rating': 4.18, 'Buy': 'Maybe'}, {'Player': 'SR Watson', 'Runs': 2628, 'Wickets': 86.0, 'Age': 37, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'Australia', 'Type': 'All Rounder', 'Rating': 8.32, 'Buy': 'Excellent Purchase'}, {'Player': 'Yuvraj Singh', 'Runs': 2591, 'Wickets': 36.0, 'Age': 37, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'India', 'Type': 'All Rounder', 'Rating': 6.68, 'Buy': 'Good Buy'}, {'Player': 'M Vijay', 'Runs': 2511, 'Wickets': 0.0, 'Age': 34, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Batsman', 'Rating': 5.82, 'Buy': 'Good Buy'}, {'Player': 'SE Marsh', 'Runs': 2489, 'Wickets': 0.0, 'Age': 35, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'Australia', 'Type': 'Batsman', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'JH Kallis', 'Runs': 2427, 'Wickets': 65.0, 'Age': 43, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'South Africa', 'Type': 'All Rounder', 'Rating': 6.68, 'Buy': 'Good Buy'}, {'Player': 'AT Rayudu', 'Runs': 2416, 'Wickets': 0.0, 'Age': 33, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Batsman', 'Rating': 5.0, 'Buy': 'Good Buy'}, {'Player': 'DR Smith', 'Runs': 2385, 'Wickets': 26.0, 'Age': 35, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'West Indies', 'Type': 'All Rounder', 'Rating': 5.0, 'Buy': 'Good Buy'}, {'Player': 'KA Pollard', 'Runs': 2354, 'Wickets': 56.0, 'Age': 31, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium-fast', 'Country': 'West Indies', 'Type': 'All Rounder', 'Rating': 9.18, 'Buy': 'Excellent Purchase'}, {'Player': 'SR Tendulkar', 'Runs': 2334, 'Wickets': 0.0, 'Age': 45, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Batsman', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'MK Pandey', 'Runs': 2223, 'Wickets': 0.0, 'Age': 29, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Batsman', 'Rating': 6.68, 'Buy': 'Good Buy'}, {'Player': 'R Dravid', 'Runs': 2174, 'Wickets': 0.0, 'Age': 46, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Batsman', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'AC Gilchrist', 'Runs': 2069, 'Wickets': 1.0, 'Age': 47, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'Australia', 'Type': 'Batsman', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'JP Duminy', 'Runs': 1993, 'Wickets': 23.0, 'Age': 34, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'South Africa', 'Type': 'Batsman', 'Rating': 5.82, 'Buy': 'Good Buy'}, {'Player': 'MEK Hussey', 'Runs': 1977, 'Wickets': 0.0, 'Age': 43, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'Australia', 'Type': 'Batsman', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'DPMD Jayawardene', 'Runs': 1808, 'Wickets': 0.0, 'Age': 41, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'Sri Lanka', 'Type': 'Batsman', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'RA Jadeja', 'Runs': 1732, 'Wickets': 82.0, 'Age': 30, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'India', 'Type': 'All Rounder', 'Rating': 9.18, 'Buy': 'Excellent Purchase'}, {'Player': 'SPD Smith', 'Runs': 1713, 'Wickets': 0.0, 'Age': 29, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Legbreak googly', 'Country': 'India', 'Type': 'Batsman', 'Rating': 5.82, 'Buy': 'Good Buy'}, {'Player': 'KC Sangakkara', 'Runs': 1687, 'Wickets': 0.0, 'Age': 41, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'Sri Lanka', 'Type': 'Batsman', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'MK Tiwary', 'Runs': 1648, 'Wickets': 1.0, 'Age': 33, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Legbreak googly', 'Country': 'India', 'Type': 'Batsman', 'Rating': 4.18, 'Buy': 'Maybe'}, {'Player': 'AJ Finch', 'Runs': 1604, 'Wickets': 1.0, 'Age': 32, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'Australia', 'Type': 'Batsman', 'Rating': 4.18, 'Buy': 'Maybe'}, {'Player': 'DA Miller', 'Runs': 1563, 'Wickets': 0.0, 'Age': 29, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'South Africa', 'Type': 'Batsman', 'Rating': 5.82, 'Buy': 'Good Buy'}, {'Player': 'S Badrinath', 'Runs': 1441, 'Wickets': 0.0, 'Age': 38, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Batsman', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'BJ Hodge', 'Runs': 1400, 'Wickets': 17.0, 'Age': 44, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'Australia', 'Type': 'Batsman', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'SC Ganguly', 'Runs': 1349, 'Wickets': 10.0, 'Age': 46, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Batsman', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'DJ Hussey', 'Runs': 1322, 'Wickets': 8.0, 'Age': 41, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'Australia', 'Type': 'Batsman', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'F du Plessis', 'Runs': 1295, 'Wickets': 0.0, 'Age': 34, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Legbreak', 'Country': 'South Africa', 'Type': 'Batsman', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'DJ Bravo', 'Runs': 1262, 'Wickets': 122.0, 'Age': 35, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium-fast', 'Country': 'West Indies', 'Type': 'All Rounder', 'Rating': 6.68, 'Buy': 'Good Buy'}, {'Player': 'GJ Maxwell', 'Runs': 1229, 'Wickets': 11.0, 'Age': 30, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'Australia', 'Type': 'Batsman', 'Rating': 5.0, 'Buy': 'Good Buy'}, {'Player': 'KK Nair', 'Runs': 1158, 'Wickets': 0.0, 'Age': 27, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Batsman', 'Rating': 5.82, 'Buy': 'Good Buy'}, {'Player': 'TM Dilshan', 'Runs': 1153, 'Wickets': 5.0, 'Age': 42, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'Sri Lanka', 'Type': 'Batsman', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'IK Pathan', 'Runs': 1150, 'Wickets': 80.0, 'Age': 34, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Left-arm medium-fast', 'Country': 'India', 'Type': 'All Rounder', 'Rating': 7.5, 'Buy': 'Excellent Purchase'}, {'Player': 'Mandeep Singh', 'Runs': 1112, 'Wickets': 0.0, 'Age': 27, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Batsman', 'Rating': 5.82, 'Buy': 'Good Buy'}, {'Player': 'ML Hayden', 'Runs': 1107, 'Wickets': 0.0, 'Age': 47, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'Australia', 'Type': 'Batsman', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'LMP Simmons', 'Runs': 1079, 'Wickets': 1.0, 'Age': 34, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium-fast', 'Country': 'West Indies', 'Type': 'Batsman', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'LRPL Taylor', 'Runs': 1017, 'Wickets': 0.0, 'Age': 34, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'New Zealand', 'Type': 'Batsman', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'KP Pietersen', 'Runs': 1001, 'Wickets': 7.0, 'Age': 38, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'South Africa', 'Type': 'Batsman', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'Y Venugopal Rao', 'Runs': 985, 'Wickets': 6.0, 'Age': 36, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Batsman', 'Rating': 0.83, 'Buy': 'Avoid'}, {'Player': 'JA Morkel', 'Runs': 975, 'Wickets': 85.0, 'Age': 37, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm medium-fast', 'Country': 'South Africa', 'Type': 'All Rounder', 'Rating': 5.0, 'Buy': 'Good Buy'}, {'Player': 'A Symonds', 'Runs': 974, 'Wickets': 20.0, 'Age': 43, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'Australia', 'Type': 'Batsman', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'CL White', 'Runs': 971, 'Wickets': 1.0, 'Age': 35, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Legbreak googly', 'Country': 'Australia', 'Type': 'Batsman', 'Rating': 0.83, 'Buy': 'Avoid'}, {'Player': 'MC Henriques', 'Runs': 969, 'Wickets': 38.0, 'Age': 32, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'Australia', 'Type': 'All Rounder', 'Rating': 5.0, 'Buy': 'Good Buy'}, {'Player': 'M Vohra', 'Runs': 957, 'Wickets': 0.0, 'Age': 25, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Batsman', 'Rating': 5.82, 'Buy': 'Good Buy'}, {'Player': 'KM Jadhav', 'Runs': 893, 'Wickets': 0.0, 'Age': 33, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Batsman', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'HH Gibbs', 'Runs': 886, 'Wickets': 0.0, 'Age': 44, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm bowler', 'Country': 'South Africa', 'Type': 'Batsman', 'Rating': 0.83, 'Buy': 'Avoid'}, {'Player': 'EJG Morgan', 'Runs': 854, 'Wickets': 0.0, 'Age': 32, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'England', 'Type': 'Batsman', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'SS Iyer', 'Runs': 807, 'Wickets': 0.0, 'Age': 24, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Legbreak googly', 'Country': 'India', 'Type': 'Batsman', 'Rating': 5.82, 'Buy': 'Good Buy'}, {'Player': 'Harbhajan Singh', 'Runs': 799, 'Wickets': 127.0, 'Age': 38, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'All Rounder', 'Rating': 6.68, 'Buy': 'Good Buy'}, {'Player': 'ST Jayasuriya', 'Runs': 768, 'Wickets': 13.0, 'Age': 49, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'Sri Lanka', 'Type': 'Batsman', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'STR Binny', 'Runs': 766, 'Wickets': 21.0, 'Age': 34, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Batsman', 'Rating': 4.18, 'Buy': 'Maybe'}, {'Player': 'GC Smith', 'Runs': 739, 'Wickets': 0.0, 'Age': 38, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'South Africa', 'Type': 'Batsman', 'Rating': 0.83, 'Buy': 'Avoid'}, {'Player': 'AD Mathews', 'Runs': 724, 'Wickets': 27.0, 'Age': 31, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'Sri Lanka', 'Type': 'All Rounder', 'Rating': 5.0, 'Buy': 'Good Buy'}, {'Player': 'TL Suman', 'Runs': 676, 'Wickets': 6.0, 'Age': 35, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Batsman', 'Rating': 0.83, 'Buy': 'Avoid'}, {'Player': 'AM Nayar', 'Runs': 672, 'Wickets': 9.0, 'Age': 35, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Batsman', 'Rating': 0.83, 'Buy': 'Avoid'}, {'Player': 'GJ Bailey', 'Runs': 663, 'Wickets': 0.0, 'Age': 36, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'Australia', 'Type': 'Batsman', 'Rating': 0.83, 'Buy': 'Avoid'}, {'Player': 'SA Yadav', 'Runs': 608, 'Wickets': 0.0, 'Age': 28, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Batsman', 'Rating': 4.18, 'Buy': 'Maybe'}, {'Player': 'AR Patel', 'Runs': 606, 'Wickets': 58.0, 'Age': 25, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'India', 'Type': 'All Rounder', 'Rating': 9.18, 'Buy': 'Excellent Purchase'}, {'Player': 'JD Ryder', 'Runs': 604, 'Wickets': 8.0, 'Age': 34, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'New Zealand', 'Type': 'Batsman', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'HM Amla', 'Runs': 577, 'Wickets': 0.0, 'Age': 35, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'South Africa', 'Type': 'Other', 'Rating': 0.83, 'Buy': 'Avoid'}, {'Player': 'AD Russell', 'Runs': 574, 'Wickets': 31.0, 'Age': 30, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast', 'Country': 'West Indies', 'Type': 'Bowler', 'Rating': 5.82, 'Buy': 'Good Buy'}, {'Player': 'RS Bopara', 'Runs': 531, 'Wickets': 11.0, 'Age': 33, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'England', 'Type': 'Other', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'JP Faulkner', 'Runs': 527, 'Wickets': 61.0, 'Age': 28, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Left-arm fast-medium', 'Country': 'Australia', 'Type': 'Bowler', 'Rating': 7.5, 'Buy': 'Excellent Purchase'}, {'Player': 'CJ Anderson', 'Runs': 521, 'Wickets': 8.0, 'Age': 28, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Left-arm medium-fast', 'Country': 'New Zealand', 'Type': 'Other', 'Rating': 4.18, 'Buy': 'Maybe'}, {'Player': 'PP Chawla', 'Runs': 515, 'Wickets': 126.0, 'Age': 30, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Legbreak', 'Country': 'India', 'Type': 'Bowler', 'Rating': 9.18, 'Buy': 'Excellent Purchase'}, {'Player': 'M Manhas', 'Runs': 514, 'Wickets': 0.0, 'Age': 39, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 0.83, 'Buy': 'Avoid'}, {'Player': 'OA Shah', 'Runs': 506, 'Wickets': 0.0, 'Age': 40, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'England', 'Type': 'Other', 'Rating': 0.83, 'Buy': 'Avoid'}, {'Player': 'PC Valthaty', 'Runs': 505, 'Wickets': 7.0, 'Age': 35, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 0.83, 'Buy': 'Avoid'}, {'Player': 'Shakib Al Hasan', 'Runs': 500, 'Wickets': 43.0, 'Age': 31, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'Bangladesh', 'Type': 'Bowler', 'Rating': 5.82, 'Buy': 'Good Buy'}, {'Player': 'KH Pandya', 'Runs': 480, 'Wickets': 16.0, 'Age': 27, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'India', 'Type': 'Other', 'Rating': 5.0, 'Buy': 'Good Buy'}, {'Player': 'CH Morris', 'Runs': 439, 'Wickets': 54.0, 'Age': 31, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'South Africa', 'Type': 'Bowler', 'Rating': 5.82, 'Buy': 'Good Buy'}, {'Player': 'N Rana', 'Runs': 437, 'Wickets': 0.0, 'Age': 25, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 5.0, 'Buy': 'Good Buy'}, {'Player': 'NLTC Perera', 'Runs': 424, 'Wickets': 31.0, 'Age': 29, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm medium-fast', 'Country': 'Sri Lanka', 'Type': 'Bowler', 'Rating': 5.82, 'Buy': 'Good Buy'}, {'Player': 'SA Asnodkar', 'Runs': 423, 'Wickets': 0.0, 'Age': 34, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'DT Christian', 'Runs': 420, 'Wickets': 30.0, 'Age': 35, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'Australia', 'Type': 'Bowler', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'JR Hopes', 'Runs': 417, 'Wickets': 14.0, 'Age': 40, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'Australia', 'Type': 'Other', 'Rating': 0.83, 'Buy': 'Avoid'}, {'Player': 'KS Williamson', 'Runs': 411, 'Wickets': 0.0, 'Age': 28, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'New Zealand', 'Type': 'Other', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'J Botha', 'Runs': 409, 'Wickets': 25.0, 'Age': 36, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'South Africa', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'HH Pandya', 'Runs': 406, 'Wickets': 10.0, 'Age': 25, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium-fast', 'Country': 'India', 'Type': 'Other', 'Rating': 5.82, 'Buy': 'Good Buy'}, {'Player': 'LR Shukla', 'Runs': 405, 'Wickets': 15.0, 'Age': 37, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 0.83, 'Buy': 'Avoid'}, {'Player': 'AL Menaria', 'Runs': 401, 'Wickets': 3.0, 'Age': 28, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'India', 'Type': 'Other', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'MV Boucher', 'Runs': 394, 'Wickets': 0.0, 'Age': 42, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'South Africa', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'CA Pujara', 'Runs': 390, 'Wickets': 0.0, 'Age': 31, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Legbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'Azhar Mahmood', 'Runs': 388, 'Wickets': 29.0, 'Age': 43, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'Pakistan', 'Type': 'Bowler', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'CA Lynn', 'Runs': 384, 'Wickets': 0.0, 'Age': 28, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'Australia', 'Type': 'Other', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'DB Ravi Teja', 'Runs': 375, 'Wickets': 1.0, 'Age': 31, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Legbreak googly', 'Country': 'India', 'Type': 'Other', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'DJ Hooda', 'Runs': 373, 'Wickets': 6.0, 'Age': 23, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 5.82, 'Buy': 'Good Buy'}, {'Player': 'S Sohal', 'Runs': 368, 'Wickets': 0.0, 'Age': 31, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Legbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'P Negi', 'Runs': 353, 'Wickets': 30.0, 'Age': 26, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'India', 'Type': 'Bowler', 'Rating': 6.68, 'Buy': 'Good Buy'}, {'Player': 'Gurkeerat Singh', 'Runs': 342, 'Wickets': 5.0, 'Age': 28, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'R Bhatia', 'Runs': 342, 'Wickets': 71.0, 'Age': 39, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium-fast', 'Country': 'India', 'Type': 'Bowler', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'A Mishra', 'Runs': 340, 'Wickets': 134.0, 'Age': 36, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Legbreak', 'Country': 'India', 'Type': 'Bowler', 'Rating': 5.82, 'Buy': 'Good Buy'}, {'Player': 'P Kumar', 'Runs': 340, 'Wickets': 90.0, 'Age': 32, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Bowler', 'Rating': 5.82, 'Buy': 'Good Buy'}, {'Player': 'JEC Franklin', 'Runs': 327, 'Wickets': 9.0, 'Age': 38, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Left-arm medium', 'Country': 'New Zealand', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'RN ten Doeschate', 'Runs': 326, 'Wickets': 2.0, 'Age': 38, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium-fast', 'Country': 'Netherlands', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'KV Sharma', 'Runs': 317, 'Wickets': 49.0, 'Age': 31, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Legbreak googly', 'Country': 'India', 'Type': 'Bowler', 'Rating': 5.0, 'Buy': 'Good Buy'}, {'Player': 'DB Das', 'Runs': 304, 'Wickets': 0.0, 'Age': 32, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Legbreak googly', 'Country': 'India', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'R Vinay Kumar', 'Runs': 304, 'Wickets': 103.0, 'Age': 35, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Bowler', 'Rating': 5.0, 'Buy': 'Good Buy'}, {'Player': 'LA Pomersbach', 'Runs': 302, 'Wickets': 0.0, 'Age': 34, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'Australia', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'UBT Chand', 'Runs': 300, 'Wickets': 0.0, 'Age': 25, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 5.0, 'Buy': 'Good Buy'}, {'Player': 'DJG Sammy', 'Runs': 295, 'Wickets': 11.0, 'Age': 35, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium-fast', 'Country': 'West Indies', 'Type': 'Other', 'Rating': 0.83, 'Buy': 'Avoid'}, {'Player': 'Y Nagar', 'Runs': 285, 'Wickets': 4.0, 'Age': 29, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'VVS Laxman', 'Runs': 282, 'Wickets': 0.0, 'Age': 44, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'GH Vihari', 'Runs': 280, 'Wickets': 1.0, 'Age': 25, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 5.0, 'Buy': 'Good Buy'}, {'Player': 'A Ashish Reddy', 'Runs': 280, 'Wickets': 18.0, 'Age': 27, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 5.0, 'Buy': 'Good Buy'}, {'Player': 'B Chipli', 'Runs': 280, 'Wickets': 0.0, 'Age': 36, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'MJ Lumb', 'Runs': 278, 'Wickets': 0.0, 'Age': 39, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'England', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'SP Narine', 'Runs': 271, 'Wickets': 95.0, 'Age': 30, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'West Indies', 'Type': 'Bowler', 'Rating': 6.68, 'Buy': 'Good Buy'}, {'Player': 'R Sathish', 'Runs': 270, 'Wickets': 3.0, 'Age': 38, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'M Kaif', 'Runs': 259, 'Wickets': 0.0, 'Age': 38, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'SM Katich', 'Runs': 241, 'Wickets': 0.0, 'Age': 43, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Slow left-arm chinaman', 'Country': 'Australia', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'MD Mishra', 'Runs': 237, 'Wickets': 0.0, 'Age': 35, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'R Ashwin', 'Runs': 231, 'Wickets': 100.0, 'Age': 32, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Bowler', 'Rating': 6.68, 'Buy': 'Good Buy'}, {'Player': 'MR Marsh', 'Runs': 225, 'Wickets': 20.0, 'Age': 27, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'Australia', 'Type': 'Other', 'Rating': 5.82, 'Buy': 'Good Buy'}, {'Player': 'K Goel', 'Runs': 218, 'Wickets': 0.0, 'Age': 32, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'AA Jhunjhunwala', 'Runs': 217, 'Wickets': 1.0, 'Age': 36, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'TM Head', 'Runs': 205, 'Wickets': 2.0, 'Age': 25, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'Australia', 'Type': 'Other', 'Rating': 5.0, 'Buy': 'Good Buy'}, {'Player': 'PD Collingwood', 'Runs': 203, 'Wickets': 5.0, 'Age': 42, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'England', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'SK Warne', 'Runs': 198, 'Wickets': 57.0, 'Age': 49, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Legbreak googly', 'Country': 'Australia', 'Type': 'Bowler', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'AS Raut', 'Runs': 194, 'Wickets': 0.0, 'Age': 31, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Legbreak googly', 'Country': 'India', 'Type': 'Other', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'Salman Butt', 'Runs': 193, 'Wickets': 0.0, 'Age': 34, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'Pakistan', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'MJ Guptill', 'Runs': 189, 'Wickets': 0.0, 'Age': 32, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'New Zealand', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'Bipul Sharma', 'Runs': 187, 'Wickets': 17.0, 'Age': 35, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'India', 'Type': 'Other', 'Rating': 0.83, 'Buy': 'Avoid'}, {'Player': 'FY Fazal', 'Runs': 183, 'Wickets': 0.0, 'Age': 33, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'AC Voges', 'Runs': 181, 'Wickets': 0.0, 'Age': 39, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'Australia', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'AB Agarkar', 'Runs': 179, 'Wickets': 29.0, 'Age': 41, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast', 'Country': 'India', 'Type': 'Bowler', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'MF Maharoof', 'Runs': 177, 'Wickets': 27.0, 'Age': 34, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'India', 'Type': 'Bowler', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'SN Khan', 'Runs': 177, 'Wickets': 0.0, 'Age': 21, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Legbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 6.68, 'Buy': 'Good Buy'}, {'Player': 'MN van Wyk', 'Runs': 167, 'Wickets': 0.0, 'Age': 39, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'South Africa', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'DW Steyn', 'Runs': 166, 'Wickets': 92.0, 'Age': 35, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast', 'Country': 'South Africa', 'Type': 'Bowler', 'Rating': 4.18, 'Buy': 'Maybe'}, {'Player': 'PA Reddy', 'Runs': 164, 'Wickets': 0.0, 'Age': 28, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Legbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'MP Stoinis', 'Runs': 163, 'Wickets': 10.0, 'Age': 29, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'Australia', 'Type': 'Other', 'Rating': 4.18, 'Buy': 'Maybe'}, {'Player': 'MN Samuels', 'Runs': 161, 'Wickets': 9.0, 'Age': 38, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'West Indies', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'RE van der Merwe', 'Runs': 159, 'Wickets': 21.0, 'Age': 34, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'South Africa', 'Type': 'Other', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'R McLaren', 'Runs': 159, 'Wickets': 12.0, 'Age': 36, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm medium-fast', 'Country': 'South Africa', 'Type': 'Other', 'Rating': 0.83, 'Buy': 'Avoid'}, {'Player': 'B Kumar', 'Runs': 158, 'Wickets': 111.0, 'Age': 29, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Bowler', 'Rating': 8.32, 'Buy': 'Excellent Purchase'}, {'Player': 'R Dhawan', 'Runs': 153, 'Wickets': 18.0, 'Age': 28, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium-fast', 'Country': 'India', 'Type': 'Other', 'Rating': 4.18, 'Buy': 'Maybe'}, {'Player': 'MG Johnson', 'Runs': 151, 'Wickets': 60.0, 'Age': 37, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Left-arm fast', 'Country': 'Australia', 'Type': 'Bowler', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'SM Pollock', 'Runs': 147, 'Wickets': 11.0, 'Age': 45, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'South Africa', 'Type': 'Other', 'Rating': 0.83, 'Buy': 'Avoid'}, {'Player': 'S Vidyut', 'Runs': 145, 'Wickets': 1.0, 'Age': 37, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'India', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'Sachin Baby', 'Runs': 137, 'Wickets': 2.0, 'Age': 30, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'SB Styris', 'Runs': 131, 'Wickets': 8.0, 'Age': 43, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'New Zealand', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'W Jaffer', 'Runs': 130, 'Wickets': 0.0, 'Age': 41, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'UT Khawaja', 'Runs': 127, 'Wickets': 0.0, 'Age': 32, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'Australia', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'P Dogra', 'Runs': 127, 'Wickets': 0.0, 'Age': 34, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Legbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'D Wiese', 'Runs': 127, 'Wickets': 16.0, 'Age': 33, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium-fast', 'Country': 'South Africa', 'Type': 'Other', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'M Morkel', 'Runs': 126, 'Wickets': 77.0, 'Age': 34, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm fast', 'Country': 'South Africa', 'Type': 'Bowler', 'Rating': 5.82, 'Buy': 'Good Buy'}, {'Player': 'MC Juneja', 'Runs': 125, 'Wickets': 0.0, 'Age': 28, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'BCJ Cutting', 'Runs': 124, 'Wickets': 7.0, 'Age': 32, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'Australia', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'B Lee', 'Runs': 124, 'Wickets': 25.0, 'Age': 42, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast', 'Country': 'Australia', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'AB McDonald', 'Runs': 123, 'Wickets': 11.0, 'Age': 37, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'Australia', 'Type': 'Other', 'Rating': 0.83, 'Buy': 'Avoid'}, {'Player': 'DL Vettori', 'Runs': 121, 'Wickets': 28.0, 'Age': 40, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'New Zealand', 'Type': 'Bowler', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'AC Blizzard', 'Runs': 120, 'Wickets': 0.0, 'Age': 34, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Left-arm medium', 'Country': 'Australia', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'RJ Harris', 'Runs': 117, 'Wickets': 45.0, 'Age': 39, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast', 'Country': 'Australia', 'Type': 'Bowler', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'Misbah-ul-Haq', 'Runs': 117, 'Wickets': 0.0, 'Age': 44, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Legbreak', 'Country': 'Pakistan', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'Z Khan', 'Runs': 117, 'Wickets': 102.0, 'Age': 40, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Left-arm fast-medium', 'Country': 'India', 'Type': 'Bowler', 'Rating': 5.0, 'Buy': 'Good Buy'}, {'Player': 'KK Cooper', 'Runs': 116, 'Wickets': 33.0, 'Age': 30, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'West Indies', 'Type': 'Bowler', 'Rating': 5.0, 'Buy': 'Good Buy'}, {'Player': 'M Kartik', 'Runs': 113, 'Wickets': 31.0, 'Age': 42, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'India', 'Type': 'Bowler', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'MM Sharma', 'Runs': 112, 'Wickets': 83.0, 'Age': 30, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Bowler', 'Rating': 6.68, 'Buy': 'Good Buy'}, {'Player': 'DJ Harris', 'Runs': 111, 'Wickets': 0.0, 'Age': 39, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'Australia', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'LJ Wright', 'Runs': 106, 'Wickets': 2.0, 'Age': 33, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium-fast', 'Country': 'England', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'JDP Oram', 'Runs': 106, 'Wickets': 9.0, 'Age': 40, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'New Zealand', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'RJ Quiney', 'Runs': 103, 'Wickets': 0.0, 'Age': 36, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'Australia', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'V Shankar', 'Runs': 101, 'Wickets': 0.0, 'Age': 28, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'MS Gony', 'Runs': 99, 'Wickets': 37.0, 'Age': 35, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Bowler', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'SD Chitnis', 'Runs': 99, 'Wickets': 2.0, 'Age': 31, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'MJ Clarke', 'Runs': 98, 'Wickets': 2.0, 'Age': 37, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'Australia', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'CJ Ferguson', 'Runs': 98, 'Wickets': 0.0, 'Age': 34, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'Australia', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'MA Starc', 'Runs': 96, 'Wickets': 34.0, 'Age': 29, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Left-arm fast', 'Country': 'Australia', 'Type': 'Bowler', 'Rating': 5.82, 'Buy': 'Good Buy'}, {'Player': 'CR Brathwaite', 'Runs': 95, 'Wickets': 8.0, 'Age': 30, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'West Indies', 'Type': 'Other', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'UT Yadav', 'Runs': 94, 'Wickets': 91.0, 'Age': 31, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'India', 'Type': 'Bowler', 'Rating': 6.68, 'Buy': 'Good Buy'}, {'Player': 'DJ Jacobs', 'Runs': 92, 'Wickets': 0.0, 'Age': 36, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'South Africa', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'RT Ponting', 'Runs': 91, 'Wickets': 0.0, 'Age': 44, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'Australia', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'S Rana', 'Runs': 91, 'Wickets': 0.0, 'Age': 34, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium-fast', 'Country': 'India', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'DS Kulkarni', 'Runs': 90, 'Wickets': 76.0, 'Age': 30, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Bowler', 'Rating': 6.68, 'Buy': 'Good Buy'}, {'Player': 'Iqbal Abdulla', 'Runs': 88, 'Wickets': 40.0, 'Age': 29, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'India', 'Type': 'Bowler', 'Rating': 5.82, 'Buy': 'Good Buy'}, {'Player': 'SL Malinga', 'Runs': 88, 'Wickets': 154.0, 'Age': 35, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast', 'Country': 'Sri Lanka', 'Type': 'Bowler', 'Rating': 6.68, 'Buy': 'Good Buy'}, {'Player': 'Ankit Sharma', 'Runs': 87, 'Wickets': 12.0, 'Age': 27, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'India', 'Type': 'Other', 'Rating': 5.0, 'Buy': 'Good Buy'}, {'Player': 'AP Majumdar', 'Runs': 87, 'Wickets': 0.0, 'Age': 34, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Legbreak googly', 'Country': 'India', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'RE Levi', 'Runs': 83, 'Wickets': 0.0, 'Age': 31, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'South Africa', 'Type': 'Other', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'Shahid Afridi', 'Runs': 81, 'Wickets': 9.0, 'Age': 38, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Legbreak googly', 'Country': 'Pakistan', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'WPUJC Vaas', 'Runs': 81, 'Wickets': 18.0, 'Age': 45, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Left-arm fast-medium', 'Country': 'Sri Lanka', 'Type': 'Other', 'Rating': 0.83, 'Buy': 'Avoid'}, {'Player': 'LA Carseldine', 'Runs': 81, 'Wickets': 1.0, 'Age': 43, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Left-arm medium', 'Country': 'Australia', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'AD Mascarenhas', 'Runs': 79, 'Wickets': 19.0, 'Age': 41, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'England', 'Type': 'Other', 'Rating': 0.83, 'Buy': 'Avoid'}, {'Player': 'PJ Cummins', 'Runs': 77, 'Wickets': 17.0, 'Age': 25, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast', 'Country': 'Australia', 'Type': 'Other', 'Rating': 5.82, 'Buy': 'Good Buy'}, {'Player': 'IR Jaggi', 'Runs': 76, 'Wickets': 0.0, 'Age': 30, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Legbreak googly', 'Country': 'India', 'Type': 'Other', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'B Akhil', 'Runs': 76, 'Wickets': 6.0, 'Age': 41, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium-fast', 'Country': 'India', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'TR Birt', 'Runs': 75, 'Wickets': 0.0, 'Age': 37, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'Australia', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'RR Sarwan', 'Runs': 73, 'Wickets': 0.0, 'Age': 38, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Legbreak', 'Country': 'West Indies', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'AA Bilakhia', 'Runs': 69, 'Wickets': 0.0, 'Age': 32, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'RR Powar', 'Runs': 67, 'Wickets': 13.0, 'Age': 40, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 0.83, 'Buy': 'Avoid'}, {'Player': 'R Sharma', 'Runs': 66, 'Wickets': 40.0, 'Age': 31, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Bowler', 'Rating': 5.0, 'Buy': 'Good Buy'}, {'Player': 'Mohammad Hafeez', 'Runs': 64, 'Wickets': 2.0, 'Age': 38, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'Pakistan', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'WD Parnell', 'Runs': 63, 'Wickets': 26.0, 'Age': 29, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Left-arm medium-fast', 'Country': 'South Africa', 'Type': 'Bowler', 'Rating': 5.0, 'Buy': 'Good Buy'}, {'Player': 'Anirudh Singh', 'Runs': 63, 'Wickets': 0.0, 'Age': 38, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'MJ McClenaghan', 'Runs': 63, 'Wickets': 54.0, 'Age': 32, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Left-arm fast-medium', 'Country': 'New Zealand', 'Type': 'Bowler', 'Rating': 5.0, 'Buy': 'Good Buy'}, {'Player': 'A Flintoff', 'Runs': 62, 'Wickets': 2.0, 'Age': 41, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'England', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'S Aravind', 'Runs': 59, 'Wickets': 45.0, 'Age': 34, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Left-arm medium-fast', 'Country': 'India', 'Type': 'Bowler', 'Rating': 4.18, 'Buy': 'Maybe'}, {'Player': 'WA Mota', 'Runs': 56, 'Wickets': 4.0, 'Age': 37, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'TG Southee', 'Runs': 54, 'Wickets': 22.0, 'Age': 30, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium-fast', 'Country': 'New Zealand', 'Type': 'Other', 'Rating': 4.18, 'Buy': 'Maybe'}, {'Player': 'RR Rossouw', 'Runs': 53, 'Wickets': 0.0, 'Age': 29, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'South Africa', 'Type': 'Other', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'A Chopra', 'Runs': 53, 'Wickets': 0.0, 'Age': 41, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'RP Singh', 'Runs': 52, 'Wickets': 90.0, 'Age': 33, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Left-arm fast-medium', 'Country': 'India', 'Type': 'Bowler', 'Rating': 5.82, 'Buy': 'Good Buy'}, {'Player': 'NM Coulter-Nile', 'Runs': 52, 'Wickets': 36.0, 'Age': 31, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast', 'Country': 'Australia', 'Type': 'Bowler', 'Rating': 5.0, 'Buy': 'Good Buy'}, {'Player': 'Shoaib Malik', 'Runs': 52, 'Wickets': 2.0, 'Age': 37, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'Pakistan', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'R Rampaul', 'Runs': 51, 'Wickets': 16.0, 'Age': 34, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'West Indies', 'Type': 'Other', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'KB Arun Karthik', 'Runs': 51, 'Wickets': 0.0, 'Age': 33, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Legbreak googly', 'Country': 'India', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'RV Gomez', 'Runs': 50, 'Wickets': 5.0, 'Age': 33, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'SB Bangar', 'Runs': 49, 'Wickets': 4.0, 'Age': 46, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium-fast', 'Country': 'India', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'J Suchith', 'Runs': 48, 'Wickets': 10.0, 'Age': 25, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'India', 'Type': 'Other', 'Rating': 5.82, 'Buy': 'Good Buy'}, {'Player': 'HV Patel', 'Runs': 47, 'Wickets': 34.0, 'Age': 28, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Bowler', 'Rating': 5.82, 'Buy': 'Good Buy'}, {'Player': 'Yashpal Singh', 'Runs': 47, 'Wickets': 0.0, 'Age': 37, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'Mohammed Shami', 'Runs': 46, 'Wickets': 18.0, 'Age': 28, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'India', 'Type': 'Other', 'Rating': 4.18, 'Buy': 'Maybe'}, {'Player': 'VR Aaron', 'Runs': 46, 'Wickets': 38.0, 'Age': 29, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast', 'Country': 'India', 'Type': 'Bowler', 'Rating': 5.82, 'Buy': 'Good Buy'}, {'Player': 'I Sharma', 'Runs': 45, 'Wickets': 58.0, 'Age': 30, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'India', 'Type': 'Bowler', 'Rating': 5.82, 'Buy': 'Good Buy'}, {'Player': 'Sunny Singh', 'Runs': 43, 'Wickets': 0.0, 'Age': 32, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium-fast', 'Country': 'India', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'JDS Neesham', 'Runs': 42, 'Wickets': 1.0, 'Age': 28, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'New Zealand', 'Type': 'Other', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'AB Barath', 'Runs': 42, 'Wickets': 0.0, 'Age': 28, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'SK Trivedi', 'Runs': 42, 'Wickets': 65.0, 'Age': 36, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Bowler', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'A Nehra', 'Runs': 41, 'Wickets': 106.0, 'Age': 39, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Left-arm medium-fast', 'Country': 'India', 'Type': 'Bowler', 'Rating': 5.0, 'Buy': 'Good Buy'}, {'Player': 'LPC Silva', 'Runs': 40, 'Wickets': 0.0, 'Age': 39, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Legbreak', 'Country': 'Sri Lanka', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'AUK Pathan', 'Runs': 39, 'Wickets': 0.0, 'Age': 34, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'DJ Thornely', 'Runs': 39, 'Wickets': 3.0, 'Age': 40, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'Australia', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'Umar Gul', 'Runs': 39, 'Wickets': 12.0, 'Age': 34, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'Pakistan', 'Type': 'Other', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'MM Patel', 'Runs': 39, 'Wickets': 74.0, 'Age': 35, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium-fast', 'Country': 'India', 'Type': 'Bowler', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'JO Holder', 'Runs': 38, 'Wickets': 5.0, 'Age': 27, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium-fast', 'Country': 'West Indies', 'Type': 'Other', 'Rating': 4.18, 'Buy': 'Maybe'}, {'Player': 'S Narwal', 'Runs': 37, 'Wickets': 5.0, 'Age': 36, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'AN Ahmed', 'Runs': 36, 'Wickets': 12.0, 'Age': 30, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium-fast', 'Country': 'India', 'Type': 'Other', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'L Balaji', 'Runs': 36, 'Wickets': 76.0, 'Age': 37, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium-fast', 'Country': 'India', 'Type': 'Bowler', 'Rating': 4.18, 'Buy': 'Maybe'}, {'Player': 'Joginder Sharma', 'Runs': 36, 'Wickets': 12.0, 'Age': 35, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'India', 'Type': 'Other', 'Rating': 0.83, 'Buy': 'Avoid'}, {'Player': 'KW Richardson', 'Runs': 36, 'Wickets': 18.0, 'Age': 28, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'Australia', 'Type': 'Other', 'Rating': 4.18, 'Buy': 'Maybe'}, {'Player': 'Sohail Tanvir', 'Runs': 36, 'Wickets': 22.0, 'Age': 34, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Left-arm medium-fast', 'Country': 'Pakistan', 'Type': 'Other', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'A Kumble', 'Runs': 35, 'Wickets': 45.0, 'Age': 48, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Legbreak googly', 'Country': 'India', 'Type': 'Bowler', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'B Sumanth', 'Runs': 35, 'Wickets': 0.0, 'Age': 30, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium-fast', 'Country': 'India', 'Type': 'Other', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'R Tewatia', 'Runs': 35, 'Wickets': 6.0, 'Age': 25, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Legbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 5.0, 'Buy': 'Good Buy'}, {'Player': 'S Sreesanth', 'Runs': 34, 'Wickets': 40.0, 'Age': 36, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'India', 'Type': 'Bowler', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'AP Dole', 'Runs': 34, 'Wickets': 5.0, 'Age': 31, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium-fast', 'Country': 'India', 'Type': 'Other', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'A Mithun', 'Runs': 34, 'Wickets': 7.0, 'Age': 29, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'Anureet Singh', 'Runs': 33, 'Wickets': 17.0, 'Age': 30, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'D Salunkhe', 'Runs': 33, 'Wickets': 1.0, 'Age': 36, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Legbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'RJ Peterson', 'Runs': 32, 'Wickets': 3.0, 'Age': 39, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'South Africa', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'T Taibu', 'Runs': 31, 'Wickets': 0.0, 'Age': 35, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'Zimbabwea', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'S Sriram', 'Runs': 31, 'Wickets': 0.0, 'Age': 42, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'India', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'C Munro', 'Runs': 30, 'Wickets': 0.0, 'Age': 31, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm medium-fast', 'Country': 'New Zealand', 'Type': 'Other', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'J Syed Mohammad', 'Runs': 29, 'Wickets': 8.0, 'Age': 35, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'India', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'VH Zol', 'Runs': 29, 'Wickets': 0.0, 'Age': 24, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 5.0, 'Buy': 'Good Buy'}, {'Player': 'SB Jakati', 'Runs': 28, 'Wickets': 47.0, 'Age': 38, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'India', 'Type': 'Bowler', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'JM Kemp', 'Runs': 26, 'Wickets': 3.0, 'Age': 41, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'South Africa', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'NL McCullum', 'Runs': 26, 'Wickets': 0.0, 'Age': 38, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'New Zealand', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'AB Dinda', 'Runs': 26, 'Wickets': 69.0, 'Age': 34, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium-fast', 'Country': 'India', 'Type': 'Bowler', 'Rating': 5.0, 'Buy': 'Good Buy'}, {'Player': 'S Nadeem', 'Runs': 26, 'Wickets': 37.0, 'Age': 29, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'India', 'Type': 'Bowler', 'Rating': 5.82, 'Buy': 'Good Buy'}, {'Player': 'Sandeep Sharma', 'Runs': 26, 'Wickets': 71.0, 'Age': 25, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Bowler', 'Rating': 8.32, 'Buy': 'Excellent Purchase'}, {'Player': 'JJ Bumrah', 'Runs': 25, 'Wickets': 46.0, 'Age': 25, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Bowler', 'Rating': 7.5, 'Buy': 'Excellent Purchase'}, {'Player': 'S Chanderpaul', 'Runs': 25, 'Wickets': 0.0, 'Age': 44, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Legbreak', 'Country': 'West Indies', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'MA Khote', 'Runs': 24, 'Wickets': 2.0, 'Age': 38, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'PJ Sangwan', 'Runs': 24, 'Wickets': 35.0, 'Age': 28, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Left-arm medium', 'Country': 'India', 'Type': 'Bowler', 'Rating': 5.82, 'Buy': 'Good Buy'}, {'Player': 'SW Tait', 'Runs': 23, 'Wickets': 23.0, 'Age': 35, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast', 'Country': 'Australia', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'BMAJ Mendis', 'Runs': 23, 'Wickets': 1.0, 'Age': 36, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Legbreak', 'Country': 'Sri Lanka', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'J Arunkumar', 'Runs': 23, 'Wickets': 0.0, 'Age': 44, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'MS Wade', 'Runs': 22, 'Wickets': 0.0, 'Age': 31, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'Australia', 'Type': 'Other', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'GB Hogg', 'Runs': 22, 'Wickets': 23.0, 'Age': 48, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Slow left-arm chinaman', 'Country': 'Australia', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'CA Ingram', 'Runs': 21, 'Wickets': 0.0, 'Age': 33, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Legbreak', 'Country': 'South Africa', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'DE Bollinger', 'Runs': 21, 'Wickets': 37.0, 'Age': 37, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Left-arm fast-medium', 'Country': 'Australia', 'Type': 'Bowler', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'Kuldeep Yadav', 'Runs': 20, 'Wickets': 18.0, 'Age': 24, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Slow left-arm chinaman', 'Country': 'India', 'Type': 'Other', 'Rating': 5.82, 'Buy': 'Good Buy'}, {'Player': 'Harpreet Singh', 'Runs': 20, 'Wickets': 0.0, 'Age': 27, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 4.18, 'Buy': 'Maybe'}, {'Player': 'NJ Maddinson', 'Runs': 20, 'Wickets': 0.0, 'Age': 27, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'Australia', 'Type': 'Other', 'Rating': 4.18, 'Buy': 'Maybe'}, {'Player': 'RR Raje', 'Runs': 20, 'Wickets': 6.0, 'Age': 32, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'India', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'AD Nath', 'Runs': 20, 'Wickets': 0.0, 'Age': 25, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium-fast', 'Country': 'India', 'Type': 'Other', 'Rating': 5.0, 'Buy': 'Good Buy'}, {'Player': 'AC Thomas', 'Runs': 20, 'Wickets': 14.0, 'Age': 42, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'England', 'Type': 'Other', 'Rating': 0.83, 'Buy': 'Avoid'}, {'Player': 'M Muralitharan', 'Runs': 20, 'Wickets': 64.0, 'Age': 46, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'Sri Lanka', 'Type': 'Bowler', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'A Mukund', 'Runs': 19, 'Wickets': 0.0, 'Age': 29, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Legbreak googly', 'Country': 'India', 'Type': 'Other', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'R Shukla', 'Runs': 19, 'Wickets': 5.0, 'Age': 28, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'R Bishnoi', 'Runs': 19, 'Wickets': 0.0, 'Age': 31, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium-fast', 'Country': 'India', 'Type': 'Other', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'Y Gnaneswara Rao', 'Runs': 19, 'Wickets': 0.0, 'Age': 34, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'DR Martyn', 'Runs': 19, 'Wickets': 0.0, 'Age': 47, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'Australia', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'P Sahu', 'Runs': 19, 'Wickets': 3.0, 'Age': 33, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Legbreak googly', 'Country': 'India', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'JJ van der Wath', 'Runs': 18, 'Wickets': 3.0, 'Age': 41, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium-fast', 'Country': 'South Africa', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'Imran Tahir', 'Runs': 18, 'Wickets': 47.0, 'Age': 39, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Legbreak googly', 'Country': 'India', 'Type': 'Bowler', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'Harmeet Singh', 'Runs': 18, 'Wickets': 26.0, 'Age': 26, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'India', 'Type': 'Bowler', 'Rating': 5.82, 'Buy': 'Good Buy'}, {'Player': 'PV Tambe', 'Runs': 18, 'Wickets': 28.0, 'Age': 47, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Legbreak', 'Country': 'India', 'Type': 'Bowler', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'DS Lehmann', 'Runs': 18, 'Wickets': 0.0, 'Age': 49, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'Australia', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'Parvez Rasool', 'Runs': 17, 'Wickets': 4.0, 'Age': 30, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'CK Kapugedera', 'Runs': 16, 'Wickets': 0.0, 'Age': 31, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'Sri Lanka', 'Type': 'Other', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'PP Ojha', 'Runs': 16, 'Wickets': 89.0, 'Age': 32, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'India', 'Type': 'Bowler', 'Rating': 5.82, 'Buy': 'Good Buy'}, {'Player': 'SA Abbott', 'Runs': 15, 'Wickets': 0.0, 'Age': 26, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'New Zealand', 'Type': 'Other', 'Rating': 4.18, 'Buy': 'Maybe'}, {'Player': 'KC Cariappa', 'Runs': 15, 'Wickets': 8.0, 'Age': 24, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Legbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 5.0, 'Buy': 'Good Buy'}, {'Player': 'GR Napier', 'Runs': 15, 'Wickets': 1.0, 'Age': 39, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'England', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'VY Mahesh', 'Runs': 15, 'Wickets': 21.0, 'Age': 31, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium-fast', 'Country': 'India', 'Type': 'Other', 'Rating': 4.18, 'Buy': 'Maybe'}, {'Player': 'YS Chahal', 'Runs': 15, 'Wickets': 70.0, 'Age': 28, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Legbreak googly', 'Country': 'India', 'Type': 'Bowler', 'Rating': 6.68, 'Buy': 'Good Buy'}, {'Player': 'S Gopal', 'Runs': 14, 'Wickets': 7.0, 'Age': 25, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Legbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 5.0, 'Buy': 'Good Buy'}, {'Player': 'F Behardien', 'Runs': 14, 'Wickets': 0.0, 'Age': 35, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'South Africa', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'DL Chahar', 'Runs': 14, 'Wickets': 1.0, 'Age': 26, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 4.18, 'Buy': 'Maybe'}, {'Player': 'S Badree', 'Runs': 13, 'Wickets': 11.0, 'Age': 37, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Legbreak', 'Country': 'West Indies', 'Type': 'Other', 'Rating': 0.83, 'Buy': 'Avoid'}, {'Player': 'KJ Abbott', 'Runs': 13, 'Wickets': 2.0, 'Age': 31, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'South Africa', 'Type': 'Other', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'K Upadhyay', 'Runs': 12, 'Wickets': 0.0, 'Age': 32, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'Swapnil Singh', 'Runs': 12, 'Wickets': 1.0, 'Age': 28, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'India', 'Type': 'Other', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'DAJ Bracewell', 'Runs': 12, 'Wickets': 3.0, 'Age': 28, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'New Zealand', 'Type': 'Other', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'T Thushara', 'Runs': 12, 'Wickets': 8.0, 'Age': 37, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Left-arm fast-medium', 'Country': 'Sri Lanka', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'AA Chavan', 'Runs': 12, 'Wickets': 8.0, 'Age': 33, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'India', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'Karanveer Singh', 'Runs': 12, 'Wickets': 12.0, 'Age': 31, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Legbreak googly', 'Country': 'India', 'Type': 'Other', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'T Henderson', 'Runs': 11, 'Wickets': 1.0, 'Age': 44, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'South Africa', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'T Kohli', 'Runs': 11, 'Wickets': 0.0, 'Age': 30, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'M Ntini', 'Runs': 11, 'Wickets': 7.0, 'Age': 41, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast', 'Country': 'South Africa', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'DNT Zoysa', 'Runs': 11, 'Wickets': 2.0, 'Age': 40, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Left-arm fast-medium', 'Country': 'Sri Lanka', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'J Theron', 'Runs': 10, 'Wickets': 11.0, 'Age': 33, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium-fast', 'Country': 'South Africa', 'Type': 'Other', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'D du Preez', 'Runs': 10, 'Wickets': 4.0, 'Age': 37, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'South Africa', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'TD Paine', 'Runs': 10, 'Wickets': 0.0, 'Age': 34, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'Australia', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'AG Murtaza', 'Runs': 10, 'Wickets': 9.0, 'Age': 29, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'India', 'Type': 'Other', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'SMSM Senanayake', 'Runs': 10, 'Wickets': 9.0, 'Age': 34, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'Sri Lanka', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'KAJ Roach', 'Runs': 10, 'Wickets': 0.0, 'Age': 30, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast', 'Country': 'West Indies', 'Type': 'Other', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'X Thalaivan Sargunam', 'Runs': 10, 'Wickets': 0.0, 'Age': 33, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'S Kaul', 'Runs': 9, 'Wickets': 22.0, 'Age': 28, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 5.0, 'Buy': 'Good Buy'}, {'Player': 'SM Harwood', 'Runs': 9, 'Wickets': 3.0, 'Age': 44, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'Australia', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'AA Noffke', 'Runs': 9, 'Wickets': 1.0, 'Age': 41, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'Australia', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'CK Langeveldt', 'Runs': 8, 'Wickets': 13.0, 'Age': 44, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'England', 'Type': 'Other', 'Rating': 0.83, 'Buy': 'Avoid'}, {'Player': 'Jaskaran Singh', 'Runs': 8, 'Wickets': 6.0, 'Age': 29, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'CJ McKay', 'Runs': 8, 'Wickets': 1.0, 'Age': 35, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'Australia', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'TM Srivastava', 'Runs': 8, 'Wickets': 0.0, 'Age': 29, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'SN Thakur', 'Runs': 7, 'Wickets': 12.0, 'Age': 27, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 5.0, 'Buy': 'Good Buy'}, {'Player': 'VS Malik', 'Runs': 7, 'Wickets': 6.0, 'Age': 35, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'UA Birla', 'Runs': 7, 'Wickets': 0.0, 'Age': 29, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'Pankaj Singh', 'Runs': 7, 'Wickets': 11.0, 'Age': 33, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium-fast', 'Country': 'India', 'Type': 'Other', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'AN Ghosh', 'Runs': 7, 'Wickets': 0.0, 'Age': 32, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'I Malhotra', 'Runs': 7, 'Wickets': 0.0, 'Age': 34, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium-fast', 'Country': 'India', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'AF Milne', 'Runs': 7, 'Wickets': 4.0, 'Age': 26, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast', 'Country': 'New Zealand', 'Type': 'Other', 'Rating': 4.18, 'Buy': 'Maybe'}, {'Player': 'BA Bhatt', 'Runs': 6, 'Wickets': 12.0, 'Age': 28, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'India', 'Type': 'Other', 'Rating': 4.18, 'Buy': 'Maybe'}, {'Player': 'J Yadav', 'Runs': 6, 'Wickets': 4.0, 'Age': 29, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'SB Joshi', 'Runs': 6, 'Wickets': 1.0, 'Age': 48, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'India', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'AS Rajpoot', 'Runs': 6, 'Wickets': 8.0, 'Age': 25, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 5.0, 'Buy': 'Good Buy'}, {'Player': 'SS Shaikh', 'Runs': 6, 'Wickets': 0.0, 'Age': 32, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'P Awana', 'Runs': 5, 'Wickets': 39.0, 'Age': 32, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Bowler', 'Rating': 4.18, 'Buy': 'Maybe'}, {'Player': 'SJ Srivastava', 'Runs': 5, 'Wickets': 14.0, 'Age': 37, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Left-arm fast-medium', 'Country': 'India', 'Type': 'Other', 'Rating': 0.83, 'Buy': 'Avoid'}, {'Player': 'Shivam Sharma', 'Runs': 5, 'Wickets': 4.0, 'Age': 25, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 5.0, 'Buy': 'Good Buy'}, {'Player': 'KMDN Kulasekara', 'Runs': 5, 'Wickets': 5.0, 'Age': 36, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'Sri Lanka', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'JD Unadkat', 'Runs': 5, 'Wickets': 56.0, 'Age': 27, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Left-arm medium', 'Country': 'India', 'Type': 'Bowler', 'Rating': 7.5, 'Buy': 'Excellent Purchase'}, {'Player': 'TA Boult', 'Runs': 5, 'Wickets': 15.0, 'Age': 29, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Left-arm fast-medium', 'Country': 'New Zealand', 'Type': 'Other', 'Rating': 4.18, 'Buy': 'Maybe'}, {'Player': 'A Zampa', 'Runs': 5, 'Wickets': 19.0, 'Age': 26, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Legbreak googly', 'Country': 'Australia', 'Type': 'Other', 'Rating': 5.0, 'Buy': 'Good Buy'}, {'Player': 'A Uniyal', 'Runs': 4, 'Wickets': 2.0, 'Age': 37, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Left-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'GD McGrath', 'Runs': 4, 'Wickets': 12.0, 'Age': 49, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'Australia', 'Type': 'Other', 'Rating': 0.83, 'Buy': 'Avoid'}, {'Player': 'VRV Singh', 'Runs': 4, 'Wickets': 12.0, 'Age': 34, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium-fast', 'Country': 'India', 'Type': 'Other', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'BB Sran', 'Runs': 4, 'Wickets': 14.0, 'Age': 26, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Left-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 5.0, 'Buy': 'Good Buy'}, {'Player': 'RS Sodhi', 'Runs': 4, 'Wickets': 0.0, 'Age': 38, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'DP Nannes', 'Runs': 4, 'Wickets': 28.0, 'Age': 42, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Left-arm fast', 'Country': 'Australia', 'Type': 'Bowler', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'FH Edwards', 'Runs': 4, 'Wickets': 5.0, 'Age': 37, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast', 'Country': 'West Indies', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'A Chandila', 'Runs': 4, 'Wickets': 11.0, 'Age': 35, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 0.83, 'Buy': 'Avoid'}, {'Player': 'B Laughlin', 'Runs': 4, 'Wickets': 1.0, 'Age': 36, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'Australia', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'CRD Fernando', 'Runs': 4, 'Wickets': 17.0, 'Age': 39, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'Sri Lanka', 'Type': 'Other', 'Rating': 0.83, 'Buy': 'Avoid'}, {'Player': 'JE Taylor', 'Runs': 3, 'Wickets': 6.0, 'Age': 34, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast', 'Country': 'New Zealand', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'CJ Jordan', 'Runs': 3, 'Wickets': 12.0, 'Age': 30, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'England', 'Type': 'Other', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'R Ninan', 'Runs': 3, 'Wickets': 3.0, 'Age': 33, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'Mohammad Asif', 'Runs': 3, 'Wickets': 8.0, 'Age': 36, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'Pakistan', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'D Kalyankrishna', 'Runs': 3, 'Wickets': 2.0, 'Age': 35, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium-fast', 'Country': 'India', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'S Tyagi', 'Runs': 3, 'Wickets': 6.0, 'Age': 31, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'Younis Khan', 'Runs': 3, 'Wickets': 0.0, 'Age': 41, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'Pakistan', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'Kamran Khan', 'Runs': 3, 'Wickets': 10.0, 'Age': 27, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Left-arm medium-fast', 'Country': 'India', 'Type': 'Other', 'Rating': 5.0, 'Buy': 'Good Buy'}, {'Player': 'BAW Mendis', 'Runs': 3, 'Wickets': 8.0, 'Age': 33, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'Sri Lanka', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'A Singh', 'Runs': 2, 'Wickets': 28.0, 'Age': 37, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium-fast', 'Country': 'India', 'Type': 'Bowler', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'SB Wagh', 'Runs': 2, 'Wickets': 5.0, 'Age': 30, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Left-arm medium-fast', 'Country': 'India', 'Type': 'Other', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'KP Appanna', 'Runs': 2, 'Wickets': 9.0, 'Age': 30, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'India', 'Type': 'Other', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'VS Yeligati', 'Runs': 2, 'Wickets': 0.0, 'Age': 33, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'Mashrafe Mortaza', 'Runs': 2, 'Wickets': 0.0, 'Age': 35, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'Bangladesh', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'RS Gavaskar', 'Runs': 2, 'Wickets': 0.0, 'Age': 42, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'India', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'S Randiv', 'Runs': 2, 'Wickets': 6.0, 'Age': 34, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'Sri Lanka', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'RG More', 'Runs': 2, 'Wickets': 1.0, 'Age': 27, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 4.18, 'Buy': 'Maybe'}, {'Player': 'Shoaib Akhtar', 'Runs': 2, 'Wickets': 5.0, 'Age': 43, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast', 'Country': 'Pakistan', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'Mohammad Ashraful', 'Runs': 2, 'Wickets': 0.0, 'Age': 34, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'Bangladesh', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'M de Lange', 'Runs': 1, 'Wickets': 5.0, 'Age': 28, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast', 'Country': 'South Africa', 'Type': 'Other', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'DJ Muthuswami', 'Runs': 1, 'Wickets': 4.0, 'Age': 37, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'SE Bond', 'Runs': 1, 'Wickets': 9.0, 'Age': 43, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast', 'Country': 'New Zealand', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'P Parameswaran', 'Runs': 1, 'Wickets': 9.0, 'Age': 33, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Left-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'DP Vijaykumar', 'Runs': 1, 'Wickets': 4.0, 'Age': 32, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'NJ Rimmington', 'Runs': 1, 'Wickets': 0.0, 'Age': 36, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'Australia', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'PM Sarvesh Kumar', 'Runs': 1, 'Wickets': 1.0, 'Age': 29, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'Shoaib Ahmed', 'Runs': 1, 'Wickets': 5.0, 'Age': 28, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'Pakistan', 'Type': 'Other', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'BE Hendricks', 'Runs': 1, 'Wickets': 9.0, 'Age': 28, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Left-arm fast-medium', 'Country': 'South Africa', 'Type': 'Other', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'L Ablish', 'Runs': 0, 'Wickets': 3.0, 'Age': 36, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium-fast', 'Country': 'India', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'C Nanda', 'Runs': 0, 'Wickets': 2.0, 'Age': 39, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Legbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'YA Abdulla', 'Runs': 0, 'Wickets': 15.0, 'Age': 36, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Left-arm fast-medium', 'Country': 'India', 'Type': 'Other', 'Rating': 0.83, 'Buy': 'Avoid'}, {'Player': 'Sunny Gupta', 'Runs': 0, 'Wickets': 0.0, 'Age': 30, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 2.5, 'Buy': 'Maybe'}, {'Player': 'V Pratap Singh', 'Runs': 0, 'Wickets': 10.0, 'Age': 26, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 5.0, 'Buy': 'Good Buy'}, {'Player': 'M Ashwin', 'Runs': 0, 'Wickets': 7.0, 'Age': 28, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Legbreak googly', 'Country': 'India', 'Type': 'Other', 'Rating': 3.32, 'Buy': 'Maybe'}, {'Player': 'ND Doshi', 'Runs': 0, 'Wickets': 2.0, 'Age': 40, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'India', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'IC Pandey', 'Runs': 0, 'Wickets': 18.0, 'Age': 29, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 4.18, 'Buy': 'Maybe'}, {'Player': 'Abdur Razzak', 'Runs': 0, 'Wickets': 0.0, 'Age': 36, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'Bangladesh', 'Type': 'Other', 'Rating': 0.0, 'Buy': 'Avoid'}, {'Player': 'S Kaushik', 'Runs': 0, 'Wickets': 6.0, 'Age': 23, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Slow left-arm chinaman', 'Country': 'India', 'Type': 'Other', 'Rating': 5.82, 'Buy': 'Good Buy'}, {'Player': 'S Ladda', 'Runs': 0, 'Wickets': 5.0, 'Age': 32, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Legbreak', 'Country': 'India', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}, {'Player': 'RR Bhatkal', 'Runs': 0, 'Wickets': 0.0, 'Age': 33, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Other', 'Rating': 1.67, 'Buy': 'Avoid'}];
      $scope.players = data.slice($scope.pgno.start,$scope.pgno.end+1);


      const youngData = [{'Player': 'AR Patel', 'Runs': 606, 'Wickets': 58.0, 'Age': 25, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'India', 'Type': 'All Rounder', 'Rating': 9.18, 'Buy': 'Excellent Purchase'}, {'Player': 'Sandeep Sharma', 'Runs': 26, 'Wickets': 71.0, 'Age': 25, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Bowler', 'Rating': 8.32, 'Buy': 'Excellent Purchase'}, {'Player': 'JJ Bumrah', 'Runs': 25, 'Wickets': 46.0, 'Age': 25, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Bowler', 'Rating': 7.5, 'Buy': 'Excellent Purchase'}, {'Player': 'JD Unadkat', 'Runs': 5, 'Wickets': 56.0, 'Age': 27, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Left-arm medium', 'Country': 'India', 'Type': 'Bowler', 'Rating': 7.5, 'Buy': 'Excellent Purchase'}];
      $scope.youngPlayers = youngData;

      const expPlayers = [{'Player': 'V Kohli', 'Runs': 4423, 'Wickets': 4.0, 'Age': 30, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Batsman', 'Rating': 9.18, 'Buy': 'Excellent Purchase'}, {'Player': 'RG Sharma', 'Runs': 4207, 'Wickets': 15.0, 'Age': 31, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'India', 'Type': 'Batsman', 'Rating': 10.0, 'Buy': 'Excellent Purchase'}, {'Player': 'AM Rahane', 'Runs': 3057, 'Wickets': 1.0, 'Age': 30, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Batsman', 'Rating': 7.5, 'Buy': 'Excellent Purchase'}, {'Player': 'KA Pollard', 'Runs': 2354, 'Wickets': 56.0, 'Age': 31, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium-fast', 'Country': 'West Indies', 'Type': 'All Rounder', 'Rating': 9.18, 'Buy': 'Excellent Purchase'}, {'Player': 'MK Pandey', 'Runs': 2223, 'Wickets': 0.0, 'Age': 29, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Batsman', 'Rating': 6.68, 'Buy': 'Good Buy'}, {'Player': 'RA Jadeja', 'Runs': 1732, 'Wickets': 82.0, 'Age': 30, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Slow left-arm orthodox', 'Country': 'India', 'Type': 'All Rounder', 'Rating': 9.18, 'Buy': 'Excellent Purchase'}, {'Player': 'JP Faulkner', 'Runs': 527, 'Wickets': 61.0, 'Age': 28, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Left-arm fast-medium', 'Country': 'Australia', 'Type': 'Bowler', 'Rating': 7.5, 'Buy': 'Excellent Purchase'}, {'Player': 'PP Chawla', 'Runs': 515, 'Wickets': 126.0, 'Age': 30, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Legbreak', 'Country': 'India', 'Type': 'Bowler', 'Rating': 9.18, 'Buy': 'Excellent Purchase'}, {'Player': 'SP Narine', 'Runs': 271, 'Wickets': 95.0, 'Age': 30, 'Batting Skill': 'Left_Hand', 'Bowling Skill': 'Right-arm offbreak', 'Country': 'West Indies', 'Type': 'Bowler', 'Rating': 6.68, 'Buy': 'Good Buy'}, {'Player': 'B Kumar', 'Runs': 158, 'Wickets': 111.0, 'Age': 29, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Bowler', 'Rating': 8.32, 'Buy': 'Excellent Purchase'}, {'Player': 'MM Sharma', 'Runs': 112, 'Wickets': 83.0, 'Age': 30, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Bowler', 'Rating': 6.68, 'Buy': 'Good Buy'}, {'Player': 'UT Yadav', 'Runs': 94, 'Wickets': 91.0, 'Age': 31, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm fast-medium', 'Country': 'India', 'Type': 'Bowler', 'Rating': 6.68, 'Buy': 'Good Buy'}, {'Player': 'DS Kulkarni', 'Runs': 90, 'Wickets': 76.0, 'Age': 30, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Right-arm medium', 'Country': 'India', 'Type': 'Bowler', 'Rating': 6.68, 'Buy': 'Good Buy'}, {'Player': 'YS Chahal', 'Runs': 15, 'Wickets': 70.0, 'Age': 28, 'Batting Skill': 'Right_Hand', 'Bowling Skill': 'Legbreak googly', 'Country': 'India', 'Type': 'Bowler', 'Rating': 6.68, 'Buy': 'Good Buy'}];
      $scope.expsPlayers = expPlayers.slice($scope.pgnoy.start,$scope.pgnoy.end+1);;

        console.log($scope.youngPlayers.length);
        $scope.previous = (ind)=>{
                if($scope.pgno.start - 10 > 0){
                    $scope.pgno.start -=10;
                    $scope.pgno.end -=10;
                    $scope.players = data.slice($scope.pgno.start,$scope.pgno.end+1);
                }
        };

        $scope.next = (ind)=>{
                if($scope.pgno.end < data.length){
                    $scope.pgno.start +=10;
                    $scope.pgno.end +=10;
                    $scope.players = data.slice($scope.pgno.start,$scope.pgno.end+1);
                }
        };


      $scope.previousExp = (ind)=>{
          if($scope.pgnoy.start - 10 > 0){
              $scope.pgnoy.start -=10;
              $scope.pgnoy.end -=10;
              $scope.expsPlayers = expPlayers.slice($scope.pgnoy.start,$scope.pgnoy.end+1);
          }
      };

      $scope.nextExp = (ind)=>{
          if($scope.pgnoy.end < data.length){
              $scope.pgnoy.start +=10;
              $scope.pgnoy.end +=10;
              $scope.expsPlayers = expPlayers.slice($scope.pgnoy.start,$scope.pgnoy.end+1);
          }
      };

  }]);

angular.module('feApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/auction.html',
    "<style>form {\n" +
    "        width: 380px;\n" +
    "        margin: 4em auto;\n" +
    "        padding: 3em 2em 2em 2em;\n" +
    "        background: #fafafa;\n" +
    "        border: 1px solid #ebebeb;\n" +
    "        box-shadow: rgba(0,0,0.5,0.54902) 0px 1px 1px 0px,rgba(0,0,0.5,0.05804) 0px 1px 2px 0px;\n" +
    "    }\n" +
    "\n" +
    "    .group {\n" +
    "        position: relative;\n" +
    "        margin-bottom: 45px;\n" +
    "    }\n" +
    "\n" +
    "    .modal-content{\n" +
    "        height:500px;\n" +
    "    }\n" +
    "\n" +
    "    input {\n" +
    "        font-size: 18px;\n" +
    "        padding: 10px 10px 10px 5px;\n" +
    "        -webkit-appearance: none;\n" +
    "        display: block;\n" +
    "        background: #fafafa;\n" +
    "        color: #636363;\n" +
    "        width: 100%;\n" +
    "        border: none;\n" +
    "        border-radius: 0;\n" +
    "        border-bottom: 1px solid #757575;\n" +
    "    }\n" +
    "\n" +
    "    input:focus { outline: none; }\n" +
    "\n" +
    "\n" +
    "    /* Label */\n" +
    "\n" +
    "    label {\n" +
    "        color: #999;\n" +
    "        font-size: 18px;\n" +
    "        font-weight: normal;\n" +
    "        position: absolute;\n" +
    "        pointer-events: none;\n" +
    "        left: 5px;\n" +
    "        top: 10px;\n" +
    "        transition: all 0.2s ease;\n" +
    "    }\n" +
    "\n" +
    "\n" +
    "    /* active */\n" +
    "\n" +
    "    input:focus ~ label, input.used ~ label {\n" +
    "        top: -20px;\n" +
    "        transform: scale(.75); left: -2px;\n" +
    "        /* font-size: 14px; */\n" +
    "        color: #4a89dc;\n" +
    "    }\n" +
    "\n" +
    "\n" +
    "    /* Underline */\n" +
    "\n" +
    "    .bar {\n" +
    "        position: relative;\n" +
    "        display: block;\n" +
    "        width: 100%;\n" +
    "    }\n" +
    "\n" +
    "    .bar:before, .bar:after {\n" +
    "        content: '';\n" +
    "        height: 2px;\n" +
    "        width: 0;\n" +
    "        bottom: 1px;\n" +
    "        position: absolute;\n" +
    "        background: #4a89dc;\n" +
    "        transition: all 0.2s ease;\n" +
    "    }\n" +
    "\n" +
    "    .bar:before { left: 50%; }\n" +
    "\n" +
    "    .bar:after { right: 50%; }\n" +
    "\n" +
    "\n" +
    "    /* active */\n" +
    "\n" +
    "    input:focus ~ .bar:before, input:focus ~ .bar:after { width: 50%; }\n" +
    "\n" +
    "\n" +
    "    /* Highlight */\n" +
    "\n" +
    "    .highlight {\n" +
    "        position: absolute;\n" +
    "        height: 60%;\n" +
    "        width: 100px;\n" +
    "        top: 25%;\n" +
    "        left: 0;\n" +
    "        pointer-events: none;\n" +
    "        opacity: 0.5;\n" +
    "    }\n" +
    "\n" +
    "\n" +
    "    /* active */\n" +
    "\n" +
    "    input:focus ~ .highlight {\n" +
    "        animation: inputHighlighter 0.3s ease;\n" +
    "    }\n" +
    "\n" +
    "\n" +
    "    /* Animations */\n" +
    "\n" +
    "    @keyframes inputHighlighter {\n" +
    "        from { background: #4a89dc; }\n" +
    "        to \t{ width: 0; background: transparent; }\n" +
    "    }\n" +
    "\n" +
    "\n" +
    "    /* Button */\n" +
    "\n" +
    "    .button {\n" +
    "        position: relative;\n" +
    "        display: inline-block;\n" +
    "        padding: 12px 24px;\n" +
    "        margin: .3em 0 1em 0;\n" +
    "        width: 100%;\n" +
    "        vertical-align: middle;\n" +
    "        color: #fff;\n" +
    "        font-size: 16px;\n" +
    "        line-height: 20px;\n" +
    "        -webkit-font-smoothing: antialiased;\n" +
    "        text-align: center;\n" +
    "        letter-spacing: 1px;\n" +
    "        background: transparent;\n" +
    "        border: 0;\n" +
    "        border-bottom: 2px solid #3160B6;\n" +
    "        cursor: pointer;\n" +
    "        transition: all 0.15s ease;\n" +
    "    }\n" +
    "    .button:focus { outline: 0; }\n" +
    "\n" +
    "\n" +
    "    /* Button modifiers */\n" +
    "\n" +
    "    .buttonBlue {\n" +
    "        background: #4a89dc;\n" +
    "        text-shadow: 1px 1px 0 rgba(39, 110, 204, .5);\n" +
    "    }\n" +
    "\n" +
    "    .buttonBlue:hover { background: #357bd8; }\n" +
    "\n" +
    "\n" +
    "    /* Ripples container */\n" +
    "\n" +
    "    .ripples {\n" +
    "        position: absolute;\n" +
    "        top: 0;\n" +
    "        left: 0;\n" +
    "        width: 100%;\n" +
    "        height: 100%;\n" +
    "        overflow: hidden;\n" +
    "        background: transparent;\n" +
    "    }\n" +
    "\n" +
    "\n" +
    "    /* Ripples circle */\n" +
    "\n" +
    "    .ripplesCircle {\n" +
    "        position: absolute;\n" +
    "        top: 50%;\n" +
    "        left: 50%;\n" +
    "        transform: translate(-50%, -50%);\n" +
    "        opacity: 0;\n" +
    "        width: 0;\n" +
    "        height: 0;\n" +
    "        border-radius: 50%;\n" +
    "        background: rgba(255, 255, 255, 0.25);\n" +
    "    }\n" +
    "\n" +
    "    .ripples.is-active .ripplesCircle {\n" +
    "        animation: ripples .4s ease-in;\n" +
    "    }\n" +
    "\n" +
    "\n" +
    "    /* Ripples animation */\n" +
    "\n" +
    "    @keyframes ripples {\n" +
    "        0% { opacity: 0; }\n" +
    "\n" +
    "        25% { opacity: 1; }\n" +
    "\n" +
    "        100% {\n" +
    "            width: 200%;\n" +
    "            padding-bottom: 200%;\n" +
    "            opacity: 0;\n" +
    "        }\n" +
    "    }</style> <!--<h1 style=\"text-align: center;\">--> <!--RISK SCORE CALCULATOR FOR BUSINESSES--> <!--</h1>--> <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\"> <ul class=\"navbar-nav mr-auto\"> <li class=\"nav-item\" ui-sref=\"insights\"> <a class=\"navbar-brand\" href=\"\">Sports Data Analysis</a> </li> <li class=\"nav-item\" ui-sref=\"insights\"> <a class=\"nav-link\" href=\"\">Visualization</a> </li> <li class=\"nav-item active\" ui-sref=\"auction\"> <a class=\"nav-link\" href=\"\">Auction Data</a> </li> </ul> </nav> <div class=\"container\"> <div> <div class=\"row\" style=\"margin-top: 5%\"> <div class=\"jumbotron jumbotron-fluid ist-group col-md-12\" style=\"background: #8ad2ab\"> <div class=\"container text-center\"> <h1 class=\"display-4\">Data that matters..!</h1> <p class=\"lead\"></p> </div> </div> </div> <div class=\"row col-md-12\"> <div class=\"row col-md-12\"> <div class=\"col-md-12\"> <table class=\"table table-bordered\" style=\"background: white\"> <thead> <tr> <th scope=\"col\">Name</th> <th scope=\"col\">Runs</th> <th scope=\"col\">Wickets</th> <th scope=\"col\">Age</th> <th scope=\"col\">Type</th> <th scope=\"col\">Rating</th> <th scope=\"col\">Buy?</th> </tr> </thead> <tbody> <tr ng-repeat=\"player in players\"> <td>{{player.Player}}</td> <td>{{player.Runs}}</td> <td>{{player.Wickets}}</td> <td>{{player.Age}}</td> <td>{{player.Type}}</td> <td>{{player.Rating}}</td> <td>{{player.Buy}}</td> </tr> </tbody> </table> <nav aria-label=\"Page navigation example\"> <ul class=\"pagination\"> <li style=\"cursor: pointer\" ng-click=\"previous()\" class=\"page-item\"><a class=\"page-link\">Previous</a></li> <li style=\"cursor: pointer\" ng-click=\"next()\" class=\"page-item\"><a class=\"page-link\">Next</a></li> </ul> </nav> </div> </div> </div> </div> <div> <div class=\"row\" style=\"margin-top: 5%\"> <div class=\"jumbotron jumbotron-fluid ist-group col-md-12\" style=\"background: #6793c1\"> <div class=\"container text-center\"> <h1 class=\"display-4\">Players with potential</h1> <p class=\"lead\">Our model identifies these players with great potential in the league.</p> </div> </div> </div> <div class=\"row col-md-12\"> <div class=\"row col-md-12\"> <div class=\"col-md-12\"> <table class=\"table table-bordered\" style=\"background: white\"> <thead> <tr> <th scope=\"col\">Name</th> <th scope=\"col\">Runs</th> <th scope=\"col\">Wickets</th> <th scope=\"col\">Age</th> <th scope=\"col\">Type</th> <th scope=\"col\">Rating</th> <th scope=\"col\">Buy?</th> </tr> </thead> <tbody> <tr ng-repeat=\"player in youngPlayers\"> <td>{{player.Player}}</td> <td>{{player.Runs}}</td> <td>{{player.Wickets}}</td> <td>{{player.Age}}</td> <td>{{player.Type}}</td> <td>{{player.Rating}}</td> <td>{{player.Buy}}</td> </tr> </tbody> </table> </div> </div> </div> </div> <div> <div class=\"row\" style=\"margin-top: 5%\"> <div class=\"jumbotron jumbotron-fluid ist-group col-md-12\" style=\"background: lightsalmon\"> <div class=\"container text-center\"> <h1 class=\"display-4\">Players with experience you do not want to lose</h1> <p class=\"lead\">These players are veterans of the league and their experience comes handy in a close match.</p> </div> </div> </div> <div class=\"row col-md-12\"> <div class=\"row col-md-12\"> <div class=\"col-md-12\"> <table class=\"table table-bordered\" style=\"background: white\"> <thead> <tr> <th scope=\"col\">Name</th> <th scope=\"col\">Runs</th> <th scope=\"col\">Wickets</th> <th scope=\"col\">Age</th> <th scope=\"col\">Type</th> <th scope=\"col\">Rating</th> <th scope=\"col\">Buy?</th> </tr> </thead> <tbody> <tr ng-repeat=\"player in expsPlayers\"> <td>{{player.Player}}</td> <td>{{player.Runs}}</td> <td>{{player.Wickets}}</td> <td>{{player.Age}}</td> <td>{{player.Type}}</td> <td>{{player.Rating}}</td> <td>{{player.Buy}}</td> </tr> </tbody> </table> <nav aria-label=\"Page navigation example\"> <ul class=\"pagination\"> <li style=\"cursor: pointer\" ng-click=\"previousExp()\" class=\"page-item\"><a class=\"page-link\">Previous</a></li> <li style=\"cursor: pointer\" ng-click=\"nextExp()\" class=\"page-item\"><a class=\"page-link\">Next</a></li> </ul> </nav> </div> </div> </div> </div> </div>"
  );


  $templateCache.put('views/main.html',
    "<style>.wrapper{\n" +
    "    display: table-cell;\n" +
    "    vertical-align: middle;\n" +
    "    text-align: center;\n" +
    "  }\n" +
    "\n" +
    "  .info{\n" +
    "    margin: 0.5em 0;\n" +
    "    font-size: 1.25em;\n" +
    "    text-shadow: 0 0 0.5em #000;\n" +
    "  }\n" +
    "\n" +
    "  .input-phone{\n" +
    "    display: block;\n" +
    "    margin: 2em auto;\n" +
    "    padding: 0.5em 0.25em;\n" +
    "    border: none;\n" +
    "    border-radius: 0.2em;\n" +
    "    font-size: 1.5em;\n" +
    "    text-align: center;\n" +
    "    box-shadow: 0 0 1em 0.25em rgba(0,0,0,0.2);\n" +
    "  }\n" +
    "\n" +
    "  .sprinkler{\n" +
    "  }\n" +
    "\n" +
    "  #container {\n" +
    "    width: 50vw;\n" +
    "    height: 50vh;\n" +
    "    position: relative;\n" +
    "    float: left;\n" +
    "    opacity: 0;\n" +
    "  }\n" +
    "\n" +
    "  canvas {\n" +
    "    width: 100%;\n" +
    "    height: 100%;\n" +
    "    position: absolute;\n" +
    "    top: 0;\n" +
    "    left: 0;\n" +
    "  }\n" +
    "\n" +
    "  #c-container,\n" +
    "  #c2-container {\n" +
    "    width: 100vw;\n" +
    "    height: 25vh;\n" +
    "    position: absolute;\n" +
    "    top: 0;\n" +
    "    left: 0;\n" +
    "  }</style> <div class=\"row\"> <div class=\"jumbotron sprinkler offset-md-4\" style=\"background-color: #D36D3D !important\"> <label style=\"font-size: x-large\"> Enter the Zip Code to get the Humidity and Temperature. </label> <input class=\"input-phone\" type=\"text\" phone-input ng-model=\"zipCode\"> <p><a class=\"btn btn-lg btn-success\" ng-click=\"getData()\">Get Humidity</a></p> </div> <button style=\"display: none\" id=\"openModel1\" type=\"button\" data-toggle=\"modal\" data-target=\"#myModal1\" class=\"btn btn-info btn-lg\">Open Modal</button> </div> <!-- Modal --> <div class=\"modal fade\" id=\"myModal1\" role=\"dialog\"> <div class=\"modal-dialog\"> <!-- Modal content--> <div class=\"modal-content\"> <!--<div class=\"modal-header\">--> <!--<button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>--> <!--<h4 class=\"modal-title\">Modal Header</h4>--> <!--</div>--> <!--<div class=\"modal-body\">--> <!--<p>Some text in the modal.</p>--> <!--</div>--> <!--<div class=\"modal-footer\">--> <!--<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>--> <!--</div>--> <div class=\"jumbotron\"> <div style=\"font-weight:bolder;font-size: x-large\">Humidity</div> <div style=\"font-size:70px;color: #06E7DD\">{{humidity}}</div> </div> </div> </div> </div> <!--<div class=\"row marketing\">--> <!--<h4>HTML5 Boilerplate</h4>--> <!--<p>--> <!--HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.--> <!--</p>--> <!--<h4>Angular</h4>--> <!--<p>--> <!--AngularJS is a toolset for building the framework most suited to your application development.--> <!--</p>--> <!--<h4>Karma</h4>--> <!--<p>Spectacular Test Runner for JavaScript.</p>--> <!--</div>-->"
  );


  $templateCache.put('views/signaPay.html',
    "<style>form {\n" +
    "        width: 380px;\n" +
    "        margin: 4em auto;\n" +
    "        padding: 3em 2em 2em 2em;\n" +
    "        background: #fafafa;\n" +
    "        border: 1px solid #ebebeb;\n" +
    "        box-shadow: rgba(0,0,0.5,0.54902) 0px 1px 1px 0px,rgba(0,0,0.5,0.05804) 0px 1px 2px 0px;\n" +
    "    }\n" +
    "\n" +
    "    .group {\n" +
    "        position: relative;\n" +
    "        margin-bottom: 45px;\n" +
    "    }\n" +
    "\n" +
    "    .modal-content{\n" +
    "        height:500px;\n" +
    "    }\n" +
    "\n" +
    "    input {\n" +
    "        font-size: 18px;\n" +
    "        padding: 10px 10px 10px 5px;\n" +
    "        -webkit-appearance: none;\n" +
    "        display: block;\n" +
    "        background: #fafafa;\n" +
    "        color: #636363;\n" +
    "        width: 100%;\n" +
    "        border: none;\n" +
    "        border-radius: 0;\n" +
    "        border-bottom: 1px solid #757575;\n" +
    "    }\n" +
    "\n" +
    "    input:focus { outline: none; }\n" +
    "\n" +
    "\n" +
    "    /* Label */\n" +
    "\n" +
    "    label {\n" +
    "        color: #999;\n" +
    "        font-size: 18px;\n" +
    "        font-weight: normal;\n" +
    "        position: absolute;\n" +
    "        pointer-events: none;\n" +
    "        left: 5px;\n" +
    "        top: 10px;\n" +
    "        transition: all 0.2s ease;\n" +
    "    }\n" +
    "\n" +
    "\n" +
    "    /* active */\n" +
    "\n" +
    "    input:focus ~ label, input.used ~ label {\n" +
    "        top: -20px;\n" +
    "        transform: scale(.75); left: -2px;\n" +
    "        /* font-size: 14px; */\n" +
    "        color: #4a89dc;\n" +
    "    }\n" +
    "\n" +
    "\n" +
    "    /* Underline */\n" +
    "\n" +
    "    .bar {\n" +
    "        position: relative;\n" +
    "        display: block;\n" +
    "        width: 100%;\n" +
    "    }\n" +
    "\n" +
    "    .bar:before, .bar:after {\n" +
    "        content: '';\n" +
    "        height: 2px;\n" +
    "        width: 0;\n" +
    "        bottom: 1px;\n" +
    "        position: absolute;\n" +
    "        background: #4a89dc;\n" +
    "        transition: all 0.2s ease;\n" +
    "    }\n" +
    "\n" +
    "    .bar:before { left: 50%; }\n" +
    "\n" +
    "    .bar:after { right: 50%; }\n" +
    "\n" +
    "\n" +
    "    /* active */\n" +
    "\n" +
    "    input:focus ~ .bar:before, input:focus ~ .bar:after { width: 50%; }\n" +
    "\n" +
    "\n" +
    "    /* Highlight */\n" +
    "\n" +
    "    .highlight {\n" +
    "        position: absolute;\n" +
    "        height: 60%;\n" +
    "        width: 100px;\n" +
    "        top: 25%;\n" +
    "        left: 0;\n" +
    "        pointer-events: none;\n" +
    "        opacity: 0.5;\n" +
    "    }\n" +
    "\n" +
    "\n" +
    "    /* active */\n" +
    "\n" +
    "    input:focus ~ .highlight {\n" +
    "        animation: inputHighlighter 0.3s ease;\n" +
    "    }\n" +
    "\n" +
    "\n" +
    "    /* Animations */\n" +
    "\n" +
    "    @keyframes inputHighlighter {\n" +
    "        from { background: #4a89dc; }\n" +
    "        to \t{ width: 0; background: transparent; }\n" +
    "    }\n" +
    "\n" +
    "\n" +
    "    /* Button */\n" +
    "\n" +
    "    .button {\n" +
    "        position: relative;\n" +
    "        display: inline-block;\n" +
    "        padding: 12px 24px;\n" +
    "        margin: .3em 0 1em 0;\n" +
    "        width: 100%;\n" +
    "        vertical-align: middle;\n" +
    "        color: #fff;\n" +
    "        font-size: 16px;\n" +
    "        line-height: 20px;\n" +
    "        -webkit-font-smoothing: antialiased;\n" +
    "        text-align: center;\n" +
    "        letter-spacing: 1px;\n" +
    "        background: transparent;\n" +
    "        border: 0;\n" +
    "        border-bottom: 2px solid #3160B6;\n" +
    "        cursor: pointer;\n" +
    "        transition: all 0.15s ease;\n" +
    "    }\n" +
    "    .button:focus { outline: 0; }\n" +
    "\n" +
    "\n" +
    "    /* Button modifiers */\n" +
    "\n" +
    "    .buttonBlue {\n" +
    "        background: #4a89dc;\n" +
    "        text-shadow: 1px 1px 0 rgba(39, 110, 204, .5);\n" +
    "    }\n" +
    "\n" +
    "    .buttonBlue:hover { background: #357bd8; }\n" +
    "\n" +
    "\n" +
    "    /* Ripples container */\n" +
    "\n" +
    "    .ripples {\n" +
    "        position: absolute;\n" +
    "        top: 0;\n" +
    "        left: 0;\n" +
    "        width: 100%;\n" +
    "        height: 100%;\n" +
    "        overflow: hidden;\n" +
    "        background: transparent;\n" +
    "    }\n" +
    "\n" +
    "\n" +
    "    /* Ripples circle */\n" +
    "\n" +
    "    .ripplesCircle {\n" +
    "        position: absolute;\n" +
    "        top: 50%;\n" +
    "        left: 50%;\n" +
    "        transform: translate(-50%, -50%);\n" +
    "        opacity: 0;\n" +
    "        width: 0;\n" +
    "        height: 0;\n" +
    "        border-radius: 50%;\n" +
    "        background: rgba(255, 255, 255, 0.25);\n" +
    "    }\n" +
    "\n" +
    "    .ripples.is-active .ripplesCircle {\n" +
    "        animation: ripples .4s ease-in;\n" +
    "    }\n" +
    "\n" +
    "\n" +
    "    /* Ripples animation */\n" +
    "\n" +
    "    @keyframes ripples {\n" +
    "        0% { opacity: 0; }\n" +
    "\n" +
    "        25% { opacity: 1; }\n" +
    "\n" +
    "        100% {\n" +
    "            width: 200%;\n" +
    "            padding-bottom: 200%;\n" +
    "            opacity: 0;\n" +
    "        }\n" +
    "    }</style> <!--<h1 style=\"text-align: center;\">--> <!--RISK SCORE CALCULATOR FOR BUSINESSES--> <!--</h1>--> <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\"> <ul class=\"navbar-nav mr-auto\"> <li class=\"nav-item\" ui-sref=\"insights\"> <a class=\"navbar-brand\" href=\"\">Sports Data Analysis</a> </li> <li class=\"nav-item active\" ui-sref=\"insights\"> <a class=\"nav-link\" href=\"\">Visualization</a> </li> <li class=\"nav-item\" ui-sref=\"auction\"> <a class=\"nav-link\" href=\"\">Auction Data</a> </li> </ul> </nav> <div class=\"container\"> <div> <div class=\"row\" style=\"margin-top: 5%\"> <div class=\"jumbotron jumbotron-fluid ist-group col-md-12\" style=\"background: #c8a3e4\"> <div class=\"container text-center\"> <h1 class=\"display-4\">IPL Cricket Data Insights</h1> <p class=\"lead\">This is visualization of IPL dataset. The Data has been preprocessed and relevant features have been extracted and others are derived using mathematical computation.</p> </div> </div> </div> <div class=\"row\"> <div class=\"list-group col-md-12 table-striped\"> <button type=\"button\" class=\"list-group-item list-group-item-action\" data-toggle=\"modal\" data-target=\"#modal11\">Runs scored across seasons</button> <button type=\"button\" class=\"list-group-item list-group-item-action\" data-toggle=\"modal\" data-target=\"#modal12\">Number of matches played each season</button> <button type=\"button\" class=\"list-group-item list-group-item-action\" data-toggle=\"modal\" data-target=\"#modal13\">Man of the match awards</button> <button type=\"button\" class=\"list-group-item list-group-item-action\" data-toggle=\"modal\" data-target=\"#modal14\">Likelihood of Toss determining win</button> <button type=\"button\" class=\"list-group-item list-group-item-action\" data-toggle=\"modal\" data-target=\"#modal15\">Favourite venues</button> <button type=\"button\" class=\"list-group-item list-group-item-action\" data-toggle=\"modal\" data-target=\"#modal16\">Toss Decisions over the seasons</button> <button type=\"button\" class=\"list-group-item list-group-item-action\" data-toggle=\"modal\" data-target=\"#modal17\">Experienced Umpires</button> <button type=\"button\" class=\"list-group-item list-group-item-action\" data-toggle=\"modal\" data-target=\"#modal18\">Wins / match</button> <button type=\"button\" class=\"list-group-item list-group-item-action\" data-toggle=\"modal\" data-target=\"#modal19\">Analyzing two teams battle over seasons (MI vs CSK)</button> <button type=\"button\" class=\"list-group-item list-group-item-action\" data-toggle=\"modal\" data-target=\"#modal20\">Average innings score across seasons</button> <button type=\"button\" class=\"list-group-item list-group-item-action\" data-toggle=\"modal\" data-target=\"#modal21\">Top run scorers</button> <button type=\"button\" class=\"list-group-item list-group-item-action\" data-toggle=\"modal\" data-target=\"#modal22\">Highest Wicket Takers</button> <button type=\"button\" class=\"list-group-item list-group-item-action\" data-toggle=\"modal\" data-target=\"#modal23\">Distribution of scores by Top scoring batsman</button> <button type=\"button\" class=\"list-group-item list-group-item-action\" data-toggle=\"modal\" data-target=\"#modal26\">Player dismissal distribution</button> </div> </div> </div> </div> <div class=\"modal fade bd-example-modal-xl\" id=\"modal11\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myExtraLargeModalLabel\" aria-hidden=\"true\"> <div class=\"modal-dialog modal-xl\"> <div class=\"modal-content\"> <div class=\"modal-header\"> <h5 class=\"modal-title col-md-6 text-right\" id=\"exampleModalLabel\">Insights</h5> <button type=\"button\" class=\"close col-md-6 text-right\" data-dismiss=\"modal\" aria-label=\"Close\"> <span aria-hidden=\"true\">&times;</span> </button> </div> <div class=\"modal-body\"> <div class=\"text-white bg-secondary mb-3\"> <div class=\"row no-gutters\"> <div class=\"col-md-8\"> <div id=\"container11\" style=\"width:100%; height:400px\"></div> </div> <div class=\"col-md-4\"> <div class=\"card-body\"> <h5 class=\"card-title\">Analysis</h5> <p class=\"card-text\">This line chart shows us that during the middle period, IPL grounds heavily favored batsman. Over the last few years, the bowlers have adapted and restricted the batsman. The franchise should pay attention on acquiring good quality bowlers which was neglected earlier. A reason why SRH and MI won during those years.</p> <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p> </div> </div> </div> </div> </div> </div> </div> </div> <div class=\"modal fade bd-example-modal-xl\" id=\"modal12\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myExtraLargeModalLabel\" aria-hidden=\"true\"> <div class=\"modal-dialog modal-xl\"> <div class=\"modal-content\"> <div class=\"modal-header\"> <h5 class=\"modal-title col-md-6 text-right\" id=\"exampleModalLabel\">Insights</h5> <button type=\"button\" class=\"close col-md-6 text-right\" data-dismiss=\"modal\" aria-label=\"Close\"> <span aria-hidden=\"true\">&times;</span> </button> </div> <div class=\"modal-body\"> <div class=\"text-white bg-secondary mb-3\"> <div class=\"row no-gutters\"> <div class=\"col-md-8\"> <div id=\"container12\" style=\"width:100%; height:400px\"></div> </div> <div class=\"col-md-4\"> <div class=\"card-body\"> <h5 class=\"card-title\">Analysis</h5> <p class=\"card-text\">After the intial success of the IPL, they hosted more matches but the they lost money and TRP as people ended up watching selected matches. In the last few years they've stuck to around 60 matches a season, that's one match a day.</p> <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p> </div> </div> </div> </div> </div> </div> </div> </div> <div class=\"modal fade bd-example-modal-xl\" id=\"modal13\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myExtraLargeModalLabel\" aria-hidden=\"true\"> <div class=\"modal-dialog modal-xl\"> <div class=\"modal-content\"> <div class=\"modal-header\"> <h5 class=\"modal-title col-md-6 text-right\" id=\"exampleModalLabel\">Insights</h5> <button type=\"button\" class=\"close col-md-6 text-right\" data-dismiss=\"modal\" aria-label=\"Close\"> <span aria-hidden=\"true\">&times;</span> </button> </div> <div class=\"modal-body\"> <div class=\"text-white bg-secondary mb-3\"> <div class=\"row no-gutters\"> <div class=\"col-md-8\"> <div id=\"container13\" style=\"width:100%; height:400px\"></div> </div> <div class=\"col-md-4\"> <div class=\"card-body\"> <h5 class=\"card-title\">Analysis</h5> <p class=\"card-text\">Man of the Match Awards in a way help us identify match winning and impactful players over the seasons. They might not feature in the number game and top stat charts, but on a given day, they could help you win a match single-handedly.</p> <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p> </div> </div> </div> </div> </div> </div> </div> </div> <div class=\"modal fade bd-example-modal-xl\" id=\"modal14\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myExtraLargeModalLabel\" aria-hidden=\"true\"> <div class=\"modal-dialog modal-xl\"> <div class=\"modal-content\"> <div class=\"modal-header\"> <h5 class=\"modal-title col-md-6 text-right\" id=\"exampleModalLabel\">Insights</h5> <button type=\"button\" class=\"close col-md-6 text-right\" data-dismiss=\"modal\" aria-label=\"Close\"> <span aria-hidden=\"true\">&times;</span> </button> </div> <div class=\"modal-body\"> <div class=\"text-white bg-secondary mb-3\"> <div class=\"row no-gutters\"> <div class=\"col-md-8\"> <div id=\"container14\" style=\"width:100%; height:400px\"></div> </div> <div class=\"col-md-4\"> <div class=\"card-body\"> <h5 class=\"card-title\">Analysis</h5> <p class=\"card-text\">Over the last few seasons, many think that toss is a crucial factor in an IPL game, but our chart thinks otherwise. It's okay if you've lost the toss, you still have an almost equal chance of winning the match. That's good news!</p> <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p> </div> </div> </div> </div> </div> </div> </div> </div> <div class=\"modal fade bd-example-modal-xl\" id=\"modal15\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myExtraLargeModalLabel\" aria-hidden=\"true\"> <div class=\"modal-dialog modal-xl\"> <div class=\"modal-content\"> <div class=\"modal-header\"> <h5 class=\"modal-title col-md-6 text-right\" id=\"exampleModalLabel\">Insights</h5> <button type=\"button\" class=\"close col-md-6 text-right\" data-dismiss=\"modal\" aria-label=\"Close\"> <span aria-hidden=\"true\">&times;</span> </button> </div> <div class=\"modal-body\"> <div class=\"text-white bg-secondary mb-3\"> <div class=\"row no-gutters\"> <div class=\"col-md-8\"> <div id=\"container15\" style=\"width:100%; height:400px\"></div> </div> <div class=\"col-md-4\"> <div class=\"card-body\"> <h5 class=\"card-title\">Analysis</h5> <p class=\"card-text\">This bar chart shows us the venues that have been constant over the years and have also generated great revenue for their franchise due to fan popularity. These are good locations to have your franchise setup in.</p> <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p> </div> </div> </div> </div> </div> </div> </div> </div> <div class=\"modal fade bd-example-modal-xl\" id=\"modal16\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myExtraLargeModalLabel\" aria-hidden=\"true\"> <div class=\"modal-dialog modal-xl\"> <div class=\"modal-content\"> <div class=\"modal-header\"> <h5 class=\"modal-title col-md-6 text-right\" id=\"exampleModalLabel\">Insights</h5> <button type=\"button\" class=\"close col-md-6 text-right\" data-dismiss=\"modal\" aria-label=\"Close\"> <span aria-hidden=\"true\">&times;</span> </button> </div> <div class=\"modal-body\"> <div class=\"text-white bg-secondary mb-3\"> <div class=\"row no-gutters\"> <div class=\"col-md-8\"> <div id=\"container16\" style=\"width:100%; height:400px\"></div> </div> <div class=\"col-md-4\"> <div class=\"card-body\"> <h5 class=\"card-title\">Analysis</h5> <p class=\"card-text\">This is actually an interesting insight. As the grouped chart shows us that teams nowadays elect to field first, we shall find out in the later charts if it actually helps get an edge.</p> <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p> </div> </div> </div> </div> </div> </div> </div> </div> <div class=\"modal fade bd-example-modal-xl\" id=\"modal17\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myExtraLargeModalLabel\" aria-hidden=\"true\"> <div class=\"modal-dialog modal-xl\"> <div class=\"modal-content\"> <div class=\"modal-header\"> <h5 class=\"modal-title col-md-6 text-right\" id=\"exampleModalLabel\">Insights</h5> <button type=\"button\" class=\"close col-md-6 text-right\" data-dismiss=\"modal\" aria-label=\"Close\"> <span aria-hidden=\"true\">&times;</span> </button> </div> <div class=\"modal-body\"> <div class=\"text-white bg-secondary mb-3\"> <div class=\"row no-gutters\"> <div class=\"col-md-8\"> <div id=\"container17\" style=\"width:100%; height:400px\"></div> </div> <div class=\"col-md-4\"> <div class=\"card-body\"> <h5 class=\"card-title\">Analysis</h5> <p class=\"card-text\">These is just showing the umpires that have the most experience with IPL and could be selected for the season finals.</p> </div> </div> </div> </div> </div> </div> </div> </div> <div class=\"modal fade bd-example-modal-xl\" id=\"modal18\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myExtraLargeModalLabel\" aria-hidden=\"true\"> <div class=\"modal-dialog modal-xl\"> <div class=\"modal-content\"> <div class=\"modal-header\"> <h5 class=\"modal-title col-md-6 text-right\" id=\"exampleModalLabel\">Insights</h5> <button type=\"button\" class=\"close col-md-6 text-right\" data-dismiss=\"modal\" aria-label=\"Close\"> <span aria-hidden=\"true\">&times;</span> </button> </div> <div class=\"modal-body\"> <div class=\"text-white bg-secondary mb-3\"> <div class=\"row no-gutters\"> <div class=\"col-md-8\"> <div id=\"container18\" style=\"width:100%; height:400px\"></div> </div> <div class=\"col-md-4\"> <div class=\"card-body\"> <h5 class=\"card-title\">Analysis</h5> <p class=\"card-text\">This stacked graph shows the success each time has in the total matches they've played so far.</p> </div> </div> </div> </div> </div> </div> </div> </div> <div class=\"modal fade bd-example-modal-xl\" id=\"modal19\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myExtraLargeModalLabel\" aria-hidden=\"true\"> <div class=\"modal-dialog modal-xl\"> <div class=\"modal-content\"> <div class=\"modal-header\"> <h5 class=\"modal-title col-md-6 text-right\" id=\"exampleModalLabel\">Insights</h5> <button type=\"button\" class=\"close col-md-6 text-right\" data-dismiss=\"modal\" aria-label=\"Close\"> <span aria-hidden=\"true\">&times;</span> </button> </div> <div class=\"modal-body\"> <div class=\"text-white bg-secondary mb-3\"> <div class=\"row no-gutters\"> <div class=\"col-md-8\"> <div id=\"container19\" style=\"width:100%; height:400px\"></div> </div> <div class=\"col-md-4\"> <div class=\"card-body\"> <h5 class=\"card-title\">Analysis</h5> <p class=\"card-text\">MI vs CSK is like a GSW vs Lebron Team match. The matches are always close and these are the two best teams in the league. This chart shows how these teams have battled over the years.</p> </div> </div> </div> </div> </div> </div> </div> </div> <div class=\"modal fade bd-example-modal-xl\" id=\"modal20\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myExtraLargeModalLabel\" aria-hidden=\"true\"> <div class=\"modal-dialog modal-xl\"> <div class=\"modal-content\"> <div class=\"modal-header\"> <h5 class=\"modal-title col-md-6 text-right\" id=\"exampleModalLabel\">Insights</h5> <button type=\"button\" class=\"close col-md-6 text-right\" data-dismiss=\"modal\" aria-label=\"Close\"> <span aria-hidden=\"true\">&times;</span> </button> </div> <div class=\"modal-body\"> <div class=\"text-white bg-secondary mb-3\"> <div class=\"row no-gutters\"> <div class=\"col-md-8\"> <div id=\"container20\" style=\"width:100%; height:400px\"></div> </div> <div class=\"col-md-4\"> <div class=\"card-body\"> <h5 class=\"card-title\">Analysis</h5> <p class=\"card-text\">This grouped graph shows the average first and second innings score across the seasons. The larger the gap, the more it favors towards a good batting pitch.</p> <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p> </div> </div> </div> </div> </div> </div> </div> </div> <div class=\"modal fade bd-example-modal-xl\" id=\"modal21\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myExtraLargeModalLabel\" aria-hidden=\"true\"> <div class=\"modal-dialog modal-xl\"> <div class=\"modal-content\"> <div class=\"modal-header\"> <h5 class=\"modal-title col-md-6 text-right\" id=\"exampleModalLabel\">Insights</h5> <button type=\"button\" class=\"close col-md-6 text-right\" data-dismiss=\"modal\" aria-label=\"Close\"> <span aria-hidden=\"true\">&times;</span> </button> </div> <div class=\"modal-body\"> <div class=\"text-white bg-secondary mb-3\"> <div class=\"row no-gutters\"> <div class=\"col-md-8\"> <div id=\"container21\" style=\"width:100%; height:400px\"></div> </div> <div class=\"col-md-4\"> <div class=\"card-body\"> <h5 class=\"card-title\">Analysis</h5> <p class=\"card-text\">Displaying the highest run scorers in the IPL.</p> <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p> </div> </div> </div> </div> </div> </div> </div> </div> <div class=\"modal fade bd-example-modal-xl\" id=\"modal22\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myExtraLargeModalLabel\" aria-hidden=\"true\"> <div class=\"modal-dialog modal-xl\"> <div class=\"modal-content\"> <div class=\"modal-header\"> <h5 class=\"modal-title col-md-6 text-right\" id=\"exampleModalLabel\">Insights</h5> <button type=\"button\" class=\"close col-md-6 text-right\" data-dismiss=\"modal\" aria-label=\"Close\"> <span aria-hidden=\"true\">&times;</span> </button> </div> <div class=\"modal-body\"> <div class=\"text-white bg-secondary mb-3\"> <div class=\"row no-gutters\"> <div class=\"col-md-8\"> <div id=\"container22\" style=\"width:100%; height:400px\"></div> </div> <div class=\"col-md-4\"> <div class=\"card-body\"> <h5 class=\"card-title\">Analysis</h5> <p class=\"card-text\">Shows us the leading wicket takers and quality bowlers in the league.</p> <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p> </div> </div> </div> </div> </div> </div> </div> </div> <div class=\"modal fade bd-example-modal-xl\" id=\"modal23\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myExtraLargeModalLabel\" aria-hidden=\"true\"> <div class=\"modal-dialog modal-xl\"> <div class=\"modal-content\"> <div class=\"modal-header\"> <h5 class=\"modal-title col-md-6 text-right\" id=\"exampleModalLabel\">Insights</h5> <button type=\"button\" class=\"close col-md-6 text-right\" data-dismiss=\"modal\" aria-label=\"Close\"> <span aria-hidden=\"true\">&times;</span> </button> </div> <div class=\"card-group\"> <div class=\"card\"> <div id=\"container23\" style=\"width:100%; height:400px\"></div> <div class=\"card-body\"> <!--<h5 class=\"card-title\">Analysis</h5>--> <!--<p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>--> <!--<p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>--> </div> </div> <div class=\"card\"> <div id=\"container24\" style=\"width:100%; height:400px\"></div> <div class=\"card-body\"> <!--<h5 class=\"card-title\">Analysis</h5>--> <!--<p class=\"card-text\">This card has supporting text below as a natural lead-in to additional content.</p>--> <!--<p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>--> </div> </div> <div class=\"card\"> <div id=\"container25\" style=\"width:100%; height:400px\"></div> <div class=\"card-body\"> <!--<h5 class=\"card-title\">Analysis</h5>--> <!--<p class=\"card-text\">This Pie Chart shows us the types of dismissals. Caught is huge portion of this distribution, which means that good fielders are key to this format of the game. A reason why CSK and MI dominate the league and an unlooked feature while purchasing players.</p>--> <!--<p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>--> </div> </div> </div> </div> </div> </div> <!--<div class=\"modal fade bd-example-modal-xl\" id=\"modal24\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myExtraLargeModalLabel\" aria-hidden=\"true\">--> <!--<div class=\"modal-dialog modal-xl\">--> <!--<div class=\"modal-content\">--> <!--<div class=\"modal-header\">--> <!--<h5 class=\"modal-title col-md-6 text-right\" id=\"exampleModalLabel\">Insights</h5>--> <!--<button type=\"button\" class=\"close col-md-6 text-right\" data-dismiss=\"modal\" aria-label=\"Close\">--> <!--<span aria-hidden=\"true\">&times;</span>--> <!--</button>--> <!--</div>--> <!--<div class=\"modal-body\">--> <!--<div class=\"text-white bg-secondary mb-3\">--> <!--<div class=\"row no-gutters\">--> <!--<div class=\"col-md-8\">--> <!--<div id=\"container24\" style=\"width:100%; height:400px;\"></div>--> <!--</div>--> <!--<div class=\"col-md-4\">--> <!--<div class=\"card-body\">--> <!--<h5 class=\"card-title\">Card title</h5>--> <!--<p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>--> <!--<p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>--> <!--</div>--> <!--</div>--> <!--</div>--> <!--</div>--> <!--</div>--> <!--</div>--> <!--</div>--> <!--</div>--> <!--<div class=\"modal fade bd-example-modal-xl\" id=\"modal25\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myExtraLargeModalLabel\" aria-hidden=\"true\">--> <!--<div class=\"modal-dialog modal-xl\">--> <!--<div class=\"modal-content\">--> <!--<div class=\"modal-header\">--> <!--<h5 class=\"modal-title col-md-6 text-right\" id=\"exampleModalLabel\">Insights</h5>--> <!--<button type=\"button\" class=\"close col-md-6 text-right\" data-dismiss=\"modal\" aria-label=\"Close\">--> <!--<span aria-hidden=\"true\">&times;</span>--> <!--</button>--> <!--</div>--> <!--<div class=\"modal-body\">--> <!--<div class=\"text-white bg-secondary mb-3\">--> <!--<div class=\"row no-gutters\">--> <!--<div class=\"col-md-8\">--> <!--<div id=\"container25\" style=\"width:100%; height:400px;\"></div>--> <!--</div>--> <!--<div class=\"col-md-4\">--> <!--<div class=\"card-body\">--> <!--<h5 class=\"card-title\">Card title</h5>--> <!--<p class=\"card-text\">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>--> <!--<p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p>--> <!--</div>--> <!--</div>--> <!--</div>--> <!--</div>--> <!--</div>--> <!--</div>--> <!--</div>--> <!--</div>--> <div class=\"modal fade bd-example-modal-xl\" id=\"modal26\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myExtraLargeModalLabel\" aria-hidden=\"true\"> <div class=\"modal-dialog modal-xl\"> <div class=\"modal-content\"> <div class=\"modal-header\"> <h5 class=\"modal-title col-md-6 text-right\" id=\"exampleModalLabel\">Insights</h5> <button type=\"button\" class=\"close col-md-6 text-right\" data-dismiss=\"modal\" aria-label=\"Close\"> <span aria-hidden=\"true\">&times;</span> </button> </div> <div class=\"modal-body\"> <div class=\"text-white bg-secondary mb-3\"> <div class=\"row no-gutters\"> <div class=\"col-md-8\"> <div id=\"container26\" style=\"width:100%; height:400px\"></div> </div> <div class=\"col-md-4\"> <div class=\"card-body\"> <h5 class=\"card-title\">Card title</h5> <p class=\"card-text\">This Pie Chart shows us the types of dismissals. Caught is huge portion of this distribution, which means that good fielders are key to this format of the game. A reason why CSK and MI dominate the league and an unlooked feature while purchasing players.</p> <p class=\"card-text\"><small class=\"text-muted\">Last updated 3 mins ago</small></p> </div> </div> </div> </div> </div> </div> </div> </div>"
  );

}]);
