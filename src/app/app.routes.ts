import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { ListaSimulacaoComponent } from './lista-simulacao/lista-simulacao.component';
import { ResultadoComponent } from './resultado/resultado.component';



export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: FormLoginComponent},
    {path: 'lista', component: ListaSimulacaoComponent},
    {path: 'resultado/:id', component: ResultadoComponent}
]

export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES);