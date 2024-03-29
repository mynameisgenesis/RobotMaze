"use strict";

function Maze(width,height){
  this.width = width;
  this.height = height;

  this.startX            = null;
  this.startY            = null;
  this.startOrientation  = null;
  this.endX              = null;
  this.endY              = null;

  this.spaces = [];

  var x, y;
  for(x = 1; x <= width; x += 1){
    this.spaces[x] = [];
    for(y = 1; y <= height; y += 1){
      this.spaces[x][y] = new MazeSpace;
    }
  }
}

Maze.prototype.setStart = function(x,y,orentation){
  this.startX = x;
  this.startY = y;
  this.startOrientation = orentation;
}

Maze.prototype.setEnd = function(x,y){
  this.endX = x;
  this.endY = y;
}
