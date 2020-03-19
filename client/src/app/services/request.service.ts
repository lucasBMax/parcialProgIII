import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { solicitudModel } from "../Models/solicitud.model";



const base_url:String='http://localhost:3000/api/'
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  registrarSolicitud(solicitud: solicitudModel): Observable<solicitudModel> {
    return this.http.post<solicitudModel>(`${base_url}solicituds`, solicitud, {
      headers: new HttpHeaders({
        "content-type": "application/json"
    })
  });
}

getAllSolicitudes():Observable<solicitudModel[]>{
  return this.http.get<solicitudModel[]>(`${base_url}solicituds`)
}

editarSolicitud(solicitud: solicitudModel): Observable<solicitudModel> {
  return this.http.put<solicitudModel>(`${base_url}solicituds`, solicitud, {
    headers: new HttpHeaders({
      "content-type": "application/json"
  })
});

}
}
