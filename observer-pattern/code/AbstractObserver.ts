import { AbstractEntity } from "./AbstractEntity";

export abstract class AbstractObserver {
 
  private _entitySet:Set<AbstractEntity> = new Set();
  get entitySet(){
    return this._entitySet;
  }

  constructor() {
    
  }

  public attach(observer : AbstractEntity):void{
     if(!this._entitySet.has(observer)){
           this._entitySet.add(observer)
     } 
  }

  public dettach(observer:AbstractEntity):void{
    this._entitySet.delete(observer);
  }

}