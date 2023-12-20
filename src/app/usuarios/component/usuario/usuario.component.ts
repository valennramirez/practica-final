import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../interface/user';
import { AutService } from '../../service/aut.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private autService : AutService, private router : Router, private formBuilder : FormBuilder) {}

  ngOnInit(): void {
    this.initform(); 
  }

  formulario! : FormGroup; 

  user : User | undefined; 

  initform()
  {
    this.formulario = this.formBuilder.group({
      username: ['', (Validators.required)], 
      password: ['', (Validators.required)]
    })
  }

  verificarDatos()
  {
    if(this.formulario.invalid) return; 

    const username = this.formulario.controls['username'].value; 
    const password = this.formulario.controls['password'].value; 

    this.autService.getUsuarios().subscribe({
      next : (us) => {

        this.user = us.find((u : User) => 
        u.username == username 
        && 
        u.password == password
        )

        console.log(this.user); 

       if(this.user)
       {
        this.autService.logIn(this.user); 

        alert('bien trolaa'); 

        this.router.navigate([]); 
       }
       else
       {
        alert ('Datos ingresados incorrectos. ');
       }

      }, 
      error : (err) => {
        console.log(err);  
      }

    })
  }


}
