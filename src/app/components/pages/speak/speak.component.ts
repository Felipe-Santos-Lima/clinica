import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-speak',
  templateUrl: './speak.component.html',
  styleUrls: ['./speak.component.css']
})
export class SpeakComponent {
faleConoscoForm!: FormGroup;


ngOnInit(): void{
  this.faleConoscoForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    number: new FormControl('', [Validators.required,
    Validators.pattern("[0-9]*"),
    Validators.minLength(10),
    Validators.maxLength(10),
  ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    assunto: new FormControl('', [Validators.required]),
  });
}

get nome(): FormControl{
  return this.faleConoscoForm.get('nome') as FormControl;
}
get number(): FormControl {
  return this.faleConoscoForm.get('number') as FormControl;
}
get email(): FormControl {
  return this.faleConoscoForm.get('email') as FormControl;
}
get assunto(): FormControl {
  return this.faleConoscoForm.get('assunto') as FormControl;
}


  submit(){
    if (this.faleConoscoForm.invalid){
      return;
    }

}
}
