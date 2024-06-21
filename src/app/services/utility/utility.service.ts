import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Swal from 'sweetalert2'
@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  $ShowSidebar = new BehaviorSubject({})

  constructor() { }

  onShowCustomAlert(icons:any,title:any,text:any):Promise<any>{
    return Swal.fire({
      icon:icons,
      title:title,
      text:text,
    })
  }

  onShowConfirmationAlert(icons:any,title:any,text:any,actionYes:()=>any,actionNo:()=>any){
    return Swal.fire({
      icon:icons,
      title:title,
      text:text,
      showCancelButton:true,
      confirmButtonText:'Ya',
      cancelButtonText:'Tidak'
    }).then((result:any)=>{
      if(result.isConfirmed){
        return actionYes()
      }else{
        return actionNo()
      }
    })
  }

}
