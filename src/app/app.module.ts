import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { appRoutingModule } from './app-routing-module';
import { SearchComponent } from './components/pages/conheça/search.component';
import { SpeakComponent } from './components/pages/speak/speak.component';
import { AcessComponent } from './components/acess/acess.component';
import { ForgetComponent } from './components/acess/forget/forget.component';
import { CompanyRegistrationComponent } from './components/acess/company-registration/company-registration.component';
import { AvisoComponent } from './components/pages/aviso/aviso.component';
import { UserComponent } from './components/user/user.component';
import { AgendaComponent } from './components/user/agenda/agenda.component';
import { PerfilComponent } from './components/user/perfil/perfil.component';
import { FinanceiroComponent } from './components/user/financeiro/financeiro.component';
import { ProcedimentosComponent } from './components/user/procedimentos/procedimentos.component';
import { ClientesComponent } from './components/user/clientes/clientes.component';
import { ConfigComponent } from './components/user/config/config.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/user/menu/menu.component';
import { ConteudosComponent } from './components/user/menu/conteudos/conteudos.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    SearchComponent,
    SpeakComponent,
    AcessComponent,
    ForgetComponent,
    CompanyRegistrationComponent,
    AvisoComponent,
    UserComponent,
    AgendaComponent,
    PerfilComponent,
    FinanceiroComponent,
    ProcedimentosComponent,
    ClientesComponent,
    ConfigComponent,
    MenuComponent,
    ConteudosComponent,

  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
