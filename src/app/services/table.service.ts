import { HttpClient,} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  
  constructor(private httpClient:HttpClient) { }

  getTable():Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/users")
  }
  
  getTable1(value:any):Observable<any>{

    console.log(value)

    let url="https://6128991386a213001729f9df.mockapi.io/test/v1/users?page="+value.page.current+"&limit="+value.page.size;

    if(value.sort){

      let orderby;

      if(value.sort.reverse=true){
        orderby="asc"
      }
      else{
        orderby="desc"
      }
      url=url +"&sortBy="+value.sort.by+"&order="+orderby;
    }

    if(value.filters){
      // url=url +"&"+value.filters[0].property+"="+value.filters[0].value;
      for(let i=0; i<value.filters.length; i++){
        console.log(value.filters[i])
        url=url +"&"+value.filters[i].property+"="+value.filters[i].value;
      }
    }

    return this.httpClient.get(url)

    
  }
}
