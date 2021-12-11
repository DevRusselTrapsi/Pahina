import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: any;
  password: any;
  user: any;

  
  constructor(private router: Router,
              private http: HttpClient,
              private _apiService: ServiceService)
               { 

              }
  ngOnInit() {

  }
  submit(){

    //array of data 
    let data = {
      Username : this.username,
      Password : this.password
    }
    
    this._apiService.submit(data).subscribe((res:any) => {
      //if response of login.php is not null then continue to home page
      if(res != null){
         localStorage.setItem('currentUser', JSON.stringify(res));
         this.router.navigate(['/home']);  
      }else{
        //prevent local storage to duplicate
        if(this.user == null){
          this.router.navigate(['/login-page']);  
        }else{
          this.router.navigate(['/home']);  
        }
        
      }
  },(error: any) => {
  console.log("ERROR ===",error);
});
}
}
