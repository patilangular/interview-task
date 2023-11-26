import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpserviceService } from '../httpservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-creattask',
  templateUrl: './creattask.component.html',
  styleUrls: ['./creattask.component.scss']
})
export class CreattaskComponent {
  taskForm!:FormGroup;
  taskId:string | null = null ;

  isEdit:boolean = false ;
   constructor(private fb:FormBuilder,private http:HttpserviceService,private activatedRoute:ActivatedRoute,private router:Router){
     this.taskId = this.activatedRoute.snapshot.paramMap.get('id'); 
      if(this.taskId){
        this.isEdit = true;
      }
  }

  ngOnInit(){ 
    this.createForm();
    this.gettaskDetailsById()
  }
  gettaskDetailsById() {
    let endPoint = "task/"+this.taskId;;
    this.http.getDataToServer(endPoint).subscribe((response:any)=>{
      console.log("Response Received " + response);
      this.taskForm.setValue(response);
    },

    (error)=>{

    }
    )
  }
  createForm() {
     this.taskForm = this.fb.group({
      'id':[''],
      'task':[''],
      'priority':[''],
      'Duedate':[''],
      'Completionstatus':['']
     })
  }


  save(){
    if(this.isEdit){
       this.updatetaskDetails();
    }else {
      this.savetaskDetails();
    }
    this.router.navigate(["/task-list"]);
  }

  updatetaskDetails(){
    const endPoint = "task/"+this.taskId;
    this.http.putDataToServer(endPoint,this.taskForm.value).subscribe(
      (response:any)=>{
         console.log("Update Successful " , response);
        },
      (error)=>{

      }
    )
  }

  savetaskDetails() {
    console.log(this.taskForm.value);
    this.http.postDataToServer('task', this.taskForm.value).subscribe(
      (response: any) => {
        console.log('response', response);
      },
      (error) => {
        console.log(error);
      })
  }
}
