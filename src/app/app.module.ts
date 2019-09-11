import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { SimulacaoComponent } from './simulacao/simulacao.component';
import { SimulacaoService } from './simulacao/simulacao.service';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { ListaSimulacaoComponent } from './lista-simulacao/lista-simulacao.component';
import { AuthService } from './form-login/service/auth.service';
import { StorageService } from './form-login/service/storage.service';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { ResultadoComponent } from './resultado/resultado.component';
import { HomeService } from './home/home.service';

@NgModule({
  declarations: [
    AppComponent,
	FooterComponent,
	HeaderComponent,
  FormLoginComponent,
  SimulacaoComponent,
  HomeComponent,
  ListaSimulacaoComponent,
  ResultadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    routes,
    RouterModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.threeBounce,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
      backdropBorderRadius: '4px',
      primaryColour: '#f96332', 
      secondaryColour: '#ffffff', 
      tertiaryColour: '#ffffff'
    })
  ],
  providers: [SimulacaoService, AuthService, StorageService, HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
