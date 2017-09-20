import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemService } from '../../services/item.services'
import {DetailPage} from '../detail/detail'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items =[];
  @ViewChild('myNav') nav: NavController
  constructor(public navCtrl: NavController, public itemService :ItemService) {
      this.items= itemService.getItems();
  }
    public goDetail(id){
      this.navCtrl.push(DetailPage, {id:id});
    }
    
    public createItem(){
      this.navCtrl.push(DetailPage, {id:0});

}

}
