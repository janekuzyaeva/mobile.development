import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from 'src/app/shared/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addForm: FormGroup;
  disabled: any;
  id: number;

  constructor(private activeRoute: ActivatedRoute, private router:Router, private api: HttpService) {
    this.activeRoute.params.subscribe(param => {
      this.id = param.id;
    });
  }

  async ngOnInit(){
    this.addForm = new FormGroup(
      {
        name: new FormControl({value: '', disabled: this.disabled}, [Validators.required]),
        amount: new FormControl({value: '', disabled: this.disabled}, [Validators.required, Validators.pattern('^[0-9]+$')]),
        state: new FormControl({value: 'не куплено', disabled: this.disabled}, [Validators.required]),
      }
    )
  }

  async add(){
    try {
      await this.api.postPurchases(
        JSON.stringify(this.addForm.value)
      );
    this.router.navigate(['/purchases']);
    } catch (err) {
      console.log(err);
    }
  }
}