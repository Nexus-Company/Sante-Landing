import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-our-services',
  imports: [],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss'
})
export class OurServicesComponent {
  constructor(private router: Router){

  }

  gotoProjects(){
    this.router.navigate(['/our-services/editorial-projects'])
  }

  gotoMarketingaAdisory() {
    this.router.navigate(['/our-services/marketing-adisory'])
  }
  
  gotoCreativeConsulting() {
    this.router.navigate(['/our-services/creative-consulting'])
  }

  gotoSocialManagement() {
    this.router.navigate(['/our-services/social-management'])
  }
}
