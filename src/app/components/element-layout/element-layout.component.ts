
import { Component, ElementRef, OnInit, Renderer2,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Subject } from 'rxjs';
import { UtilityService } from 'src/app/services/utility/utility.service';
@Component({
  selector: 'app-element-layout',
  templateUrl: './element-layout.component.html',
  styleUrls: ['./element-layout.component.scss'],
 
})
export class ElementLayoutComponent implements OnInit,OnDestroy {

  SideBarMenuItems:any[] = [
    {label:'anggota',icon:'pi pi-users'},
    {label:'dokumen',icon:'pi pi-copy'},
    {label:'activity',icon:'pi pi-calendar'},
    {label:'finance',icon:'pi pi-dollar'},
  ]

  destroy$ = new Subject()
  sideBar: boolean = true

  side = document.getElementById('sidebar')
  main = document.getElementById('main')

  constructor(private utilityService:UtilityService ,
    private router: Router,
    private store:Store
  ) {
  }

  ngOnInit(): void {

  }

  handleClickCloseSideBar(args: any): void {
    // let sidebaropen = document.getElementById('sidebaropen')
    // let sidebarclose = document.getElementById('sidebarclose')

    // let sidebar = document.getElementById('sidebar')
    // let main = document.getElementById('main')
    // console.log(sidebaropen?.click())

    // if(sidebaropen?.click()){
    //   sidebaropen.classList.add('hidden')
    //   sidebarclose?.classList.remove('hidden')
    //   sidebar?.classList.remove('w-2/12')
    //   main?.classList.remove('w-10/12')
    //   main?.classList.add('w-screen')
    // }else if(sidebarclose?.click()){
    //   sidebaropen?.classList.remove('hidden')
    //   sidebarclose.classList.add('remove')
    //   sidebar?.classList.add('w-2/12')
    //   main?.classList.remove('w-screen')
    //   main?.classList.add('w-10/12')
    // }

    console.log(args)

    let side = document.getElementById('sidebar')
    let main = document.getElementById('main')

    this.sideBar = false
    if (this.sideBar == false) {
      side?.classList.remove('w-2/12')
      main?.classList.remove('w-10/12')
      main?.classList.add('w-screen')
    }

  }

  handleClickOpenSideBar(args: any): void {

    let side = document.getElementById('sidebar')
    let main = document.getElementById('main')

    console.log(args)
    this.sideBar = true



    if (this.sideBar == true) {
      side?.classList.add('w-2/12')
      side?.classList.add('transition')
      side?.classList.add('ease-in')
      side?.classList.add('duration-300')
      main?.classList.remove('w-screen')
      main?.classList.add('w-10/12')
    }

  }

  handleLogout(): void {
    // this.utilityService.onShowConfirmationAlert('info','Hmmm','Apakah anda yakin akan log out',
    //   ()=>{
    //     setTimeout(()=>{
    //       this.router.navigateByUrl('login')
    //     },500)
    //   },
    //   ()=>{

    //   }
    // )
    this.router.navigateByUrl('login')
      
  }

  toggleSidebar(): void {
    this.sideBar = !this.sideBar
  }
  
  ngOnDestroy(): void {
    this.destroy$.complete()
    this.destroy$.next(0)
  }


}
