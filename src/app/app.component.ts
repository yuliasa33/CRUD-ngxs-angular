import { Component ,OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { InitData } from './pages/home-screen/statemanagement/home.action';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'statemanagementngxs';
  constructor(private store:Store){

  }


  
}
