import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

//Importacion de servicio y modelo
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

//Importacion de page
import { EditUserPage } from '../edit-user/edit-user';
import { LoginPage } from '../login/login';

import { GLOBAL } from '../../services/global';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers: [UserService]
})
export class ProfilePage implements OnInit{
  public title: string;
	public user: User;
	public status: string;
	public identity;
	public token;
	public stats;
	public url;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private _userService: UserService
  ) {
    this.title = 'Perfil';
    this.user = this._userService.getIdentity();
		this.identity = this.user;
		this.token = this._userService.getToken();
		this.url = GLOBAL.url;
  }

  editUserModal() {
    const modal = this.modalCtrl.create(EditUserPage);
    modal.present();
  }

  ngOnInit() {
/*
    let id = this.identity.id;
    this.getUser(id);
    */
   }
/*
  getUser(id){
    this._userService.getUser(id).subscribe(
      response => {
        if(response.user){
          console.log(response);
          this.user = response.user;
        }else {
          this.status = 'error';
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
*/

logout(){
  localStorage.clear()
  this.identity = null;
  this.navCtrl.setRoot(LoginPage);
}


}
