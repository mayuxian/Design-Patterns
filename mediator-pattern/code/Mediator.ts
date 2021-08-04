import { AbstractColleague } from "./AbstractColleague";
export  class Mediator{
  private colleagueArr:Array<AbstractColleague>=[];
  public  send(msg: String,colleague :AbstractColleague):void{
    const coll=this.colleagueArr.find(x=>x===colleague);
    coll?.send(msg);
  };
  public  add(colleague:AbstractColleague):void{
    this.colleagueArr.push(colleague)
  };
  public  remove(colleague:AbstractColleague):void{
     const index= this.colleagueArr.indexOf(colleague)
     this.colleagueArr.splice(index,1);
  };
}