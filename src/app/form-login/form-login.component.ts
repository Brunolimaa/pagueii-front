import { Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { StorageService } from './service/storage.service';
import { LocalUser } from '../model/local-user.model';
import { AuthService } from './service/auth.service';

@Component({
	selector: 'form-login',
	templateUrl: './form-login.component.html'
})

export class FormLoginComponent {

	user:string = "";
    pass:string = "";
    loading = false;
    logado:boolean = false;

	constructor(
        private authService: AuthService,
        private router: Router,
        private storage: StorageService
    ){

    }

	login(){
		const userName = this.user;
        const password = this.pass;
        this.loading = true;
        this.authService.authenticate(userName, password)
            .subscribe(res => {
               
                console.log(res.headers.get('Authorization')); 
                let token = res.headers.get('Authorization').substring(7);
                let user : LocalUser = {
                        token: token,
                        email: 'teste',
                        jti: '1'
                };
                this.storage.setLocalUser(user);
               //this.router.navigateByUrl('cadastro');
                this.loading = false;
                this.router.navigate(['lista'])
                this.logado = true;
            }, err => {
                console.log(err);
                this.loading = false;
                //this.loginForm.reset();
            })
	}
	
}