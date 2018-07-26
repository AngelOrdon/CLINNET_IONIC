import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UserService]
})
export class LoginPage {
  public title:string;
	public user:User;
	public status:string;
	public identity;
  public token;
  
  public registerRoot = RegisterPage;
  public tabsRoot = TabsPage;

  constructor(
    public navCtrl: NavController,
    private _userService: UserService
  ) {
    this.title = 'Identificate';
		this.user = new User("","","","","","","","");
  }

  onSubmit(){
		// loguear al usuario y conseguir sus datos
		this._userService.signup(this.user).subscribe(
			response => {
				this.identity = response.user;

				console.log(this.identity);

				if(!this.identity || !this.identity._id){
					this.status = 'error';
				}else{
					// PERSISTIR DATOS DEL USUARIO
					localStorage.setItem('identity', JSON.stringify(this.identity));

					// Conseguir el token
					this.getToken();
        }
        
        this.navCtrl.setRoot(TabsPage);
				
			},
			error => {
				var errorMessage = <any>error;
				console.log(errorMessage);

				if(errorMessage != null){
					this.status = 'error';
				}
			}
		);
	}


	getToken(){
		this._userService.signup(this.user, 'true').subscribe(
			response => {
				this.token = response.token;
				
				console.log(this.token);

				if(this.token.length <= 0){
					this.status = 'error';
				}else{
					
					// PERSISTIR TOKEN DEL USUARIO
					localStorage.setItem('token',this.token);

					// Conseguir los contadores o estadisticas del usuario
					this.getCounters();
				}
				
			},
			error => {
				var errorMessage = <any>error;
				console.log(errorMessage);

				if(errorMessage != null){
					this.status = 'error';
				}
			}
		);
	}

	getCounters(){
		this._userService.getCounters().subscribe(
			response => {
				localStorage.setItem('stats', JSON.stringify(response));
				this.status = 'success';
			},
			error => {
				console.log(<any>error);
			}
		)

	}

	registerPage(){
		this.navCtrl.push(RegisterPage);
	}

}
