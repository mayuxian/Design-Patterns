import {IBuilder} from './IBuilder'
import {Production} from './Production'

//电力建造者
export class ElecBuilder implements IBuilder {
  private _production:Production
  init(prod: Production): void {
    this._production=prod;
  }

 //技能A,B,C是此实例建造者的属性,

  //技能A
  public buildPartA():void{
     this._production.addPart('照明')
  }

   //技能B
   public buildPartB():void{
    this._production.addPart('电器用电')
  }

  //技能C
  public buildPartD():void{
    this._production.addPart('电梯')
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
}