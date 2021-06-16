import { Component, OnInit } from '@angular/core';
import { Taskz } from 'src/app/interface/tasks';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/service/task/task.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[TasksService]
})
export class EmployeeComponent implements OnInit {

  public taskss:Taskz[]=[];
  constructor(private tasks: TasksService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
      this.tasks.getTask().subscribe((data)=>{
          console.log('taskss',data);
          this.taskss=data;
      });
  }

  private loadData() {
      this.tasks.getTask().subscribe((data)=>{
          console.log('taskss',data);
          this.taskss=data;
      });
  }
  public editTask(taskID:number) {
      this.router.navigate(['employee/edittask', taskID]);
  }

  public xoaTask(taskID:number){
      console.log('task',taskID);
      this.tasks.deleteTask(taskID).subscribe((data) => {
          console.log('delete', data);
          this.loadData();
        });
  }
}
