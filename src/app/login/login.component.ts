import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  mForm: FormGroup
  isSend = false

  constructor(private fb: FormBuilder) {
    this.mForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,8}$")]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
   }

  ngOnInit() {
  }

  get f(){
    return this.mForm.controls
  }

  sendData() {
    this.isSend = true
    console.log("Guardar!!", this.mForm);
    console.log(this.f.email.errors)
    console.log(this.f.password.errors)

    if(this.mForm.invalid) {
      console.error("El formulario NO es válido");
      return
    }

    console.log("El formulario es válido");

}}

