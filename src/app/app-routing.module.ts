import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmoneytowalletComponent } from './addmoneytowallet/addmoneytowallet.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { BuyproductComponent } from './buyproduct/buyproduct.component';
import { FeestatusComponent } from './feestatus/feestatus.component';
import { FeestransactionsComponent } from './feestransactions/feestransactions.component';
import { FeestransactionsusingidComponent } from './feestransactionsusingid/feestransactionsusingid.component';
import { FeestructureComponent } from './feestructure/feestructure.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MyticketsComponent } from './mytickets/mytickets.component';
import { PayfeesusingwalletComponent } from './payfeesusingwallet/payfeesusingwallet.component';
import { RegisterComponent } from './register/register.component';
import { TicketdetailsusingidComponent } from './ticketdetailsusingid/ticketdetailsusingid.component';
import { TicketraisingComponent } from './ticketraising/ticketraising.component';
import { WallettransactionsComponent } from './wallettransactions/wallettransactions.component';

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
  },
  {
    path:'mytickets',component:MyticketsComponent
  },
  {
    path:'ticketraising',component:TicketraisingComponent
  },
  {
    path:'addmoneytowallet',component:AddmoneytowalletComponent
  },
  {
    path:'payfeesusingwallet',component:PayfeesusingwalletComponent
  },
  {
    path:'fundtransfer',component:FundtransferComponent
  },
  {
    path:'allproducts',component:AllproductsComponent
  },
  {
    path:'buyproduct',component:BuyproductComponent
  },
  {
    path:'feestransactionsusingid',component:FeestransactionsusingidComponent
  },
  {
    path:'ticketdetailsusingid',component:TicketdetailsusingidComponent
  },
  {
    path:'wallettransactions',component:WallettransactionsComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
