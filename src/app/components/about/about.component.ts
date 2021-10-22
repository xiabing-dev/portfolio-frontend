import { Component, OnInit } from '@angular/core';
import { faLanguage, faComments, faSun, faHiking } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  faLanguage = faLanguage;
  faComments = faComments;
  faSun = faSun;
  faHiking = faHiking;

  constructor() { }

  ngOnInit(): void {
  }

}
