import { HttpClient } from  '@angular/common/http';
import { Injectable } from  '@angular/core';

@Injectable({
providedIn:  'root'
})
export class HttpService {

constructor(private http: HttpClient) { }
    getData(url:string) : any{
        this.http.get(url);
    }
    postData(url : string , body : any){
        this.http.post(url,body);
    }
    putData(url : string, body : any){
        this.http.put(url,body);
    }
    deleteData(url:string){
        this.http.delete(url);
    }
    
}