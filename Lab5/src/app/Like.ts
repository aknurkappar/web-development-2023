export class Like {
  counter : number;
  isLiked : boolean;

  constructor(  counter : number) {
    this.counter =   counter;
    this.isLiked = false;
  }

  setLike(){
    (this.isLiked ? this.counter -= 1 : this.counter += 1)
    this.isLiked = !this.isLiked;
  }
}
