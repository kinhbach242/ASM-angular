import { Component, OnInit } from '@angular/core';

import { Projectz } from 'src/app/interface/projects';
import { Taskz } from 'src/app/interface/tasks';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ProjectsService } from 'src/app/service/project/projects.service';
import { TasksService } from 'src/app/service/task/task.service';


@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css'],
  providers:[ProjectsService,TasksService]
})
export class NewtaskComponent implements OnInit {

  productForm!: FormGroup;
  public posts:any;
  public ProjectName:any;
  public projectsss:Projectz[]=[];
  public tasksss: Taskz[]=[];
  constructor(private projects: ProjectsService, private tasks:TasksService, private location: Location) { }

  ngOnInit(): void {
    this.projects.getProject().subscribe((datas)=>{
      console.log('projectss',datas);
      this.projectsss=datas;
    });
    this.productForm=new FormGroup({
      'id': new FormControl('',Validators.required),
      'TaskName': new FormControl('',Validators.required),
      'Desscription': new FormControl('',Validators.required),
      "Project": new FormControl('',Validators.required),
      "Assigned_To": new FormControl('',Validators.required),
      "Priority": new FormControl('',Validators.required),
      "Status": new FormControl('Holding',Validators.required)
      })

  }
  onBack(){
    this.location.back();
  }
  public onSubmit(){
    const newTask:any = {};
    for(const controlfile in this.productForm.controls){
      if(controlfile){
        newTask[controlfile] = this.productForm.controls[controlfile].value;
      }
    }
    console.log(newTask);

    this.tasks.addTasks(newTask).subscribe(data=>{
      window.location.href='employee';
    })
  }

}
