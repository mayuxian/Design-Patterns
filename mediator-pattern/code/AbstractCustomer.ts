import { AbstractMediator } from "./AbstractMediator";
export class AbstractCustomer{
  private mediator:AbstractMediator ;
  public name:string;
  public constructor(name:string){
     this.name=name;
  }

  public bind(mediator:AbstractMediator):void{
    this.mediator=mediator;
    this.mediator.add(this.name,this)
  }
  public unBind():void{
    this.mediator.remove(this)
  }

  public send(msg:string):void{
   this.mediator.send(this.name,msg)
  }

  public notify(msg:string):void{
    console.log(`${this.name}同学收到消息${msg}`)
  }
}