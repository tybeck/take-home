import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cnnToSnf',
  standalone: true,
})
export class CnnToSnfFormatPipe implements PipeTransform {

  transform(value: string): string | number {
    if (!value) {
      return value;
    }

    const regex = /^(\d*\.?\d+)([kKmMbB])$/;
    const match = value.match(regex);

    if (match) {
      const num = parseFloat(match[1]);
      const unit = match[2].toLowerCase();

      switch (unit) {
        case 'k':
          return num * 1_000;
        case 'm':
          return num * 1_000_000;
        case 'b':
          return num * 1_000_000_000;
        default:
          return value;
      }
    }

    return value;
  }
}
