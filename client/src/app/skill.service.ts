import { Injectable } from '@angular/core';
import {Http, Headers, Response} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map' ;
import 'rxjs/add/operator/catch' ;
import 'rxjs/add/observable/throw' ;

import { Skill } from './skill';

@Injectable()
export class SkillService {

  constructor(private _http:Http) { }


  getSearchSkill(name:string):Observable<Skill>{
    return this._http.get('https://quezxapi.herokuapp.com/api/skills/'+name)
    .map(res=>res.json())
    .catch(this._errorHandler);
  }

  getSkills():Observable<Skill[]>{
    return this._http.get('https://quezxapi.herokuapp.com/api/skills/')
    .map(res=>res.json())
    .catch(this._errorHandler);
  }

  addSkill(value:string,status:boolean){
    var st;
    if(status){
      st="Approved";
    }
    else{
      st="";
    }
    const data=JSON.stringify({name:value,status:st});

    const header = new Headers({ 'Content-Type': 'application/json' });
    return this._http.post('https://quezxapi.herokuapp.com/api/skills/create/',data,{headers:header})
    .map(res=>res.json())
    .catch(this._errorHandler);

  }
  updateSkill(value:string,id:string){

    const data=JSON.stringify({name:value});
    const header = new Headers({ 'Content-Type': 'application/json' });
    return this._http.put('https://quezxapi.herokuapp.com/api/skills/updatename/'+id+'/',data,{headers:header})
    .map(res =>res.json())
    .catch(this._errorHandler);
  }

  updateStatus(value:string,id:string){

    const data=JSON.stringify({status:value});
    const header = new Headers({ 'Content-Type': 'application/json' });
    return this._http.put('https://quezxapi.herokuapp.com/api/skills/updatestatus/'+id+'/',data,{headers:header})
    .map(res =>res.json())
    .catch(this._errorHandler);
  }

  _errorHandler(error:Response){
    console.error(error);
    return Observable.throw(error || 'Server Error');
}
}
