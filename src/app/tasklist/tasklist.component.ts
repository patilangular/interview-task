import { Component, ViewChild } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';






@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss']
})
export class TasklistComponent {
  taskList:any=[];
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  dataToDisplay=[...this.taskList]
  displayedColumns: string[] = ['task', 'priority', 'Duedate', 'Completionstatus','action'];
  dataSource = new MatTableDataSource(this.taskList);

  applyFilter(event: Event) {
    
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  constructor(private http:HttpserviceService){

  }
 

  ngOnInit(){
    this.gettask();
    
    
  }


  gettask() {
    console.log("Get task Call Initiated");
    this.http.getDataToServer('task').subscribe((response: any) => {
      console.log("Got task List Response");
      if (response && response.length > 0) {
        console.log("responce",response)
        this.taskList = response;
        this.dataSource=new MatTableDataSource(this.taskList);
        this.dataSource.sort=this.sort;
         this.dataSource.paginator=this.paginator;
        console.log(this.taskList)
      }
    },
      (error:any) => {
        alert(error);
      })
  }


  deletetask(taskObj:any,index:any)
  
  {
    console.log("id",index)
    console.log("obj",taskObj)
    const endPoint = "task/"+( index +1);
    this.http.deleteData(endPoint).subscribe(
    (el:any)=>{
      this.taskList.splice(index,1);
      this.dataSource=new MatTableDataSource(this.taskList);
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator
      alert("Data Deleted Successfully");
      
    },
    (error:any)=>{
       alert(error);
    }
    )
  }

}

 
    
    
    
      
  
  
  
  