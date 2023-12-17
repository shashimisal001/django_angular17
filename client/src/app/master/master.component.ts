import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink], 
  templateUrl: './master.component.html',
  styleUrl: './master.component.scss'
})
export class MasterComponent {
  pageMeta: any = {};
  constructor(private router: Router){}

 ngOnInit(){
  this.router.events.subscribe({
    next: (data) => {
      let route: ActivatedRoute = this.router.routerState.root;
      if(route.firstChild){
        this.pageMeta = route.firstChild.snapshot.data;
      }
    },
    error: (error) => {}
  });
 }
}
