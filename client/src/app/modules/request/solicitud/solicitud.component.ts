import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators} from "@angular/forms";
import { solicitudModel } from '../../../Models/solicitud.model';
import { RequestService } from '../../../services/request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  constructor(private requestService: RequestService, private router: Router) { }

  ngOnInit() {
    this.requestFormGroup = this.formGroupCreator();
  }

    requestFormGroup: FormGroup;

    formGroupCreator(): FormGroup {
      return new FormGroup({
        nameClient: new FormControl('', [Validators.required]),
        docClient: new FormControl('', [Validators.required]),
        brand: new FormControl('', [Validators.required]),
        model: new FormControl('', [Validators.required]),
        imei: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        type: new FormControl('', [Validators.required]),
        comments: new FormControl('', [Validators.required])
      });
  }

  get nameClient() {
    return this.requestFormGroup.get('nameClient');
  }

  get docClient() {
    return this.requestFormGroup.get('docClient');
  }

  get brand() {
    return this.requestFormGroup.get('brand');
  }

  get model() {
    return this.requestFormGroup.get('model');
  }

  get imei() {
    return this.requestFormGroup.get('imei');
  }

  get description() {
    return this.requestFormGroup.get('description');
  }

  get type() {
    return this.requestFormGroup.get('type');
  }

  get comments() {
    return this.requestFormGroup.get('comments');
  }
  
  buildRequestData():solicitudModel{
    let requestBuild :solicitudModel={
      nameClient: this.nameClient.value,
      docClient: this.docClient.value,
      brand: this.brand.value,
      model:this.model.value,
      imei:this.imei.value,
      description:this.description.value,
      type:this.type.value,
      comments:this.comments.value
    }
    return requestBuild;
  
  }

  saveNewRequest():void{
    if(this.requestFormGroup.valid){
      let solicitud = this.buildRequestData();
        this.requestService.registrarSolicitud(solicitud).subscribe(item => {
          console.log(item);
        });
    }else{
      console.log('error')
    }
  }

}
