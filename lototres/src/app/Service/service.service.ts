import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Actividad } from '../Modelo/Actividad';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  
  constructor(private http:HttpClient) { }
   
  Url='http://localhost:8080/lototres/actividad';
  
  getActividad(){
    return this.http.get<Actividad[]>(this.Url);

  }
  
}
