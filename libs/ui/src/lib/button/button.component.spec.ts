import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentRef } from '@angular/core';

import { ButtonComponent } from './button.component';

describe('UiComponent', () => {
  let component: ButtonComponent;
  let componentRef: ComponentRef<ButtonComponent>;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    componentRef = fixture.componentRef;
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('Enable and disabled', () => {
    const buttonElement = fixture.nativeElement.querySelector('button');
    jest.spyOn(component.clicked, 'emit');
    buttonElement.click();

    expect(component.clicked.emit).toHaveBeenCalled();

    componentRef.setInput('disabled', true);
    buttonElement.click();

    expect(component.clicked.emit).toHaveBeenCalledTimes(1);
  });
});
