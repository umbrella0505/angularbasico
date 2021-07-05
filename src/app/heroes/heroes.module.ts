import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { Heroecomponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
declarations:[
    Heroecomponent,ListadoComponent
],

exports:[
    ListadoComponent
],
imports:[
    CommonModule
]
})
export class HeroesModules{}