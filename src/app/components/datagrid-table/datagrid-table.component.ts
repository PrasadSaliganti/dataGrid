
/*--- Angular imports*/
import { Component, OnInit } from '@angular/core';

/*--- model imports*/
import { TableGrid } from 'src/app/model/table-grid';

/*--- service imports*/
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-datagrid-table',
  templateUrl: './datagrid-table.component.html',
  styleUrls: ['./datagrid-table.component.css']
})
export class DatagridTableComponent implements OnInit {

  employees:TableGrid[]=[];

  constructor(private tableService:TableService) { }

  ngOnInit(): void {
    this.tableService.getTable().subscribe(value=>{
        this.employees= value;
        console.log(value)
    })  
    }
    refresh(value:any){
      // console.log(value)
      this.tableService.getTable1(value).subscribe(value=>{
        this.employees=value;
      })
    }

}
