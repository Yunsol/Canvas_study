var table = document.getElementById('table');
var data = [];
var score = document.getElementById('score');

/**
 * 표만들기 초기화
 */
function init() {
  var fragment = document.createDocumentFragment();
  [1, 2, 3, 4].forEach(function() {
    var rowData = [];
    data.push(rowData);
    var tr = document.createElement('tr');
    [1, 2, 3, 4].forEach(function() {
      rowData.push(0);
      var td = document.createElement('td');
      tr.appendChild(td);
    });
    fragment.appendChild(tr);
  });
  table.appendChild(fragment);
}

/**
 * 빈칸에 랜덤하게 2 만들기
 */
function createRandom() {
  var emptyArr = [];
  data.forEach(function(rowData, i) {
    rowData.forEach(function(colData, j) {
      if (!colData) {
        emptyArr.push([i, j]);
      }
    });
  });
  if (emptyArr.length === 0) {
    alert('게임오버: ' + score.textContent);
    table.innerHTML = '';
    init();
  } else {
    var randomBlock = emptyArr[Math.floor(Math.random() * emptyArr.length)];
    data[randomBlock[0]][randomBlock[1]] = 2;
    draw();
  }
}

function draw() {
  data.forEach(function(rowData, i) {
    rowData.forEach(function(colData, j) {
      table.children[i].children[j].setAttribute('class', '');
      if (colData > 0) {
        table.children[i].children[j].textContent = colData;
        table.children[i].children[j].setAttribute('class', 'bg_' + colData);
      } else {
        table.children[i].children[j].textContent = '';
      }
    });
  });
}

init();
createRandom();
draw();
/**
var dragStart = false;
var dragging = false;
var startXY;
var endXY;
window.addEventListener('mousedown', function(e) {
  dragStart = true;
  startXY = [e.clientX, e.clientY];
});
window.addEventListener('mousemove', function(e) {
  if (dragStart) {
    dragging = true;
  }
});
window.addEventListener('mouseup', function(e) {
  endXY = [e.clientX, e.clientY];
  if (dragging) {
    var direction;
    var xDiff = endXY[0] - startXY[0];
    var yDiff = endXY[1] - startXY[1];
    if (xDiff < 0 && Math.abs(xDiff) / Math.abs(yDiff) > 1) {
      direction = 'left';
    } else if (xDiff > 0 && Math.abs(xDiff) / Math.abs(yDiff) > 1) {
      direction = 'right';
    } else if (yDiff > 0 && Math.abs(xDiff) / Math.abs(yDiff) < 1) {
      direction = 'down';
    } else if (yDiff < 0 && Math.abs(xDiff) / Math.abs(yDiff) < 1) {
      direction = 'up';
    }
    console.log(xDiff, yDiff, direction);
  }
  dragStart = false;
  dragging = false;

  switch (direction) {
    case 'left':
      var newData = [
        [],
        [],
        [],
        []
      ];
      data.forEach(function(rowData, i) {
        rowData.forEach(function(colData, j) {
          if (colData) {
            if (newData[i][newData[i].length - 1] && newData[i][newData[i].length - 1] === colData) {
              newData[i][newData[i].length - 1] *= 2;
              var nowScore = parseInt(score.textContent, 10);
              score.textContent = nowScore + newData[i][newData[i].length - 1];
            } else {
              newData[i].push(colData);
            }
          }
        });
      });
      console.log(newData);
      [1, 2, 3, 4].forEach(function(rowData, i) {
        [1, 2, 3, 4].forEach(function(colData, j) {
          data[i][j] = newData[i][j] || 0;
        });
      });
      break;
    case 'right':
      var newData = [
        [],
        [],
        [],
        []
      ];
      data.forEach(function(rowData, i) {
        rowData.forEach(function(colData, j) {
          if (colData) {
            if (newData[i][0] && newData[i][0] === colData) {
              newData[i][0] *= 2;
              var nowScore = parseInt(score.textContent, 10);
              score.textContent = nowScore + newData[i][0];
            } else {
              newData[i].unshift(colData);
            }
          }
        });
      });
      console.log(newData);
      [1, 2, 3, 4].forEach(function(rowData, i) {
        [1, 2, 3, 4].forEach(function(colData, j) {
          data[i][3 - j] = newData[i][j] || 0;
        });
      });
      break;
    case 'up':
      var newData = [
        [],
        [],
        [],
        []
      ];
      data.forEach(function(rowData, i) {
        rowData.forEach(function(colData, j) {
          if (colData) {
            if (newData[j][newData[j].length - 1] && newData[j][newData[j].length - 1] === colData) {
              newData[j][newData[j].length - 1] *= 2;
              var nowScore = parseInt(score.textContent, 10);
              score.textContent = nowScore + newData[j][newData[j].length - 1];
            } else {
              newData[j].push(colData);
            }
          }
        });
      });
      console.log(newData);
      [1, 2, 3, 4].forEach(function(colData, i) {
        [1, 2, 3, 4].forEach(function(rowData, j) {
          data[j][i] = newData[i][j] || 0;
        });
      });
      break;
    case 'down':
      var newData = [
        [],
        [],
        [],
        []
      ];
      data.forEach(function(rowData, i) {
        rowData.forEach(function(colData, j) {
          if (colData) {
            if (newData[j][0] && newData[j][0] === colData) {
              newData[j][0] *= 2;
              var nowScore = parseInt(score.textContent, 10);
              score.textContent = nowScore + newData[j][0];
            } else {
              newData[j].unshift(colData);
            }
          }
        });
      });
      console.log(newData);
      [1, 2, 3, 4].forEach(function(colData, i) {
        [1, 2, 3, 4].forEach(function(rowData, j) {
          data[3 - j][i] = newData[i][j] || 0;
        });
      });
      break;
  }
  draw();
  createRandom();
});
 */
