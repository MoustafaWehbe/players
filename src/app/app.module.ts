import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PlayermodalpagePage } from '../pages/playermodalpage/playermodalpage';
import { Insomnia } from '@ionic-native/insomnia';
import { ScreenOrientation } from '@ionic-native/screen-orientation';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PlayermodalpagePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PlayermodalpagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Insomnia,
    ScreenOrientation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
