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
  cliente:any
  nombre:string;
  dui:number;
  vehiculo:string;
  costo:number;
  visita:number;
  descuento:number;
  total:number;
  contador:number;

  ngOnInit() {
  this.dui;
  this.nombre='';
  this.vehiculo='';
  this.costo;
  this.descuento=0;
  this.total=0;
  this.contador=0;
  }

  ingresar(){
    let repdui:any =1;
  repdui=this.registro.filter(element => element.dui == this.dui);
  console.log(repdui.length++)
  console.log(this.registro);


  this.cliente={"nombre":this.nombre,"dui":this.dui,"vehiculo":this.vehiculo,"costo":this.costo,"descuento":this.descuento,"total":this.total,"visita":repdui.length,};
  this.registro.push(this.cliente);
  this.contador++;
  }
  }
