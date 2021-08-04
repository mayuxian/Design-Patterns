import { HouseMediator } from './HouseMediator';
import {HouseCustomer} from './HouseCustomer'
class Application {

  public main():void {
    const mediator=new HouseMediator();
    const colleagueName="小明"
    const houseCustomer=new HouseCustomer(colleagueName);
    houseCustomer.bind(mediator);
    mediator.send(colleagueName,'有合适您的房子了.');

    //以上模式像什么? 在家个下面的这个方法,是不是变成观察者模式了
    mediator.sendAll('紧急通知:所有房源马上涨价10%,欲购从速!')

    //实现不同的中介,客户,通过Map<key,value>管理起来,那也就实现了发布,订阅模式
   }
}
