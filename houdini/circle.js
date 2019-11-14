class CirclePainter {
  static get inputProperties() {
    return ['--circle-color', '--circle-size']
  }

  static get inputArguments() {
    return ['*'];
  }

  paint(ctx, geom, properties, args) {
    ctx.beginPath();
    console.log(args[0]);
    ctx.fillStyle = properties.get('--circle-color').toString();
    ctx.arc(geom.width/2, geom.width/2, geom.width/2, 0, 2 * Math.PI);
    ctx.fill();
  }
}
registerPaint('circle', CirclePainter);