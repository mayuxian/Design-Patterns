import { Mediator } from "./Mediator";
export class AbstractColleague{
  private mediator:Mediator ;
  public name:String;
  public constructor(name:String){
     this.name=name;
  }

  public bind(mediator:Mediator):void{
    this.mediator=mediator;
    this.mediator.add(this)
  }
  public unBind():void{
    this.mediator.remove(this)
  }

  public send(msg:String):void{
   this.mediator.send(msg,this)
  }

  public notify(msg:String):void{
    console.log(`${this.name}同学收到消息${msg}`)
  }
}