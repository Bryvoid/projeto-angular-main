import { Component } from '@angular/core';
import { Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { ResultadoComponent } from './components/resultado/resultado.component';
export const routes: Routes = [
    {
        path:"",
        component: LoginComponent,
        title: "login"
    },
    {path:'pagina',
     component: PaginaComponent,
     title:"página"
    },
    {path: 'resultado',
     component:ResultadoComponent,
     title:'resultado'
    }

];


