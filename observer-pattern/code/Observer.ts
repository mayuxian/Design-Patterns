import { AbstractEntity } from "./AbstractEntity";
import { AbstractObserver } from "./AbstractObserver";

export class  Observer extends AbstractObserver{

  public notify(msg:string):void{
    this.entitySet.forEach(entity=>{
      entity.update(msg);
    })
  } 
}