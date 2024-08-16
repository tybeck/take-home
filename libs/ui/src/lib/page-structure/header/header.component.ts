import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LogoComponent} from '../../logo/logo.component';

@Component({
  selector: 'lib-ui-header',
  standalone: true,
  imports: [
    CommonModule,
    LogoComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
