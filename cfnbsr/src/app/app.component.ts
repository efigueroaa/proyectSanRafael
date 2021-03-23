import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cfnbsr';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Contacto(){
    this.router.navigate(["contacto"]);
  }
  Categorias(){
    this.router.navigate(["categorias"]);
  }
  Promociones(){
    this.router.navigate(["promociones"]);
  }
  Reglamento(){
    this.router.navigate(["reglamento"]);
  }
  Principal(){
    this.router.navigate(["principal"]);
  }

}
