import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/service/project/projects.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Projectz } from 'src/app/interface/projects';
@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
  providers:[ProjectsService]
})
export class CreateProjectComponent implements OnInit {

  productForm!: FormGroup;
  public posts:any;
  public ProjectName:any;
  public projectsss:Projectz[]=[];
  constructor(private projects: ProjectsService, private location: Location) { }


  ngOnInit(): void {
    this.productForm=new FormGroup({
      'id': new FormControl('',Validators.required),
      'ProjectName': new FormControl('',Validators.required),
      'DateofStart': new FormControl('',Validators.required),
      "TeamSize": new FormControl('',Validators.required)
      })

  }
  onBack(){
    this.location.back();
  }
  public onSubmit(){
    const newProject:any = {};
    for(const controlfile in this.productForm.controls){
      if(controlfile){
        newProject[controlfile] = this.productForm.controls[controlfile].value;
      }
    }
    this.projects.addProjects(newProject)
      .subscribe(
        data=>{ window.location.href='project';},
        error => {console.error('Error!',error); alert('Lỗi dữ liệu! Vui lòng thử lại!');window.location.reload();}

      )
  }


}
