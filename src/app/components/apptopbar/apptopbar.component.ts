import {Component,Inject,forwardRef} from '@angular/core';
import {AppComponent} from '../../app.component';



@Component({
  selector: 'app-topbar',
  templateUrl: './apptopbar.component.html',
  styleUrls: ['./apptopbar.component.css']
})
export class Apptopbar {

    constructor(@Inject(forwardRef(() => AppComponent)) public app:AppComponent) {}

}
