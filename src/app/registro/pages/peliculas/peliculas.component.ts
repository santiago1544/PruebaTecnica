import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {InfoApi} from "../../../models/infoApi.model";
import {DataService} from "../../../services/listadopeliculas/data.service";


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  displayedColumns: string[] = ['Title', 'Release_date', 'Director', 'Producer'];
  dataSource = new MatTableDataSource<InfoApi>([]);

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
