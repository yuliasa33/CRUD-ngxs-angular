import { Injectable } from '@angular/core';
import { HttpOperationService } from '../http-request/http-operation.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnggotaService {

  constructor(private httpOperationService:HttpOperationService) { }

  onPostData(data:any):Observable<any>{
    return this.httpOperationService.onPostRequest('http://127.0.0.1:8000/api/anggota/Insert',data)
  }
  
  onGetById(id:any):Observable<any>{
    return this.httpOperationService.onGetRequest(`http://127.0.0.1:8000/api/anggota/getById/${id}`)
  }

  onPutData(data:any):Observable<any>{
    return this.httpOperationService.onPutRequest(`http://127.0.0.1:8000/api/anggota/Edit/${data.id}`,data)
  }

  onDeleteData(id:any):Observable<any>{
    return this.httpOperationService.onDeleteRequest(`http://127.0.0.1:8000/api/anggota/Delete/${id}`)
  }

}
