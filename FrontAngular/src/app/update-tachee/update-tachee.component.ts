import { Component, OnInit } from '@angular/core';
import { TacheeService } from '../tachee.service';
import { Tachee } from '../tachee';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-update-tachee',
  templateUrl: './update-tachee.component.html',
  styleUrls: ['./update-tachee.component.css']
})
export class UpdateTacheeComponent implements OnInit {

  id: number;
  tachee: Tachee = new Tachee();
  constructor(private tacheeService: TacheeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.tacheeService.getTacheeById(this.id).subscribe(data => {
      this.tachee = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.tacheeService.updateTachee(this.id, this.tachee).subscribe( data =>{
      this.goToTacheeList();
    }
    , error => console.log(error));
  }

  goToTacheeList(){
    this.router.navigate(['/tachees']);
  }

}
