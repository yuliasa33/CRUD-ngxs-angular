import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import { LoginScreenComponent } from './pages/login-screen/login-screen.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsModule } from '@ngxs/store';
import { LoginState } from './pages/login-screen/state-login/login.state';
import { ElementLayoutComponent } from './components/element-layout/element-layout.component';
import { AgGridModule } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';
import { GridComponent } from './components/grid/grid.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InitData } from './pages/home-screen/statemanagement/home.action';
import { GetDataState } from './pages/home-screen/statemanagement/home.state';
import { AddDataAnggotaComponent } from './pages/add-data-anggota/add-data-anggota.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EditDataAnggotaComponent } from './pages/edit-data-anggota/edit-data-anggota.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    LoginScreenComponent,
    ElementLayoutComponent,
    GridComponent,
    AddDataAnggotaComponent,
    EditDataAnggotaComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ButtonModule,
    DropdownModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    NgxsLoggerPluginModule.forRoot(),
    NgxsModule.forRoot(),
    AgGridModule,
    HttpClientModule,
    InputTextModule
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
