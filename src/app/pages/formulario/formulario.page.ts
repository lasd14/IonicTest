import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  nombre: string;

  usuario: {
    email: '',
    
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmitTemplate(){
    console.log('Form submit')
  }

}
