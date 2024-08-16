import {Component, input, output} from '@angular/core';
import { CommonModule } from '@angular/common';

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
}

@Component({
  selector: 'lib-ui-button',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  type = input<ButtonType>(ButtonType.Primary);
  disabled = input<boolean | null | undefined>(false);
  text = input<string>();

  clicked = output<void>();

  beenClicked = () => {
    if (!this.disabled()) {
      this.clicked.emit();
    }
  }
}
