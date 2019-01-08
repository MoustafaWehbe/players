import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { PlayermodalpagePage } from '../../pages/playermodalpage/playermodalpage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	players= [];
	selectedPlayer:string;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }

   	ionViewDidLoad() {
   		for(let i = 0; i<4; i++)
   			this.players.push({name: "P"+(i+1), imageName: "player-"+ (i+1)});
	}

	playerClicked(player:string){
		this.selectedPlayer = player;
		let modal = this.modalCtrl.create(PlayermodalpagePage,{player: this.selectedPlayer},{showBackdrop:true, enableBackdropDismiss:true});
   		modal.present();
	}
	arrowClicked(action:string){
		if(!this.selectedPlayer)
			return;
		if(action == "next")
			this.selectedPlayer="P"+((parseInt(this.selectedPlayer[this.selectedPlayer.length-1])%4)+1);
		else{
			if(((parseInt(this.selectedPlayer[this.selectedPlayer.length-1]))-1) == 0)
				this.selectedPlayer="P4";
			else
				this.selectedPlayer="P"+((parseInt(this.selectedPlayer[this.selectedPlayer.length-1]))-1);
		}
	}
}
