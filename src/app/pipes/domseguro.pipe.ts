import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer ) {

  }

  // Lo que devuelve abajo se puede hacer sin usar SafeResourceUrl pero tiene que ser 'any" el retorno.
  transform(value: string, url: string): SafeResourceUrl {

    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value );

  }

}
