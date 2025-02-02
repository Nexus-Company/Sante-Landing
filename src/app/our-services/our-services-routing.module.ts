import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialManagementComponent } from './social-management/social-management.component';
import { MarketingAdvisoryComponent } from './marketing-advisory/marketing-advisory.component';
import { CreativeConsultingComponent } from './creative-consulting/creative-consulting.component';
import { EditorialProjectsComponent } from './editorial-projects/editorial-projects.component';

const routes: Routes = [
  { path: 'social-management', component: SocialManagementComponent },
  { path: 'marketing-adisory', component: MarketingAdvisoryComponent },
  { path: 'creative-consulting', component: CreativeConsultingComponent },
  { path: 'editorial-projects', component: EditorialProjectsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurServicesRoutingModule { }
