'use strict';

var searchMaxValue = function (array) {
  var max = -1;
  for (var i = 0; i < array.length; i++) {
    var time = array[i];
    if (time > max) {
      max = time;
    }
  }
  return max;
};

function getRandomColor() {
  return 'rgba(0, 79, 186,' + (Math.random() * (1 - 0.1) + 0.1) + ')';
}

// Функция отрисовки гистограммы
var histogramWidth = 40;
var histogramHeigth = 150;
var indent = 50;
var initialX = 160;
var initialY = 100;

// Функция отрисовки гистограммы
function drawHistogram(i, ctx, names, times) {

  var step = histogramHeigth / searchMaxValue(times);
  var floatX = initialX + (histogramWidth + indent) * i;

  ctx.fillStyle = (names[i] === 'Вы') ? 'rgba(255, 0, 42, 1)' : getRandomColor();
  ctx.fillRect(floatX, (initialY + histogramHeigth) - (times[i] * step), histogramWidth, times[i] * step);
  ctx.fillStyle = '#000';
  ctx.fillText(Math.round(times[i]), floatX, (initialY + histogramHeigth) - times[i] * step - 20 / 2);
  ctx.fillText(names[i], floatX, initialY + histogramHeigth + 20);
}

window.renderStatistics = function (ctx, names, times) {

  var gradient = ctx.createLinearGradient(400, 10, 420, 270);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
  gradient.addColorStop(1, 'rgba(168, 192, 255, 1)');

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = gradient;
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили!', 160, 30);
  ctx.fillText('Список результатов:', 160, 50);

  for (var i = 0; i < times.length; i++) {
    drawHistogram(i, ctx, names, times);
  }
};
