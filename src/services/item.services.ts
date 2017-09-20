import {Injectable} from '@angular/core';

@Injectable()
export class ItemService{
    items=[
        {id:1, name:'Luis',number:'950390259'},
        {id:2, name:'Luis1',number:'950390258'},
        {id:3, name:'Luis2',number:'950390257'}
    ];
    public getItems(){
        return this.items;
    }

    public getItem(id){
        return  this.items.filter(function(e,i){ return e.id==id})[0] || {id:null,name:null,number:null};
  }

  public createItem(item){
      this.items.push(item);
  }

  public editItem(item){
    for(let i=0; i<this.items.length;i++){
        if(this.items[i].id==item.id)
            this.items[i]=item;
    }
}

public deleteItem(item){
    for(let i=0; i<this.items.length;i++){
        if(this.items[i].id==item.id)
            this.items.splice(i,1);
    
    }
    }
}
