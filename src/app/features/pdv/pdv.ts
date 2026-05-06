import { Component } from '@angular/core';
import { Icon } from "../../shared/icon/icon";
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-pdv',
  imports: [Icon, MatButtonModule, MatToolbarModule, MatSidenavModule, MatRadioModule, FormsModule, ReactiveFormsModule],
  templateUrl: './pdv.html',
  styleUrl: './pdv.css',
})
export class Pdv {

}
