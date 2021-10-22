import { Component, OnChanges, Input } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.scss']
})

export class MyworkComponent implements OnChanges {
	title = 'My work'
	@Input() filterBy: string = 'all'
	visibleImages: any[] = [];

  constructor(private projectService: ProjectService) { 
    this.visibleImages = this.projectService.getImages();
  }

	ngOnChanges(){
		this.visibleImages = this.projectService.getImages();
	}
}
