import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { ActivatedRoute, Params } from '@angular/router';
// import { Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-storyline-one',
  templateUrl: './storyline-one.component.html',
  styleUrls: ['./storyline-one.component.css'],
  providers: [PlayerService]
})
export class StorylineOneComponent {
  // playerId: string;
  // playerToDisplay;
  // constructor(
  //   private route: ActivatedRoute,
  //   private location: Location,
  //   private playerService: PlayerService
  // ) { }
  //
  //
  // ngOnInit() {
  //   this.route.params.forEach((urlParameters) => {
  //     this.playerId = urlParameters['id'];
  //   });
  //   this.playerToDisplay = this.playerService.getPlayerById(this.playerId);
  // }

}
