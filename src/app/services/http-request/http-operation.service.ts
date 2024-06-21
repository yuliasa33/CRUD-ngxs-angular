import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpOperationService {

  constructor(private httpClient:HttpClient) { }

  onGetRequest(url:any){
    return this.httpClient.get<any>(url)
    .pipe(map((result)=>{
      console.log('result',result)
     return result
    }))
  }

  onPostRequest(url:any,data:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    return this.httpClient.post<any>(url,data,{headers})
    .pipe(map((result:any)=>{
      if(result.responseResult){
        return result
      }
      else{
        return 0
      }
    }))
  }

  onPutRequest(url:any,data:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    return this.httpClient.put<any>(url,data,{headers})
    .pipe(map((result:any)=>{
      if(result.responseResult){
        return result
      }
      else{
        return 0
      }
    }))
  }

  onDeleteRequest(url:any){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    return this.httpClient.delete<any>(url,{headers})
    .pipe(map((result:any)=>{
      if(result.responseResult){
        return result
      }else{
        return 0
      }
    }))
  }

}
