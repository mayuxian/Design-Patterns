 import {Mediator} from './Mediator';
import {OneColleague} from './OneColleague'
 class Application {


  public main():void {
     
    const mediator=new Mediator();
    const oneColleague=new OneColleague('小明');
  oneColleague.bind(mediator);
  mediator.send('有合适您的房子了.',oneColleague);
   }
}
