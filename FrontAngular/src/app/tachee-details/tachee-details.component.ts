import { Component, OnInit } from '@angular/core';
import { Tachee } from '../tachee';
import { ActivatedRoute } from '@angular/router';
import { TacheeService } from '../tachee.service';
@Component({
  selector: 'app-tachee-details',
  templateUrl: './tachee-details.component.html',
  styleUrls: ['./tachee-details.component.css']
})
export class TacheeDetailsComponent implements OnInit {

  id: number
  tachee: Tachee
  constructor(private route: ActivatedRoute, private tacheeService: TacheeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.tachee = new Tachee();
    this.tacheeService.getTacheeById(this.id).subscribe( data => {
      this.tachee = data;
    });
  }

}