document.addEventListener('keydown', function(e) {
  if (e.keyCode == 37) { //좌
    var newData = [
      [],
      [],
      [],
      []
    ];
    data.forEach(function(rowData, i) {
      rowData.forEach(function(colData, j) {
        if (colData) {
          if (newData[i][newData[i].length - 1] && newData[i][newData[i].length - 1] === colData) {
            newData[i][newData[i].length - 1] *= 2;
            var nowScore = parseInt(score.textContent, 10);
            score.textContent = nowScore + newData[i][newData[i].length - 1];
          } else {
            newData[i].push(colData);
          }
        }
      });
    });
    [1, 2, 3, 4].forEach(function(rowData, i) {
      [1, 2, 3, 4].forEach(function(colData, j) {
        data[i][j] = newData[i][j] || 0;
      });
    });
  } else if (e.keyCode == 38) {//상
    var newData = [
      [],
      [],
      [],
      []
    ];
    data.forEach(function(rowData, i) {
      rowData.forEach(function(colData, j) {
        if (colData) {
          if (newData[j][newData[j].length - 1] && newData[j][newData[j].length - 1] === colData) {
            newData[j][newData[j].length - 1] *= 2;
            var nowScore = parseInt(score.textContent, 10);
            score.textContent = nowScore + newData[j][newData[j].length - 1];
          } else {
            newData[j].push(colData);
          }
        }
      });
    });
    console.log(newData);
    [1, 2, 3, 4].forEach(function(colData, i) {
      [1, 2, 3, 4].forEach(function(rowData, j) {
        data[j][i] = newData[i][j] || 0;
      });
    });
  } else if (e.keyCode == 39) {//우
    var newData = [
      [],
      [],
      [],
      []
    ];
    data.forEach(function(rowData, i) {
      rowData.forEach(function(colData, j) {
        if (colData) {
          if (newData[i][0] && newData[i][0] === colData) {
            newData[i][0] *= 2;
            var nowScore = parseInt(score.textContent, 10);
            score.textContent = nowScore + newData[i][0];
          } else {
            newData[i].unshift(colData);
          }
        }
      });
    });
    [1, 2, 3, 4].forEach(function(rowData, i) {
      [1, 2, 3, 4].forEach(function(colData, j) {
        data[i][3 - j] = newData[i][j] || 0;
      });
    });
  } else if (e.keyCode == 40) {//하
    var newData = [
      [],
      [],
      [],
      []
    ];
    data.forEach(function(rowData, i) {
      rowData.forEach(function(colData, j) {
        if (colData) {
          if (newData[j][0] && newData[j][0] === colData) {
            newData[j][0] *= 2;
            var nowScore = parseInt(score.textContent, 10);
            score.textContent = nowScore + newData[j][0];
          } else {
            newData[j].unshift(colData);
          }
        }
      });
    });
    [1, 2, 3, 4].forEach(function(colData, i) {
      [1, 2, 3, 4].forEach(function(rowData, j) {
        data[3 - j][i] = newData[i][j] || 0;
      });
    });
  }
  draw();
  createRandom();
}, false);