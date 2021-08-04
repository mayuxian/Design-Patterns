import { AbstractEntity } from "./AbstractEntity";
export class Entity extends AbstractEntity{
  private name:string;
  constructor(name:string) {
    super()
    this.name=name
  }

  public update(msg:string):void{
     console.log(`${name}收到消息:${msg}`)
  }
}