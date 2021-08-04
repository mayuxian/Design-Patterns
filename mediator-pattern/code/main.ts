import { HouseMediator } from './HouseMediator';
import {HouseCustomer} from './HouseCustomer'
class Application {

  public main():void {
    const mediator=new HouseMediator();
    const colleagueName="小明"
    const houseCustomer=new HouseCustomer(colleagueName);
    houseCustomer.bind(mediator);
    mediator.send(colleagueName,'有合适您的房子了.');
   }
}
