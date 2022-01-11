import { Component, OnInit } from '@angular/core';
import { Tachee } from '../tachee'
import { TacheeService } from '../tachee.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-tachee-list',
  templateUrl: './tachee-list.component.html',
  styleUrls: ['./tachee-list.component.css']
})
export class TacheeListComponent implements OnInit {

  
  tachees: Tachee[];

  constructor(private tacheeService: TacheeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getTachees();
  }

  private getTachees(){
    this.tacheeService.getTacheesList().subscribe(data => {
      this.tachees = data;
    });
  }

  tacheeDetails(id: number){
    this.router.navigate(['tachee-details', id]);
  }

  updateTachee(id: number){
    this.router.navigate(['update-tachee', id]);
  }

  deleteTachee(id: number){
    this.tacheeService.deleteTachee(id).subscribe( data => {
      console.log(data);
      this.getTachees();
    })
  }

}
