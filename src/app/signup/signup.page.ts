import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl  } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  name = '';
  email = '';
  username = '';
  password = '';
  user: any;
  constructor(private router: Router, private userService: UserService, private toastController: ToastController) { }

  ngOnInit() {
 
  }
  signup(){
    console.log(this.name, this.email, this.username, this.password)
    this.userService.signup(this.name, this.email, this.username, this.password)
    .subscribe((result) => { 
      if(result['data'].length != 1){
        // do something if failed
        this.presentToast('Fill up the form')
        
      }else{
        // Success login 
        this.presentToast('Registration complete.')
        this.router.navigate(['/home']);  
      } 
    });

  }

  async presentToast(message){
    const toast = await this.toastController.create({
      message: message,
      duration: 500
    });
    toast.present();

  }

}

