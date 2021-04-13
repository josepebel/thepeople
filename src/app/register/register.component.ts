import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  sForm: FormGroup
  isSend = false

  constructor(private fb: FormBuilder) {
    this.sForm = fb.group({
      userName: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,8}$")]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
   }

  ngOnInit() {
  }

  get f(){
    return this.sForm.controls
  }

  saveData() {
    this.isSend = true
    console.log("Guardar!!", this.sForm);
    console.log(this.f.userName.errors)
    console.log(this.f.email.errors)
    console.log(this.f.password.errors)

    if(this.sForm.invalid) {
      console.error("El formulario NO es válido");
      return
    }

    console.log("El formulario es válido");

}}
