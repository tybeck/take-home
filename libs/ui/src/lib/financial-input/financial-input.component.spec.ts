import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentRef } from '@angular/core';
import { fireEvent } from '@testing-library/angular';

import { FinancialInputComponent } from './financial-input.component';

describe('UiComponent', () => {
  let component: FinancialInputComponent;
  let componentRef: ComponentRef<FinancialInputComponent>;
  let fixture: ComponentFixture<FinancialInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FinancialInputComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FinancialInputComponent);
    componentRef = fixture.componentRef;
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('Check valid/invalid values', () => {
    const input = fixture.nativeElement.querySelector('input');
    const spy = jest.spyOn(component.valueChange, 'emit');

    fireEvent.input(input, {target: {value: '1m'}});

    expect(component.valueChange.emit).toHaveBeenCalledWith({
      isValid: true,
      value: '1m',
    });

    fireEvent.input(input, {target: {value: '.5'}});

    expect(spy.mock.lastCall?.[0]).toMatchObject({
      isValid: false,
      value: '.5',
    })
  });
});
