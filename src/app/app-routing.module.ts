
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectComponent } from './components/project/project.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ContentComponent } from './content/content.component';
import { CreateProjectComponent } from './components/project/create-project/create-project.component';
import { NewtaskComponent } from './components/employee/newtask/newtask.component';
import { EditComponent } from './components/project/edit/edit.component';
import { EdittaskComponent } from './components/employee/edittask/edittask.component';
import { DangkiComponent } from './user/dangki/dangki.component';
import { LoginComponent } from './user/login/login.component';

const routes: Routes = [
    { path: '', component: ContentComponent },
    { path: 'employee', component: EmployeeComponent },
    { path: 'project/newproject', component: CreateProjectComponent },
    { path: 'home', component: ContentComponent },
    { path: 'project', component: ProjectComponent },
    { path: 'project/edit/:id', component: EditComponent },
    { path: 'employee/create-task', component:NewtaskComponent},
    { path: 'employee/edittask/:id', component:EdittaskComponent},
    { path: 'user/dangnhap', component:LoginComponent},
    { path: 'user/dangky', component:DangkiComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
