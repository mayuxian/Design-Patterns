import { AbstractCustomer } from "./AbstractCustomer";
export  abstract class AbstractMediator{
  private colleagueMap:Map<string,AbstractCustomer>=new Map();
  public  send(name:string,msg: string):void{
    const coll=this.colleagueMap.get(name);
    coll?.send(msg)
  };
  public  add(name:string,colleague:AbstractCustomer):void{
    this.colleagueMap.set(name,colleague)
  };
  public  remove(colleague:AbstractCustomer):void{
    this.colleagueMap.delete(colleague.name);
  };
}