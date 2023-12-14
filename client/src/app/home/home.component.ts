import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    imports: [CommonModule, RouterOutlet],
    templateUrl: "./home.component.html",
    styleUrl: "./home.component.scss"
})

export class HomeComponet {
    constructor(){
        
    }
}