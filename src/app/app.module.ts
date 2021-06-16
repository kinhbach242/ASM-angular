import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContentLeftComponent } from './content-left/content-left.component';
import { ContentComponent } from './content/content.component';
import { ContentCenterComponent } from './content-center/content-center.component';
import { ContentRightComponent } from './content-right/content-right.component';
import { ProjectComponent } from './components/project/project.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateProjectComponent } from './components/project/create-project/create-project.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NewtaskComponent } from './components/employee/newtask/newtask.component';
import { HttpClientModule } from  '@angular/common/http';
import { ProjectsService } from './service/project/projects.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './components/project/edit/edit.component';
import { EdittaskComponent } from './components/employee/edittask/edittask.component';
import { DangkiComponent } from './user/dangki/dangki.component';
import { LoginComponent } from './user/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    ContentLeftComponent,
    ContentComponent,
    ContentCenterComponent,
    ContentRightComponent,
    ProjectComponent,
    EmployeeComponent,
    CreateProjectComponent,
    NewtaskComponent,
    EditComponent,
    EdittaskComponent,
    LoginComponent,
    DangkiComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    HttpClientModule,
    // ReactiveFormsModule
    ReactiveFormsModule


  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
