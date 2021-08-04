import { Observer } from "./Observer";
import { Entity } from "./Entity";

export class Application {

  public main():void {

    const observer=new Observer();
    const entity1=new Entity('李雷');
    const entity2=new Entity('韩梅梅');
    observer.attach(entity1)
    observer.attach(entity2)
    observer.notify('老师过来了.')
  }
}