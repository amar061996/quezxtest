import { Component, OnInit,NgZone  } from '@angular/core';
import { Skill } from '../skill';


import { SkillService } from '../skill.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers:[SkillService]
})
export class MainComponent implements OnInit {

  value:string="";

  skills:Skill[];

  searchResult:Skill[];
  
  isMarked:boolean;

  constructor( private zone:NgZone,private _skillService:SkillService) { 

    this.isMarked=false;

    //making updateSkill publicly available

    window['angularComponentRef'] = {
      zone: this.zone,
      componentFn: (value,name) => this.updateSkill(value,name),
      component: this,
  };

  }

  ngOnInit() {

    this.getAllSkill();
  }
 
  //get all the skills to display

  getAllSkill(){
    this._skillService.getSkills()
    .subscribe(skill=>{
      this.skills=skill;
    });
  }

  //search skill
  getSearchedSkill(value){
    this._skillService.getSkills()
    .subscribe(skill=>{
      this.skills=skill;
    },
    error=>console.error(error),
  
  ()=>this.skills=this.skills.filter(skill=>skill.name.toLowerCase().includes(value.toLowerCase()))

);
  }

  
  onClicked(value:string){
    if(value!=''){
      
     this.getSearchedSkill(value);

    }
    else{
      this.getAllSkill();
    }
    
  }

  
  addSkill(value:string){
    let mark:boolean=this.isMarked;
    this.isMarked=false;
    this._skillService.addSkill(value,mark)
    .subscribe(
      data=>console.log(data),
      error=>console.error(error),
      ()=> this.getAllSkill()
      
    );
  }

  public updateSkill(value,name){
    
    this._skillService.updateSkill(value,name)
    .subscribe(
      
      error=>console.error(error),
      ()=> this.getAllSkill()
    );
  }

  //update status of skill

  updateStatus(event){
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes['data-id'].value;
    var nameAttr= target.attributes['name'].value;
    
    this._skillService.updateStatus(nameAttr,idAttr)
    .subscribe(
      data=>console.log(data),
      error=>console.error(error),
      ()=>this.getAllSkill()
    )

  }

  
  toggleMarked(){
    this.isMarked=!this.isMarked;
  }
}
