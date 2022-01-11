import { Component, OnInit } from '@angular/core';
import { Tachee } from '../tachee';
import { TacheeService } from '../tachee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-tachee',
  templateUrl: './create-tachee.component.html',
  styleUrls: ['./create-tachee.component.css']
})
export class CreateTacheeComponent implements OnInit {

  
  tachee: Tachee = new Tachee();
  constructor(private tacheeService: TacheeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveTachee(){
    this.tacheeService.createTachee(this.tachee).subscribe( data =>{
      console.log(data);
      this.goToTacheeList();
    },
    error => console.log(error));
  }

  goToTacheeList(){
    this.router.navigate(['/tachees']);
  }
  
  onSubmit(){
    console.log(this.tachee);
    this.saveTachee();
  }

}
