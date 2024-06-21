import { Injectable } from '@angular/core';
import { HttpOperationService } from '../http-request/http-operation.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpOperationService:HttpOperationService) { }

  AuthenticateLogin(data:any):Observable<any>{
    return this.httpOperationService.onPostRequest(`http://127.0.0.1:8000/api/authentication`,data)
  }

}
