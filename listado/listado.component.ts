import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  // styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  
heroes: string[]=['Spiderman', 'Superman', 'Ironman', 'Hulk'];
heroeBorrado: string='';
muestra: boolean=false;

borrarHeroe(){

  console.log("Borrando..");
  this.heroeBorrado = this.heroes.splice(0,1).toString() ;
  if (this.heroeBorrado.length>0) {
    this.muestra= true;
  } else {
    this.muestra= false;
  }
}


}
