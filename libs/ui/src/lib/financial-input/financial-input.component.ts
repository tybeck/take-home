import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseComponent } from '../base.component';
import { CNN_FORMAT, CNN_INVALID_FORMAT, CNN_LETTERS, VALID_FORMAT } from '../types';

export type ValueChange = {
  value: string;
  isValid: boolean;
}

@Component({
  selector: 'lib-ui-financial-input',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './financial-input.component.html',
  styleUrl: './financial-input.component.scss',
})
export class FinancialInputComponent extends BaseComponent {
  valueChange = output<ValueChange>();

  financialInputControl = new FormControl(
    '',
    {
      validators: [
        Validators.pattern(CNN_FORMAT),
      ],
    },
  );

  valueChanges$ = this
    .financialInputControl
    .valueChanges
    .subscribe(
      val => {
        if (val) {
          if (
            (!CNN_FORMAT.test(val) || CNN_INVALID_FORMAT.test(val)) ||
            CNN_LETTERS.test(val)
          ) {
            this.financialInputControl.setValue(
              val.slice(0, -1)
            );
          }
        }
        const value = this.financialInputControl.getRawValue() ?? '';
        const isValid = VALID_FORMAT.test(value);
        this.valueChange.emit({
          value,
          isValid,
        });
      });
}
