import { Component, OnInit,OnDestroy } from '@angular/core';
import { GridModele } from 'src/app/components/models/grid.model';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Store } from '@ngxs/store';
import { InitData } from './statemanagement/home.action';
import { GetDataState } from './statemanagement/home.state';
import { HomeService } from './service/home.service';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/services/utility/utility.service';
import { AnggotaService } from 'src/app/services/anggotaService/anggota.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss'],

})
export class HomeScreenComponent implements OnInit ,OnDestroy{

  destroy$ = new Subject()

  GridProps: GridModele.IGrid = {
    id:'GridTraining',
    column: [
      { field: 'id', headerName: 'ID', flex: 50,hide:true, sortable: true, resizable: true ,lockVisible:true},
      { field: 'nama', headerName: 'NAME', flex: 100, sortable: true, resizable: true },
      { field: 'alamat', headerName: 'ALAMAT', flex: 200, sortable: true, resizable: true },
      { field: 'email', headerName: 'EMAIL', flex: 200, sortable: true, resizable: true },
      { field: 'phone', headerName: 'PHONE', flex: 200, sortable: true, resizable: true },
      { field: 'jenis_kelamin', headerName: 'Sex', flex: 200, sortable: true, resizable: true },
  ],
    dataSource: [],
    height: 'calc(100vh - 12rem)',
    showPaging: true,
    toolbar: ["add","edit","delete"],
    paginationSize:30
  }
  selectedData:any

  items$!: Observable<any[]>;


  constructor(private store: Store,
            private homeService:HomeService,
            private router:Router,
            private utilityService:UtilityService,
            private anggotaService:AnggotaService
  ) { 

   }

  ngOnInit(): void {
   this.onGetData()
    
  }

  onGetData():void{
    this.homeService.onGetData().subscribe(res=>{
      this.GridProps.dataSource = res.data
     })
  }

  onClickCell(args:any):void{
    this.selectedData = args
  }

  handleClickToolbar(args:any):void{
    console.log(args)
    let select = args.id
    if(select == 'add'){
      this.router.navigateByUrl('add-anggota')
    }

    if(select == 'edit'){
      if(!this.selectedData){
        this.utilityService.onShowCustomAlert('warning','Hmmm','Tidak Ada data yang dipilih')
      }
      this.router.navigate(['edit-anggota',this.selectedData.id])
    }

    if(select == 'delete'){
      if(this.selectedData.id){
        this.utilityService.onShowConfirmationAlert('warning','Perhatian',`Apakah anda ingin mengahpus data keanggotaan An ${this.selectedData.nama}`,
          ()=>{
            this.anggotaService.onDeleteData(this.selectedData.id).subscribe(result=>{
              if(result.responseResult){
                this.utilityService.onShowCustomAlert('success','Berhasil',result.message)
                .then(()=>{
                  this.onGetData()
                })
              }else{
              this.utilityService.onShowCustomAlert('error','Oops...',result.message).then(()=>{
              })
            }
            })
          },
          ()=>{

          }
        )
      }else{
        this.utilityService.onShowCustomAlert('warning','Hmmm','Tidak Ada data yang dipilih')
      }
    }
  }

  ngOnDestroy(): void {
    this.destroy$.complete()
    this.destroy$.next(0)
  }

}
