export class RootController {
  x = 10;

  getRoot = ( req, res ) => {
    res.json({"message":"Hello, World!", "x": this.x});
    this.x += 1;
  };
}