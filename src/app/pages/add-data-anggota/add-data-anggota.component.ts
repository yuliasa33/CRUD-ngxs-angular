import { Location } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { AnggotaService } from 'src/app/services/anggotaService/anggota.service';
import { UtilityService } from 'src/app/services/utility/utility.service';



@Component({
  selector: 'app-add-data-anggota',
  templateUrl: './add-data-anggota.component.html',
  styleUrls: ['./add-data-anggota.component.scss']
})

export class AddDataAnggotaComponent implements OnInit{

  FormInputData!:FormGroup

  janis_kelamin:any[] = [
    {label:'Laki-laki',value:'Laki-laki'},
    {label:'Perempuan',value:'Perempuan'}
  ]

  selectedSex:any

  constructor(private router:Router,
              private location:Location,
              private _formBuilder:FormBuilder,
              private anggotaService:AnggotaService,
              private utilityService:UtilityService
  ){
    this.janis_kelamin
  }

  ngOnInit(): void {
    this.FormInputData = this._formBuilder.group({
      nama:[""],
      alamat:[""],
      phone:[''],
      jenis_kelamin:[''],
      email:['']
    })
  }

  handleClickBack():void{
    this.location.back()
  }

  handlSave():void{
    let payload = this.FormInputData.value
    console.log('PAYLOAD ==>',payload)
    this.anggotaService.onPostData(payload).subscribe((result:any)=>{
      if(result.responseResult){
        this.utilityService.onShowCustomAlert('success','Berhasil',result.message)
        .then(()=>{
          this.onResetForm()
          this.handleClickBack()
        })
      }else{
        this.utilityService.onShowCustomAlert('error','Oops...',result.message)
      }
    })
  }

  onResetForm():void{
    this.FormInputData.reset()
  }

}
