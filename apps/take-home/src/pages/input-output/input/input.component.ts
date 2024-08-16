import { Component, inject, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { map } from 'rxjs';

import { ButtonComponent, FinancialInputComponent, ValueChange } from '@axial/ui';

import { TakeHomeService } from '@take-home/services';


@Component({
  standalone: true,
  imports: [
    CommonModule,
    FinancialInputComponent,
    ButtonComponent,
  ],
  selector: 'app-take-home-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputPageComponent {
  state = inject(TakeHomeService);
  router = inject(Router);

  cnn = this.state.select(`cnn`);

  isDisabled$ = toObservable(this.cnn)
    .pipe(
      map((value) => !value?.isValid),
    );

  valueChange = (value: ValueChange) => this.state.set(`cnn`, value);

  continue = () => this
    .router
    .navigate([`/output/${this.cnn()!.value}`]);
}
