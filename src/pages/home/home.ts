import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { HttpClient } from '@angular/common/http';
import { SearchProvider } from '../../providers/search/search';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  posts: any=[];

  search_req:{
    maxRes: number,
    query: string
  }

  constructor(public navCtrl: NavController,public http: HttpClient,private searchProvider: SearchProvider) {
  
    

  }

  ionViewWillEnter(){
  //  this.youtube_posts = this.searchProvider.getYoutubePosts();
  //  console.log(this.youtube_posts);

    this.search_req={
      maxRes:5,
      query:'cats'
    }

  
 

    this.searchProvider.getYoutubePosts(this.search_req.maxRes,this.search_req.query).subscribe(posts=>{
      console.log("first", posts)
     this.posts.push(...posts["items"]);
     console.log("posts", this.posts)
     //console.log(posts); 
     
    })


}

  

  loadSearchPage(){
      this.navCtrl.push(SearchPage);
  }
}
