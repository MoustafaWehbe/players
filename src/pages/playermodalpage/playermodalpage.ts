import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the PlayermodalpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-playermodalpage',
  templateUrl: 'playermodalpage.html',
})
export class PlayermodalpagePage {
	player: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  	this.player = navParams.get('player');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayermodalpagePage');
  }
   dismiss() {
	   this.viewCtrl.dismiss();
	}
}
