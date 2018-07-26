import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RegisterPage } from '../register/register';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-basic',
  templateUrl: 'basic.html',
})
export class BasicPage {

  registerRoot = RegisterPage;
  loginRoot = LoginPage;

  constructor(public navCtrl: NavController) {
  }

  registerPage(){
    this.navCtrl.push(RegisterPage);
  }

  loginPage(){
    this.navCtrl.push(LoginPage);
  }

  slides = [
    {
      title: "Bienvenido a clinnet",
      description: "Descubre que es <b>Clinnet</b>",
      image: "https://2.bp.blogspot.com/-w7jD6c0vvgk/W1AwM1kU9XI/AAAAAAAAAOs/7dS6dFX7Wg0NI5mgn95FXhth2Ve3yjfkQCK4BGAYYCw/s320/CliNET.png",
    },
    {
      title: "Mision",
      description: "<b>Dedicamos nuestro trabajo para ayudar a alcanzar una vida saludable, prestar un servicio de muy alta calidad orientado a satisfacer las necesidades de los pacientes y sus médicos tratantes. </b>",
      image: "http://clinicaabreu.com.do/wp-content/uploads/2014/09/03-09ClinicaAbreu-121.jpg",
    },
    {
      title: "Medicos",
      description: "<b>No somos una empresa de consulta, servicio que se ofrece, despersonalizado, desconectado de la salud de la familia etc., somos más que eso, un sistema flexible, nosotros nos acercamos al cliente y nos adaptamos a sus necesidades de cuidado de la salud familiar, con un enfoque preventivo, curativo cuando sea necesario y de orientación y apoyo ante cualquier necesidad de salud.</b>",
      image: "https://1vss76nhhzx246bcn1bq1rv1cf7-wpengine.netdna-ssl.com/wp-content/uploads/sites/11/2018/05/choosing-a-doctor.png",
    },
    {
      title: "Valores",
      description: 
       "<b>Calidad el el Servicion</b>, <b>Compromiso</b>, <b>Humanidad</b>, <b>Responsabilidad</b>, <b>Honestidad</b>, <b>Diciplina</b>",
      image: "https://www.ised.es/wp-content/uploads/2016/07/curso-de-secretariado-medico-historial.jpg",
    }
];

}
