import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {InfoApiDescripcion} from "../../../models/infoApiDesc.model";
import {DataService} from "../../../services/listadodescripcion/data.service";


@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {

  displayedColumns: string[] = ['Title', 'Release_date', 'Director','Opening_crawl', 'Producer'];
  dataSource = new MatTableDataSource<InfoApiDescripcion>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private _entriesService: DataService) { }

  ngOnInit(): void {
  }

  info(){
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
