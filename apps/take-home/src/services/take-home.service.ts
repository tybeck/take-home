import {Injectable} from '@angular/core';

import {ValueChange} from '@axial/ui';

import {SignalStoreService} from './signal.store';

export interface TakeHomeState {
  /**
   * @property cnn
   * compact number notation
   */
  cnn?: ValueChange | null;
}

export enum TakeHomeEventType {}

export interface TakeHomeEvent<T = TakeHomeEventType> {
  event: T;
  data?: any;
}

@Injectable({ providedIn: 'root' })
export class TakeHomeService extends SignalStoreService<TakeHomeState, TakeHomeEventType, TakeHomeEvent> {
  constructor() {
    super({
      cnn: null,
    });
  }
}
