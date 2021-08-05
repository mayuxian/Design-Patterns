import { IBuilder } from "./IBuilder";
import {Production} from'./Production'
export class Director{

  public builderList:Array<IBuilder>=[];
  private _production:Production=new Production();

  public attach(builder:IBuilder):void{
    if(this.builderList.includes(builder))return;
    builder.init(this._production);
    this.builderList.push(builder)
  }
  public detach(builder:IBuilder):void{
    const index= this.builderList.indexOf(builder)
    if(index<0)return;
    this.builderList.splice(index,1)
  }

  public getProduction():Production{
    this.builderList?.forEach(builder=>builder.build())
    return this._production;
  }

}