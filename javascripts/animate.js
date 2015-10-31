var animate = animate || {};
animate.obj = (function(){
   var _coin = document.createElement("div"),
    _normalClassPortal = 'animatated-object coin',
    _obj = document.createElement("div"),
    _normalClassObj = 'animatated-object obj',
    _stoped = true,
    _delta = 1,
    _objLeftPosition,
    _objTopPosition,
    _coinLeftPosition,
    _coinTopPosition,
    _coinCenterPosition = {
      left: 244,
      top: 238
    },
    _windowWidth,
    _windowHeight,
    _coins = document.getElementById("coins"),
    _score = 0;
    // _mouseLeftPosition,
    // _mouseTopPosition;

    /*Поиск курсора */

    // var ns4 = (document.layers)? true:false
    // var ie4 = (document.all)? true:false
    // function searchMouse() {
    //   if (ns4) {document.captureEvents(Event.MOUSEMOVE);}
    //   document.onmousemove=mousemove;
    // };
    // function mousemove(event) {
    //   if (document.attachEvent != null) {
    //       _mouseLeftPosition = window.event.clientX;
    //       _mouseTopPosition = window.event.clientY;
    //   } else if (!document.attachEvent && document.addEventListener) {
    //       _mouseLeftPosition = event.clientX-5;
    //       _mouseTopPosition = event.clientY-7;
    //   }
    // }

    /* Поиск курсора*/

    var _options = {
        draw: function () {
          // if(_objLeftPosition < _coinCenterPosition.left){
          //   if (_objTopPosition < _coinCenterPosition.top) {
          //     _objTopPosition += _delta;
          //   } else {
          //     _objTopPosition -= _delta;
          //   }
          //     _objLeftPosition += _delta;
          // } else {
          //     _objLeftPosition -= _delta;
          // }
          function TopPos(){
            if (_objTopPosition < _coinCenterPosition.top) {
              _objTopPosition += _delta;
            } else if (_objTopPosition == _coinCenterPosition.top){

            } else {
              _objTopPosition -= _delta;
            }
          }

          if(_objLeftPosition < _coinCenterPosition.left){
            TopPos();
            _objLeftPosition += _delta;
          } else if(_objLeftPosition == _coinCenterPosition.left) {
            TopPos();
          } else {
            TopPos();
            _objLeftPosition -= _delta;
          }
                 
          if (_objLeftPosition == _coinCenterPosition.left && _objTopPosition == _coinCenterPosition.top) {
                function getRandomInt(min, max)
                    {
                      return Math.floor(Math.random() * (max - min)) + min;
                    }

              _coinLeftPosition = getRandomInt(0,_windowWidth-100);
              _coinTopPosition = getRandomInt(0,_windowHeight -200);
              _coinCenterPosition.left = _coinLeftPosition-6;
              _coinCenterPosition.top = _coinTopPosition-18;
              _score++;
              _coins.innerHTML = _score;
          }
        _obj.style.left = _objLeftPosition + 'px';
        _obj.style.top = _objTopPosition + 'px';
        _coin.style.left = _coinLeftPosition + 'px';
        _coin.style.top = _coinTopPosition + 'px';
      }
  };
  

  function animate(options) {
    requestAnimationFrame(function animate() {
      options.draw();
      if (!_stoped) {
        requestAnimationFrame(animate);
      }
    });
  };

  return {
    init: function () {
      _obj.className = _normalClassObj;
      _coin.className = _normalClassPortal;
      document.body.appendChild(_coin);
      document.body.appendChild(_obj);
      

      _objLeftPosition = parseInt( window.getComputedStyle(_obj, null).getPropertyValue("left"), 10);
      _objTopPosition = parseInt( window.getComputedStyle(_obj, null).getPropertyValue("top"), 10);
      _coinLeftPosition = parseInt( window.getComputedStyle(_coin, null).getPropertyValue("left"), 10);
      _coinTopPosition = parseInt( window.getComputedStyle(_coin, null).getPropertyValue("top"), 10);
      _windowWidth = window.innerWidth;
      _windowHeight = window.innerHeight;
      _stoped = false;
      animate(_options);
    },
    stop: function () {
      _stoped = true;
    }
  };
})();