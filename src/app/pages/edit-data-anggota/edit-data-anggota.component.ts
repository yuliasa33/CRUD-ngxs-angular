import { Component,OnInit,AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnggotaService } from 'src/app/services/anggotaService/anggota.service';
import { UtilityService } from 'src/app/services/utility/utility.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-edit-data-anggota',
  templateUrl: './edit-data-anggota.component.html',
  styleUrls: ['./edit-data-anggota.component.scss']
})
export class EditDataAnggotaComponent implements OnInit,AfterViewInit{
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
              private utilityService:UtilityService,
              private activatedRoute:ActivatedRoute
  ){
  }

  ngOnInit(): void {
    this.FormInputData = this._formBuilder.group({
      id:[],
      nama:[""],
      alamat:[""],
      phone:[''],
      jenis_kelamin:[''],
      email:['']
    })

   
  }
  ngAfterViewInit(): void {
    let id = this.activatedRoute.snapshot.params['id']
    console.log('ID==>',id);
    this.anggotaService.onGetById(id).subscribe((result)=>{
      console.log("RESULT GETBYID ==>",result)
      this.onRemoveTimeStamps(result.data)
      this.FormInputData.setValue(result.data)
      this.FormInputData.get('jenis_kelamin')?.setValue(result.data.jenis_kelamin)
    })
    
  }

  handleClickBack():void{
    this.location.back()
  }

  onRemoveTimeStamps(data:any):void{
    delete data.updated_at;
    delete data.created_at
  }

  handleEdit():void{
    let payload = this.FormInputData.value
    console.log('PAYLOAD TO EDIT ==>',payload);
    this.anggotaService.onPutData(payload).subscribe((result)=>{
      if(result.responseResult){
        this.utilityService.onShowCustomAlert('success','Berhasil',result.message)
      }else{
        this.utilityService.onShowCustomAlert('error','Oops...',result.message)
      }
    })
  }
}
