import { Component, OnInit } from '@angular/core';
import { Projectz } from 'src/app/interface/projects';
import { Taskz } from 'src/app/interface/tasks';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { TasksService } from 'src/app/service/task/task.service';
import { ProjectsService } from 'src/app/service/project/projects.service';
@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css'],
  providers:[ProjectsService,TasksService]
})
export class EdittaskComponent implements OnInit {

  productForm!: FormGroup;
  public id:any;
  public ProjectName:any;
  public projectsss:Projectz[]=[];
  constructor(private projects: ProjectsService, private tasks:TasksService, private router: Router, private route: ActivatedRoute, private location: Location) { }


  private loadData(id:any) {
    this.tasks.getTasks(id).subscribe((data)=>{
      console.log('get ',data);
      for (const controlFile in this.productForm.controls) {
        if (controlFile) {
          this.productForm.controls[controlFile].setValue(data[controlFile]);
        }
      }
  });
  }

  ngOnInit(): void {
    this.id= this.route.snapshot.paramMap.get('id');
    if(this.id>0){
      this.loadData(this.id);
    }
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
  private createNewData() {
    const newTask:any = {};
    for(const controlfile in this.productForm.controls){
      if(controlfile){
        newTask[controlfile] = this.productForm.controls[controlfile].value;
      }
    }
    return newTask as Taskz;
  }
  public onSubmit() {
    if (this.id > 0) {
      this.tasks
        .modifyTask(this.id, this.createNewData())
        .subscribe((data) => {
          this.router.navigate(['employee']);
        });
    } else {
      this.tasks.addTasks(this.createNewData()).subscribe((data) => {
        this.router.navigate(['employee']);
      });
    }
  }


}
