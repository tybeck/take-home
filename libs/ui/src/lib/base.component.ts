import {Injectable, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';

@Injectable()
export class BaseComponent implements OnDestroy {
  ngOnDestroy() {
    const keys = Object.keys(this);
    for (const key of keys) {
      const o$ = (this as unknown as {[key: string]: Subscription} | any)[key];
      if (o$ instanceof Subscription) {
        o$.unsubscribe();
      }
    }
  }
}

