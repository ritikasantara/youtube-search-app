import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  maxRes: number;
  query: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage) {
    this.maxRes = 5;
    this.query = "cats";

    this.storage.get('search_req').then((val)=>{

        if(val != null){

          let search_req = JSON.parse(val);
          this.maxRes = search_req.max_Res;
          this.query = search_req.query;

        }else{

          this.maxRes = 5;
          this.query = "cats";
        }


    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }


  saveForm(){
    let search_req = {
      maxRes: this.maxRes,
      query:this.query
    }
    this.storage.set('search_req',JSON.stringify(search_req));
    this.navCtrl.push(HomePage);
  }

}
