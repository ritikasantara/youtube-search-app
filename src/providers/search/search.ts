import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the SearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SearchProvider{

  //query: string = 'cats';
  //maxResult: number = 5;
  //posts: any=[];
  key: string='AIzaSyBFn15idZptusYgsCU3SqOjXhMZJc0CFE0';

  constructor(public http: HttpClient) { 
    console.log('Hello SearchProvider Provider');
  }

  getYoutubePosts(maxResult,input_query){
    console.log("This was called")
    
    let url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=' + maxResult +'&q=' + input_query + '&key=' + this.key;
    console.log(url);
     return this.http.get(url).map(data=>{
      //this.posts.push(...data['items']);
      //this.posts=this.posts.concat(data['items']);
      //console.log("Array", this.posts);
      //return this.posts;
      console.log("received", data);
      return data
    })

  }

}



