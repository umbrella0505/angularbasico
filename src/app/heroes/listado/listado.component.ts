import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['spiderman', 'ironman', 'hulk', 'thor', 'hwkeye'];
  heroeBorrado: string = '';

  borrarheroe() {
    console.log('Borrando...');

    let removed = this.heroes.shift();
    this.heroeBorrado = removed!; //o removed||'' las dos son soluciones para el tipo string|undefined
    console.log(this.heroeBorrado);
  }
}
