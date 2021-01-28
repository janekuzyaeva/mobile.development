import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/shared/service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  purchases: any = [{}];
  editForm: FormGroup;
  id: number;
  disabled = false;
  currentPurchase;

  constructor(
    private http: HttpService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) {
    this.activeRoute.params.subscribe(param =>{
      this.id = param.id;
    })
   }

  async ngOnInit() {
    this.getPurchase().then( () => {
      this.editForm = new FormGroup(
        {
          name: new FormControl({ value: this.currentPurchase.name, disabled: this.disabled}, [Validators.required]),
          amount: new FormControl({ value: this.currentPurchase.amount, disabled: this.disabled}, [Validators.required, Validators.pattern('^[1-9]+$')]),
          state: new FormControl({ value: this.currentPurchase.state, disabled: this.disabled}, [Validators.required])
        }
      )
    })
  }

  async getPurchase(){
    this.currentPurchase = await this.http.getPurchaseById(this.id);
    }

  async edit(){
    await this.http.putPurchases(this.id, this.editForm.value);
    this.router.navigate(['/purchases']);
  }

  async onDelete(){
    await this.http.deletePurchases(this.id);
    this.router.navigate(['/purchases']);
  }

}
