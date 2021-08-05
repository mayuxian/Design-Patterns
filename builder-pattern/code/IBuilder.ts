import {Production} from './Production'
export interface IBuilder{
  init(prod:Production):void;
  build():void;
  free():void;
}