import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [UserService]
})
export class RegisterPage {

  public title:string;
	public user: User;
	public status: string;

  constructor(
    public navCtrl: NavController, 
    private _userService: UserService
  ) {
    this.title = 'Registrate';
		this.user = new User("","","","","","","","");
  }

  onSubmit(form){
		this._userService.register(this.user).subscribe(
			response => {
				if(response.user && response.user._id){
					//console.log(response.user);

					this.status = 'success';
          //form.reset();
          this.navCtrl.push(LoginPage);
				}else{
					this.status = 'error';
				}
			},
			error => {
				console.log(<any>error);
			}
		);
	}

}
