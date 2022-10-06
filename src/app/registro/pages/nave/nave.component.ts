import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {InfoApiNave} from "../../../models/infoApiNave.model";
import {DataService} from "../../../services/listadonaves/data.service";


@Component({
  selector: 'app-nave',
  templateUrl: './nave.component.html',
  styleUrls: ['./nave.component.css']
})
export class NaveComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'Model', 'Starship_class', 'Passengers'];
  dataSource = new MatTableDataSource<InfoApiNave>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private _entriesService: DataService) { }

  ngOnInit(): void {
  }

  listar(){
    this._entriesService.getEntries().subscribe(
      response => {
        console.log(response);
        if(response.count > 0){
          this.dataSource.data = response.results;
        }
      }
    );
  }
}
