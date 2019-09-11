import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../form-login/service/storage.service';

@Component({
	selector: 'header-pagueii',
	templateUrl: './header.component.html'
})

export class HeaderComponent  implements OnInit {



	logado:boolean = false;

	constructor(private router:Router, private storage: StorageService){
		if(this.storage.getLocalUser() != null){
			this.logado = true;
		} else {
			this.logado = false;
		}
	}

	ngOnInit(): void {
		console.log(this.storage.getLocalUser() != null);
		if(this.storage.getLocalUser() != null){
			this.logado = true;
			//document.getElementById("header-login").style.display = 'none';
		} else {
			this.logado = false;
		}
	}

	home(){
		this.router.navigate([''])
	}

	login(){
		this.router.navigate(['login'])
	}
	
	logff(){
		this.logado = false;
		//document.getElementById("header-login").style.display = 'block';
		this.storage.getLocalUser().token = null;
		this.storage.setLocalUser(null);
		this.router.navigate([''])
	}
}