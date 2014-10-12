
// A black background
function Background() {}
Background.prototype.draw = function(context) {
  context.fillStyle = '#000'
  context.fillRect(0, 0, game.width, game.height)
}

function Ball() {
  Entity.call(this)

  this.width = 20
  this.height = 20

  this.x = game.width / 2 - this.width
  this.y = game.height / 2 - this.height
  // TODO init the ball position and velocity
  this.yVelocity = 5
}
Ball.prototype = Object.create(Entity.prototype)
Ball.prototype.constructor = Ball

Ball.prototype.update = function() {
  Entity.prototype.update.apply(this, arguments)

  // TODO check if the ball hit a wall and rebound (inverse velocity)
 if(this.y > game.height - this.height || this.y < 0) {
   this.yVelocity *= -1
 }
}

// Initialize and start the game
var game = new Game($('canvas')[0])

// Load the game entities
game.entities = [
  new Background(),
  new Ball(),
]

game.start()
$('canvas')[0].focus()
