import { State , StateContext , Action } from "@ngxs/store";
import { Login,Logout } from "../action-login/login.action";
import { Injectable } from "@angular/core";

export interface authStateModel{
    token:any;
    username:any;
}

@State<authStateModel>({
    name:'auth',
    defaults:{
        token:null,
        username:null
    }
})

@Injectable()
export class LoginState{
    @Action(Login)
        login(ctx:StateContext<authStateModel>,action:Login){
            const state = ctx.getState()
            const token = Math.random().toString()
            ctx.setState({
                ...state,
                token,
                username:action.username
            })
            const dataStorage:any = {
                username:state.username,
                token:state.token
            }
            localStorage.setItem('UserData',dataStorage)
        }

    @Action(Logout)
        logout(ctx:StateContext<authStateModel>,action:Logout){
            const state = ctx.getState()
            const token = null
            console.log(state)
            ctx.setState({
                ...state,
                token,
            })
        }
}