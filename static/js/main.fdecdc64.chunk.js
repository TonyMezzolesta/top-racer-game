(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(t,e,i){t.exports=i.p+"static/media/Audi.5498a290.png"},function(t,e,i){t.exports=i.p+"static/media/truck.0c526a94.png"},function(t,e,i){t.exports=i.p+"static/media/road.a03ad39a.png"},function(t,e,i){t.exports=i.p+"static/media/taxi.b2ca867e.png"},function(t,e,i){t.exports=i.p+"static/media/Car.a39891fa.png"},function(t,e,i){t.exports=i.p+"static/media/exp2_0.4310b538.png"},function(t,e,i){t.exports=i(9)},function(t,e,i){},,function(t,e,i){"use strict";i.r(e);i(7);function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function r(t,e,i){return e&&a(t.prototype,e),i&&a(t,i),t}var o={listen:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;!function(t){document.addEventListener("keydown",function(e){37===e.keyCode?t.left=!0:38===e.keyCode?t.up=!0:39===e.keyCode?t.right=!0:40===e.keyCode?t.down=!0:32===e.keyCode&&(t.space=!0)},!1),document.addEventListener("keyup",function(e){37===e.keyCode?t.left=!1:38===e.keyCode?t.up=!1:39===e.keyCode?t.right=!1:40===e.keyCode?t.down=!1:32===e.keyCode&&(t.space=!1)},!1)}(t),function(t,e){e.addEventListener("mousemove",function(i){t.mousePos=function(t,e){var i=e.getBoundingClientRect();return{x:t.clientX-i.left,y:t.clientY-i.top}}(i,e)},!1),e.addEventListener("mousedown",function(e){t.mousedown=!0,t.mouseButton=e.button},!1),e.addEventListener("mouseup",function(e){t.mousedown=!1},!1)}(t,e)}},h=0,c={getDelta:function(t){var e=t-h;return h=t,e},distanceToMove:function(t,e){return e*t/1e3}};function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t,e,i){return(l=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?Reflect.construct:function(t,e,i){var s=[null];s.push.apply(s,e);var n=new(Function.bind.apply(t,s));return i&&u(n,i.prototype),n}).apply(null,arguments)}var p=function(){function t(e,i,s,a,r){n(this,t),this.img=e,this.x=i,this.y=s,this.width=a,this.height=r}return r(t,[{key:"draw",value:function(t,e,i,s){t.drawImage(this.img,this.x,this.y,this.width,this.height,e,i,this.width*s,this.height*s)}}]),t}(),d=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=t.height,n=t.width,a=e.height,r=e.width,o=t.position,h=o.x,c=o.y,u=e.position;return function(t,e,i,s,n,a,r,o){var h=arguments.length>8&&void 0!==arguments[8]?arguments[8]:0;return!(t>n+r+h||t+i+h<n)&&!(e>a+o+h||e+s+h<a)}(h,c,n,s,u.x,u.y,r,a,i)},f=function(){function t(){n(this,t),this.spriteArray=[],this.currentFrame=0,this.delayBetweenFrames=10,this.extractSprites=function(t,e,i,s,n){for(var a=e*i-1,r=Math.floor(t.width/s),o=0;o<a;o++){var h=o%r*s,c=Math.floor(o/r)*n,u=new p(t,h,c,s,n);this.spriteArray.push(u)}},this.then=performance.now(),this.totalTimeSinceLastRedraw=0,this.draw=function(t,e,i){var s=performance.now(),n=s-this.then;this.spriteArray[this.currentFrame].draw(t,e,i,1),this.totalTimeSinceLastRedraw>this.delayBetweenFrames?(this.currentFrame++,this.currentFrame%=this.spriteArray.length,this.totalTimeSinceLastRedraw=0):this.totalTimeSinceLastRedraw+=n,this.then=s},this.setNbImagesPerSecond=function(t){this.delayBetweenFrames=1e3/t}}return r(t,[{key:"reset",value:function(){this.currentFrame=0}}]),t}(),y=function(){function t(e,i){n(this,t),this.ctx=e,this.inputStates=i,this.position={x:0,y:0},this.scale=.7,this.state=t.RUNNING}return r(t,[{key:"setState",value:function(t){this.state!==t&&(this.state=t,this.explosion.reset())}},{key:"setImage",value:function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),s=1;s<e;s++)i[s-1]=arguments[s];this.sprite=l(p,[t].concat(i))}},{key:"setExplosion",value:function(t){this.explosion=new f,this.explosion.extractSprites(t,16,10,64,64)}},{key:"checkCollision",value:function(){for(var t=this,e=arguments.length,i=new Array(e),s=0;s<e;s++)i[s]=arguments[s];return!!i.find(function(e){return d(t,e,-20)})}},{key:"moveToStartPosition",value:function(){var t=this.ctx.canvas,e=t.height,i=t.width;this.position={x:i/2-this.sprite.width*this.scale/2,y:e-16-this.sprite.height*this.scale}}},{key:"setPosition",value:function(t,e){this.position={x:t,y:e}}},{key:"update",value:function(e){switch(this.state){case t.RUNNING:this.inputStates.left&&(this.position.x+=-t.maxSpeed*e),this.inputStates.right&&(this.position.x+=t.maxSpeed*e),this.sprite.draw(this.ctx,this.position.x,this.position.y,this.scale);break;case t.EXPLODING:this.explosion.draw(this.ctx,this.position.x,this.position.y)}}},{key:"height",get:function(){return this.sprite.height*this.scale}},{key:"width",get:function(){return this.sprite.width*this.scale}}]),t}();y.maxSpeed=.5,y.RUNNING="running",y.EXPLODING="exploding";var v=y,x=function(){function t(e,i){n(this,t),this.ctx=e,this.inputStates=i,this.speed={x:0,y:0},this.accel={x:0,y:0},this.totalSeconds=0}return r(t,[{key:"setImage",value:function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),s=1;s<e;s++)i[s-1]=arguments[s];this.sprite=l(p,[t].concat(i))}},{key:"update",value:function(t){var e=this.ctx.canvas.width,i=this.sprite,s=i.height,n=i.width;this.totalSeconds+=t,this.speed.y+=this.accel.y*t;var a=Math.ceil(e/n)+1,r=this.totalSeconds*this.speed.y%s;this.ctx.save(),this.ctx.translate(0,r);for(var o=0;o<a;o++)this.sprite.draw(this.ctx,e/2-n/2,-o*s,1);this.ctx.restore()}}]),t}();x.LANE_CENTER=[220,344,476,600];var m=x,g={images:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];var s=0,n={};return new Promise(function(t){e.forEach(function(i){var a=new Image;a.src=i,a.onload=function(){s++,n[i]=a,s===e.length&&t(n)}})})}},w=function(){function t(e){n(this,t),this.ctx=e,this.scale=.9,this.speed={x:.002,y:.1}}return r(t,[{key:"setImage",value:function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),s=1;s<e;s++)i[s-1]=arguments[s];this.sprite=l(p,[t].concat(i))}},{key:"moveToStartPosition",value:function(e){var i=e||this.startOffset;this.lane=t.getRandomInt(0,m.LANE_CENTER.length);var s=this.sprite,n=s.height,a=s.width;this.position={x:m.LANE_CENTER[this.lane]-a/2,y:-(n+i)},this.startOffset=i}},{key:"update",value:function(t){var e=m.LANE_CENTER[this.lane],i=this.sprite.width;Math.abs(e-i/2-this.position.x)>20&&(this.speed.x=-this.speed.x),this.position.x+=this.speed.x*t,this.position.y+=this.speed.y*t,this.sprite.draw(this.ctx,this.position.x,this.position.y,this.scale),this.position.y>this.ctx.canvas.height&&this.moveToStartPosition()}},{key:"height",get:function(){return this.sprite.height*this.scale}},{key:"width",get:function(){return this.sprite.width*this.scale}}],[{key:"getRandomInt",value:function(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t))+t}}]),t}(),k=i(0),S=i.n(k),N=i(1),E=i.n(N),L=i(2),R=i.n(L),T=i(3),b=i.n(T),C=i(4),A=i.n(C),I=i(5),P=i.n(I),O=5e3,G={MAIN_MENU:0,RUNNING:1,GAME_OVER:2},M=.15,_=.12,F=.14,U=.4,D=function(){function t(){n(this,t),this.inputStates={},this.currentGameState=G.RUNNING,this.currentLevel=1,this.currentLevelTime=O}return r(t,[{key:"loadAssets",value:function(t){g.images(S.a,R.a,E.a,b.a,A.a,P.a).then(function(e){return t(e)})}},{key:"start",value:function(t){var e=this;this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.ctx.font="22px Arial",o.listen(this.inputStates,this.canvas),this.player=new v(this.ctx,this.inputStates),this.road=new m(this.ctx,this.inputStates),this.roadLimitLeft={height:this.canvas.height,width:1,position:{x:90,y:0}},this.roadLimitRight={height:this.canvas.height,width:1,position:{x:this.canvas.width-90,y:0}},this.truck=new w(this.ctx),this.taxi=new w(this.ctx),this.car=new w(this.ctx),this.loadAssets(function(t){e.player.setImage(t[S.a],78,24,96,216),e.player.setExplosion(t[P.a]),e.road.setImage(t[R.a],0,0,840,650),e.truck.setImage(t[E.a],78,24,96,216),e.car.setImage(t[A.a],78,24,96,216),e.taxi.setImage(t[b.a],72,18,102,220),e.car.scale=.79,e.taxi.scale=.68,e.resetEntities(),requestAnimationFrame(e.mainLoop.bind(e))})}},{key:"resetEntities",value:function(){this.player.moveToStartPosition(),this.taxi.moveToStartPosition(200),this.truck.moveToStartPosition(450),this.car.moveToStartPosition(700),this.road.speed.y=U,this.road.accel.y=0,this.truck.speed.y=M,this.taxi.speed.y=F,this.car.speed.y=_,this.player.setState(v.RUNNING)}},{key:"clearCanvas",value:function(){var t=this.canvas,e=t.width,i=t.height;this.ctx.clearRect(0,0,e,i)}},{key:"running",value:function(e){var i=this;this.clearCanvas(),this.nextRoadSpeed<this.road.speed.y&&(this.road.accel.y=0),this.road.update(e),this.truck.update(e),this.taxi.update(e),this.car.update(e),this.player.update(e),this.displayScore(),this.currentLevelTime-=e,this.player.checkCollision(this.truck,this.taxi,this.car,this.roadLimitLeft,this.roadLimitRight)&&(this.player.setState(v.EXPLODING),setTimeout(function(){return i.currentGameState=G.GAME_OVER},1e3)),t.checkCollision(this.car,this.truck),t.checkCollision(this.car,this.taxi),t.checkCollision(this.taxi,this.truck)}},{key:"gameOver",value:function(){var t=this.ctx.canvas,e=t.width,i=t.height;this.ctx.save(),this.ctx.fillStyle="rgba(0, 0, 0, 0.05)",this.ctx.fillRect(100,50,e-200,i-100),this.ctx.fillStyle="white",this.ctx.fillText("GAME OVER",e/2-150,150),this.ctx.fillText("Press SPACE to start again",e/2-150,200),this.ctx.fillText("Move with arrow keys",e/2-150,250),this.ctx.fillText("Survive ".concat(O/1e3," seconds for next level"),e/2-150,300),this.ctx.restore()}},{key:"mainLoop",value:function(t){var e=c.getDelta(t);switch(this.currentGameState){case G.RUNNING:this.running(e),this.currentLevelTime<0&&this.goToNextLevel();break;case G.MAIN_MENU:break;case G.GAME_OVER:this.gameOver(),this.inputStates.space&&this.startNewGame()}requestAnimationFrame(this.mainLoop.bind(this))}},{key:"goToNextLevel",value:function(){this.currentLevelTime=O,this.currentLevel++;this.nextRoadSpeed=1.2*this.road.speed.y,this.road.accel.y=1e-5,this.truck.speed.y*=1.2,this.car.speed.y*=1.2,this.taxi.speed.y*=1.2}},{key:"startNewGame",value:function(){this.currentLevelTime=O,this.currentLevel=1,this.currentGameState=G.RUNNING,this.nextRoadSpeed=U,this.resetEntities()}},{key:"displayScore",value:function(){var t=this.ctx,e=this.currentLevel,i=this.currentLevelTime;t.save(),t.fillStyle="White",t.fillText("Level: "+e,300,30),t.fillText("Time: "+(i/1e3).toFixed(1),300,60),t.restore()}}],[{key:"checkCollision",value:function(t,e){d(t,e,20)&&(d(t,e)?t.moveToStartPosition():t.speed=function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){s(t,e,i[e])})}return t}({},e.speed))}}]),t}();window.onload=function(){(new D).start(document.querySelector("canvas"))}}],[[6,1]]]);
//# sourceMappingURL=main.fdecdc64.chunk.js.map