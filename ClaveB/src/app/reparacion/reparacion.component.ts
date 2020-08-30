import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule}from '@angular/platform-browser'
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

@Component({
  selector: 'app-reparacion',
  templateUrl: './reparacion.component.html',
  styleUrls: ['./reparacion.component.css']
})
export class ReparacionComponent implements OnInit {
  registro=[];
  cliente:any;
  nombre:string;
  dui:string;
  vehiculo:string;
  costo:number;
  visita:number;
  contador:number;
  constructor() { }

  ngOnInit() {
  this.dui='';
  this.nombre='';
  this.vehiculo='';
  this.costo=0;
  this.visita=0;
  this.contador=0;
  }

  ingresar(){

    for(var i=0; i<=this.registro.length;i++){ 
    if(this.registro[i].nombre==this.nombre){ //Parte donde no he podido resolver
      this.visita++;
    }
    else{
     this.visita=1;
    }
    console.log(this.registro[i]);
}

  this.cliente={"nombre":this.nombre,"dui":this.dui,"vehiculo":this.vehiculo,"costo":this.costo,"visita":this.visita,"contador":this.contador};
  this.registro.push(this.cliente);
  this.contador++;
 
  }
  }