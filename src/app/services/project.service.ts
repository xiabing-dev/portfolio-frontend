import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }
  visibleImages: any = [];
	getImages(){
		return this.visibleImages = IMAGES.slice(0);
	}
	getImage(id: number){
		return IMAGES.slice(0).find(image => image.id == id)
	}
}


const IMAGES =[
	{"id": 1, "category":"react", "web": "https://xia-bing-react-jammming.netlify.app/", "url": "assets/images/jammming.jpg"},
	{"id": 2, "category": "javascript", "web": "http://bing-xia.developerakademie.com/modul11/", "url": "assets/images/polloloco.jpg"},
	{"id": 3, "category": "javascript", "web": "http://bing-xia.developerakademie.com/modul7/", "url": "assets/images/quizapp.jpg"},
	{"id": 3, "category": "wordpress", "web": "https://www.happylambhotpot.ca/", "url": "assets/images/happylamb.jpg"}
]