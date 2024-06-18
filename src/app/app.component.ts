import { Component, OnInit, inject } from '@angular/core';
import { TareasService } from './services/tareas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  listaTareas: string[] = [];
  nuevaTarea: string = '';

  private _serviceTarea = inject(TareasService);

  ngOnInit(): void {
    
    this.listaTareas = this._serviceTarea.getTareas();
  }

  agregarTarea(){

    this._serviceTarea.agregarTarea(this.nuevaTarea);
    this.nuevaTarea = '';
    this.listaTareas = this._serviceTarea.getTareas();
  }

  eliminarTarea(index:number){

    this._serviceTarea.eliminarTarea(index);
    this.listaTareas = this._serviceTarea.getTareas();
  }


}
