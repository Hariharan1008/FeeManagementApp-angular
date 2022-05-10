import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeestatusComponent } from './feestatus/feestatus.component';
import { FeestransactionsComponent } from './feestransactions/feestransactions.component';
import { FeestructureComponent } from './feestructure/feestructure.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'header',component:HeaderComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'feestatus',component:FeestatusComponent
  },
  {
    path:'feestructure',component:FeestructureComponent
  },
  {
    path:'feestransactions',component:FeestransactionsComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
