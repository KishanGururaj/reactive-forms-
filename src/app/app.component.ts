import { Component } from '@angular/core';
import { FormBuilder,Validators} from '@angular/forms';
import { forbiddenNameValidator } from './shared/user-name.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string=''
  get userName(){
    return this.registrationForm.get('userName')
  }
  constructor(private fb:FormBuilder){}
  registrationForm=this.fb.group({
    userName:['',[Validators.required,Validators.minLength(3),forbiddenNameValidator(/password/)]],
    password:[''],
    confirmPassword:[''],
    address:this.fb.group({
      city:[''],
      state:[''],
      postalCode:['']
    })
  });
  // registrationForm =new FormGroup({
  //   userName:new FormControl('Kishan'),
  //   password:new FormControl(''),
  //   confirmPassword:new FormControl(''),
  //   address:new FormGroup({
  //     city:new FormControl(''),
  //     state:new FormControl(''),
  //     postalCode:new FormControl('')
  //   })
  // });
  loadApiData(){
    this.registrationForm.patchValue({
      userName:'bruce',
    password:'test',
    confirmPassword:'test',
   
    })
  }
}
