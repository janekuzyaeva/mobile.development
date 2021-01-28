import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  purchases: any = [{}];
  filterParam: string;
  sortParam: string;
  id: number;

  constructor(private activeRoute: ActivatedRoute, private api: HttpService, private router: Router) {
    this.activeRoute.params.subscribe(param => {
      this.id = param.id;
    });
  }

  async ngOnInit() {
    this.purchases = await this.api.getPurchases();
  }


  toBolean(state){
    if (state == 'куплено'){
      return true;
    }else{
      return false;
    }
  }

  async buy(id, purchase){
    if (purchase.state == 'куплено'){
      purchase.state = 'не куплено'
      await this.api.putPurchases(id, purchase)
    }else{
      purchase.state = 'куплено'
      await this.api.putPurchases(id, purchase)
    }
    this.purchases = await this.api.getPurchases();
  }
  
  async onDelete(id){
    await this.api.deletePurchases(id);
    this.purchases = await this.api.getPurchases();
  }
}
