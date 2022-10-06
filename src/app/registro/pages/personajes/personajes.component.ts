import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {InfoApiPersonaje} from "../../../models/infoApiPer.model";
import {DataService} from "../../../services/listadopersonajes/data.service";


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  displayedColumns: string[] = ['Name', 'Birth_year', 'Gender', 'Mass', 'Height'];
  dataSource = new MatTableDataSource<InfoApiPersonaje>([]);

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
