import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from "../../../services/request.service";
import { solicitudModel } from "../../../Models/solicitud.model";
import { FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(private requestServ : RequestService) { }

  listaSolicitudes: solicitudModel []=[];


  ngOnInit() {
    this.getAllSolicitudes();
  
  }

  getAllSolicitudes():void{
    this.requestServ.getAllSolicitudes().subscribe(items=>{
      this.listaSolicitudes=items;

    });
  }

  updateSolicitud(solicitud: solicitudModel):void{
    this.requestServ.editarSolicitud(solicitud).subscribe(items => {
      console.log(items)
    });
    console.log('update');
  }
}
