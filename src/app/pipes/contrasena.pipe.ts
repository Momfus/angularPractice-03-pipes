import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = true ): string {

    if ( activar ) {

      let contrasenaOculta = '';

      // tslint:disable-next-line: prefer-for-of
      for ( let i = 0; i < value.length; i++ ) {

        contrasenaOculta += '*';

      }

      return contrasenaOculta;

    } else {

      return value;

    }

  }

}
