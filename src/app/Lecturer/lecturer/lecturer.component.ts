import { Component, OnInit } from '@angular/core';
import {LecturersService} from 'src/app/Services/lecturers.service'

@Component({
  selector: 'app-lecturer',
  templateUrl: './lecturer.component.html',
  styleUrls: ['./lecturer.component.css']
})
export class LecturerComponent implements OnInit {
Lecturers: any = []
  constructor( private service : LecturersService) { }

  ngOnInit(): void {
   this.getAllLecturers()
  }

  getAllLecturers(){
    this.service.getAllLecturers().subscribe(data =>{
      this.Lecturers = data
    })
  }

}
