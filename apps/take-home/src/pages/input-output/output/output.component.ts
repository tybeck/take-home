import { Component, inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, map, Observable, take } from 'rxjs';

import { ButtonComponent, ButtonType } from '@axial/ui';

import { TakeHomeService } from '@take-home/services';
import { CnnToSnfFormatPipe } from '@take-home/pipes';

type UrlParams = {
  value: string;
}

@Component({
  standalone: true,
  imports: [
    CommonModule,
    CnnToSnfFormatPipe,
    CnnToSnfFormatPipe,
    ButtonComponent,
  ],
  selector: 'app-take-home-output',
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss',
})
export class OutputPageComponent {
  protected readonly ButtonType = ButtonType;

  router = inject(Router);
  state = inject(TakeHomeService);
  activatedRoute = inject(ActivatedRoute);

  cnn$ = toObservable(this.state.select(`cnn`));

  value$: Observable<string> = combineLatest([
    this.activatedRoute.params,
    this.cnn$,
  ])
    .pipe(
      take(1),
      map(([params, cnn]) => {
        const urlParams = params as UrlParams;
        if (cnn) {
          return cnn.value;
        }
        return urlParams.value ?? '';
      }),
    );

  back = () => this.router.navigate(['/input']);
}
