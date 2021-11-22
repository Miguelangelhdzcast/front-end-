import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Actividad/listar/listar.component';
import { AgregarComponent } from './Actividad/agregar/agregar.component';
import { EliminarComponent } from './Actividad/eliminar/eliminar.component';
import { EditarComponent } from './Actividad/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AgregarComponent,
    EliminarComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
