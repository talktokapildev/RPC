import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs/RX'
import { IRetData } from '../shared/iret-data.model'

@Injectable()
export class CalculationService {

  constructor() { }

  getCalculatedData():Observable<IRetData[]> {
    //let ranNum:number = this.getRandomInt(1, 10);
    let subject = new Subject<IRetData[]>()
    setTimeout(() => {subject.next(MainData); subject.complete(); }, 2000)
    return subject
  }

}

 const MainData:IRetData[] = [
    {
      refDate: new Date('9/26/2036'),
      benchmark1: '599.99%',
      benchmark2: '9.99%',
    },
    {
      refDate: new Date('1/2/2016'),
      benchmark1: '9.0%',
      benchmark2: '23%',
    },
    {
      refDate: new Date('1/2/2009'),
      benchmark1: '4.0%',
      benchmark2: '3%',
    },
    {
      refDate: new Date('11/2/2010'),
      benchmark1: '9.0%',
      benchmark2: '5%',
    },
    {
      refDate: new Date('1/3/2016'),
      benchmark1: '9.0%',
      benchmark2: '6%',
    },
    {
      refDate: new Date('1/2/2016'),
      benchmark1: '9.0%',
      benchmark2: '7%',
    },
    {
      refDate: new Date('1/5/2016'),
      benchmark1: '9.0%',
      benchmark2: '8%',
    },
    {
      refDate: new Date('1/2/2006'),
      benchmark1: '9.0%',
      benchmark2: '9%',
    },
    {
      refDate: new Date('1/2/2012'),
      benchmark1: '9.0%',
      benchmark2: '10%',
    },
    {
      refDate: new Date('1/2/2016'),
      benchmark1: '9.0%',
      benchmark2: '11%',
    },
    {
      refDate: new Date('1/2/2016'),
      benchmark1: '9.0%',
      benchmark2: '12%',
    }
  ];
