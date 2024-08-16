import {computed, Signal, signal} from '@angular/core';
import {toObservable} from '@angular/core/rxjs-interop';
import {filter} from 'rxjs';

export interface SignalStoreEvent<Event> {
  event: Event;
  data?: any;
}

export class SignalStoreService<
  T,
  EventType,
  Event extends SignalStoreEvent<EventType>,
> {
  readonly state = signal({} as T);

  private lastEvent = signal<any | null>(null);
  private lastEvent$ = toObservable(this.lastEvent);

  constructor(initialState: Partial<T>) {
    this.setState(initialState);
  }

  public select<K extends keyof T>(key: K): Signal<T[K]> {
    return computed(() => this.state()[key]);
  }

  public set<K extends keyof T>(key: K, data: T[K]) {
    this.state.update((currentValue) => ({...currentValue, [key]: data}));
  }

  public setState(partialState: Partial<T>): void {
    this.state.update((currentValue) => ({...currentValue, ...partialState}));
  }

  dispatch = (event: Event) => this.lastEvent.set(event);

  on = <E = EventType>(type: E) =>
    this.lastEvent$.pipe(
      filter((event) => event !== null && event.event === type),
    );
}
