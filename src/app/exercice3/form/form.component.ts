import { Component, OnInit, Input } from '@angular/core';
import { MailService } from 'src/app/mail.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  mailForm: FormGroup;
  @Input('mail') mail ;
  @Input('i') i ;

  constructor(public servi: MailService) {
    this.mailForm = new FormGroup({
      email1: new FormControl('', [Validators.required, Validators.email]),
      email2: new FormControl('', [Validators.required, Validators.email]),
      obj: new FormControl('', [Validators.required]),
      mess: new FormControl('', [Validators.required]),
      
    });
  }
  ngOnInit() {
    console.log(this.mail)
  }

}
