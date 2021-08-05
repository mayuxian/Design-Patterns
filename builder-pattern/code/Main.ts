import {CivilBuilder}from './CivilBuilder'
import {ElecBuilder}from './ElecBuilder'
import {Director}from './Director'
export class Application{

  public main():void{

    const cBuilder=new CivilBuilder();
    const eBuilder=new ElecBuilder();
    const director=new Director();
    director.attach(cBuilder)
    director.attach(eBuilder)

    director.getProduction();
  }
}