import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ItemService} from '../../services/item.services'
/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  
  id=null;
  i=10;
  item={id:null,name:null,number:null};
  constructor(public navCtrl: NavController, public navParams: NavParams, public itemService: ItemService) {
    this.id=navParams.get('id');
    if (this.id!=0){
      this.item=itemService.getItem(this.id);
    }
  }

  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }
      
  addItem(){
    if(this.id!=0){
      this.itemService.editItem(this.item);
      alert('Item editado');
    }
    else{
    this.item.id=Date.now();
    alert('Item creado');
    this.itemService.createItem(this.item);
  }
  this.navCtrl.pop();
}
deleteItem(){
  this.itemService.deleteItem(this.item);
  alert('Item eliminado');
  this.navCtrl.pop();
  }
}
