import { Component, Input } from '@angular/core';

@Component({
    selector: 'ap-photo',
    templateUrl: './photo.component.html',
  })

export class PhotoComponent {

  @Input() description= '';

  @Input() url= '';
}

/**
 * @Input() O que acontece é que precisamos explicitar que tais propriedades podem receber um parâmetro externo, passando um valor por meio da forma declarativa do componente. Esses valores ficam dentro do seletor <ap-photo url"..." e description"...".
 */