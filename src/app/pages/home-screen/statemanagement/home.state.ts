import { State , StateContext , Action, Selector } from "@ngxs/store";
import { InitData } from './home.action'
import { Injectable } from '@angular/core'
import { HomeService } from "../service/home.service";
import { tap } from "rxjs";

export interface InitDataModel{
   items:DataModelGet[]
}
export interface DataModelGet{
    userId: number,
    id: number,
    title:string;
    body:string;
}

@State<InitDataModel>({
    name:'Data',
    defaults:{
       items:[]
    }
})

@Injectable()
export class GetDataState{
    constructor(private homeService:HomeService){}

    @Selector()
    static getItems(state:InitDataModel){
        return state.items
    }

    @Action(InitData)
        getData(ctx:StateContext<InitDataModel>){
          
            this.homeService.onGetData()
            .pipe(tap((result)=>{
                const state = ctx.getState()
                ctx.setState({
                    ...state,
                    items:result
                })
            }))
            // }).pipe(
            //     tap((res)=>{
            //         console.log('res',res)
            //         ctx.patchState({
            //             ...state,
            //             items:res,
            //         })
            //     })
            
        }
}