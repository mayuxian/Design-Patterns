import {IBuilder} from './IBuilder'
import {Production} from './Production'
 //土建
export class CivilBuilder implements IBuilder {
  private _production:Production
  init(prod: Production): void {
    this._production=prod;
  }

 //技能A,B,C是此实例建造者的属性,

  //技能A
  public buildPartA():void{
     this._production.addPart('屋顶')
  }

   //技能B
   public buildPartB():void{
    this._production.addPart('背景墙')
  }

  //技能C
  public buildPartC():void{
    this._production.addPart('地砖')
  }
  public build(): void {
    //只需要技能A和B
    this.buildPartA();
    this.buildPartB();
  }
  
  public free():void{
    this._production=null;
  }
}