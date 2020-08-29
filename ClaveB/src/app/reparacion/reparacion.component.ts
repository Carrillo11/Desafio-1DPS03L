import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule}from '@angular/platform-browser'

@Component({
  selector: 'app-reparacion',
  templateUrl: './reparacion.component.html',
  styleUrls: ['./reparacion.component.css']
})
export class ReparacionComponent implements OnInit {
  registro=[];
  cliente:any;
  i:number;
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
  this.contador=0;
  this.visita=0;
  this.i=0;
  }
  ingresar(){

    for(this.i;this.i<=this.contador; this.i++){

    if(this.dui===this.dui[this.i]){
        this.visita[this.i]++;
    }
    else{
      this.visita=1;
    }
  }
  
  this.cliente={"nombre":this.nombre,"dui":this.dui,"vehiculo":this.vehiculo,"costo":this.costo,"visita":this.visita};
  this.registro.push(this.cliente);
  this.contador++;
  }
  }