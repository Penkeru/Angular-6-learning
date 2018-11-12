import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  userId: number;
  user$: Object;

  constructor(private route: ActivatedRoute,
              private dataService: DataService) {
    this.route.params.subscribe(params => this.userId = params.userId);
  }

  ngOnInit() {
    this.dataService.getUser(this.userId).subscribe(
      userData => this.user$ = userData
    );
  }

}
