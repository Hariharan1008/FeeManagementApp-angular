import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FeestatusComponent } from './feestatus/feestatus.component';
import { FeestructureComponent } from './feestructure/feestructure.component';
import { FeestransactionsComponent } from './feestransactions/feestransactions.component';
import { MyticketsComponent } from './mytickets/mytickets.component';
import { TicketraisingComponent } from './ticketraising/ticketraising.component';
import { AddmoneytowalletComponent } from './addmoneytowallet/addmoneytowallet.component';
import { PayfeesusingwalletComponent } from './payfeesusingwallet/payfeesusingwallet.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { BuyproductComponent } from './buyproduct/buyproduct.component';
import { FeestransactionsusingidComponent } from './feestransactionsusingid/feestransactionsusingid.component';
import { TicketdetailsusingidComponent } from './ticketdetailsusingid/ticketdetailsusingid.component';
import { WallettransactionsComponent } from './wallettransactions/wallettransactions.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    LoginComponent,
    FeestatusComponent,
    FeestructureComponent,
    FeestransactionsComponent,
    MyticketsComponent,
    TicketraisingComponent,
    AddmoneytowalletComponent,
    PayfeesusingwalletComponent,
    FundtransferComponent,
    AllproductsComponent,
    BuyproductComponent,
    FeestransactionsusingidComponent,
    TicketdetailsusingidComponent,
    WallettransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
