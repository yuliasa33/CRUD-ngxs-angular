import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import { LoginScreenComponent } from './pages/login-screen/login-screen.component';
import { AddDataAnggotaComponent } from './pages/add-data-anggota/add-data-anggota.component';
import { EditDataAnggotaComponent } from './pages/edit-data-anggota/edit-data-anggota.component';

const routes: Routes = [
  {path:'login',
    component:LoginScreenComponent
  },
  {
    path:'Home',
    component:HomeScreenComponent,
  },
  {
    path:'add-anggota',
    component:AddDataAnggotaComponent
  },
  {
    path:'edit-anggota/:id',
    component:EditDataAnggotaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
