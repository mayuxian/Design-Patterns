export class Production{

  private _parts:Array<string>=[];
  public addPart(name:string):void{
         this._parts.push(name)
  }
}