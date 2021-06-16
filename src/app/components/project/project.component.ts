import { Component, OnInit } from '@angular/core';
import { Projectz } from 'src/app/interface/projects';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from 'src/app/service/project/projects.service';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
  providers:[ProjectsService]
})
export class ProjectComponent implements OnInit {
  public projectss:Projectz[]=[];
    constructor(private projects: ProjectsService, private router: Router, private route: ActivatedRoute) { }
    loader = false;
    ngOnInit(): void {
        this.projects.getProject().subscribe((data)=>{
            console.log('projectss',data);
            this.projectss=data;
        });
        setInterval(()=>{
            this.loader = true;
        },2000)
    }
    private loadData() {
      this.projects.getProject().subscribe((data)=>{
          console.log('projectss',data);
          this.projectss=data;
      });
  }
  public editProject(projectID:number) {
    this.router.navigate(['project/edit', projectID]);
}

public xoaProject(projectID:number){
    console.log('project',projectID);
    this.projects.deleteProject(projectID).subscribe((data) => {
        console.log('delete', data);
        this.loadData();
      });
}
}
