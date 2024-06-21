import { Injectable } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { HttpOperationService } from 'src/app/services/http-request/http-operation.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {


  constructor(private httpOperationService:HttpOperationService) { }

  onGetData():Observable<any>{
    return this.httpOperationService.onGetRequest('http://127.0.0.1:8000/api/anggota/getAll')
  }

  onPostData(data:any):Observable<any>{
    return this.httpOperationService.onPostRequest('http://127.0.0.1:8000/api/anggota/Insert',data)
  }

}
