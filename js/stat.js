window.renderStatistics = function (ctx, names, times) {
// прописываю градиент для прямоугольника
var gradient = ctx.createLinearGradient(400, 10, 420, 270);
gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
gradient.addColorStop(1, 'rgba(168, 192, 255, 1)');
// тень
ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
ctx.fillRect(110, 20, 420, 270);
// прямоугольник
ctx.fillStyle = gradient;
ctx.fillRect(100, 10, 420, 270);
// параметры шрифта
ctx.fillStyle = '#000';
ctx.font = '16px PT Mono';
ctx.fillText('Ура, вы победили!', 160, 30);
ctx.fillText('Список результатов:', 160, 50);
// находим максимальное значение элемента
var max = -1;

  for(var i = 0 ; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }
// сортируем данные по убыванию
  for (var i = 0; i <= times.length - 2; i++) {
  var maxValue = times[i];

  for (var j = i + 1; j <= times.length - 1; j++) {
    if (times[j] > maxValue) {
      maxValue = times[j];
      var swap = times[i];
      times[i] = maxValue;
      times[j] = swap;
    }
  }
}
//задаем переменные для столбиков
var histogramHeight = 150;
var step = histogramHeight / (max - 0);
var barWidth = 40;
var barHeight = 0;
var indent = 50;
var initialX = 160;
var initialY = 90;
var floatX = 0;
var floatY = 0;
var lineHeight = 20;
//цикл, который рисует столбики на основе полученных данных из массивов
  for (i = 0; i < times.length; i++) {
    barHeight = times[i] * step;
    floatX = initialX + (barWidth + indent) * i;
    floatY = initialY + histogramHeight;

    ctx.fillStyle = (names[i] === 'Вы') ? 'rgba(255, 0, 42, 1)' : 'rgba(0, 79, 186, ' + Math.random() + ')';
    ctx.fillRect(floatX, floatY - barHeight, barWidth, barHeight);
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), floatX, floatY - barHeight - lineHeight / 2);
    ctx.fillText(names[i], floatX, floatY + lineHeight);
  }
};
