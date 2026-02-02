// TODO
// A `Circle` class/function that can be invoked as :
// const c = new Circle();
// It should contain at least 3 hidden fields `x`, `y`, and `radius`.
export function Circle(x, y, r) {
  if(x === undefined) x = 0;
  if(y === undefined) y = 0;
  if(r === undefined) r = 0;

  let xLoc = x;
  let yLoc = y;
  let radiusLoc = r;

  //objet en cours de creation
  Object.defineProperties(this, {
    //prop pour retourner xLox et yLOc
    coords : {
      get() { return [ xLoc, yLoc]},enumerable: false
    }, 
    //prop pour retourner radius et un message d'erreur si negatif
    radius: { 
      get() {
        return radiusLoc;}, 
        set(value) { 
          if(value < 0) {
            throw new Error('Radius must be positive');} 
            radiusLoc = value;
        }, 
        enumerable: false,
      },
    
    //prop pour calculer l'aire 
    area: {
      //calcul de l'aire du circle
      get() {
        return Math.PI * radiusLoc * radiusLoc;
      },
      //retouve le rayon a partir de l'aire et evoyer un message d'erreur si la valuer est negative
      set(value) {
        if(value < 0) {
          throw new Error("Area must be positive");
        }
        radiusLoc = Math.sqrt(value / Math.PI);
      },
      enumerable: false,
    },

    //prop pour modifier x et y 
    moveTo: {
      value(newx, newY){
        xLoc = newx;
        yLoc = newY;
      }
    },
    }
  );



}
  






