export class RootController {
  x = 10;

  getRoot = ( req, res ) => {
    res.render( "index", { x: this.x });
    this.x += 1;
  };
}