import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { TaskRoutingModule } from './task-routing.module';
import { ListComponent } from './view/list/list.component';
import { CreateComponent } from './view/create/create.component';
import { UpdateComponent } from './view/update/update.component';
import { TaskService } from './controller/task.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TaskService]
})
export class TaskModule { }
