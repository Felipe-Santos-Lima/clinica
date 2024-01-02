import { BodyComponent } from './components/body/body.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SearchComponent } from "./components/pages/conheça/search.component";
import { SpeakComponent } from "./components/pages/speak/speak.component";
import { AcessComponent } from "./components/acess/acess.component";
import { ForgetComponent } from './components/acess/forget/forget.component';
import { CompanyRegistrationComponent } from './components/acess/company-registration/company-registration.component';
import { AvisoComponent } from './components/pages/aviso/aviso.component';
import { UserComponent } from './components/user/user.component';
import { AgendaComponent } from './components/user/agenda/agenda.component';
import { FinanceiroComponent } from './components/user/financeiro/financeiro.component';
import { ProcedimentosComponent } from './components/user/procedimentos/procedimentos.component';
import { ClientesComponent } from './components/user/clientes/clientes.component';
import { ConfigComponent } from './components/user/config/config.component';
import { PerfilComponent } from './components/user/perfil/perfil.component';




const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'Conheça-o-Sistema', component: SearchComponent},
  {path: 'Fale-Conosco', component: SpeakComponent},
  {path: 'Login', component: AcessComponent},
  {path: 'Esqueceu-a-Senha', component: ForgetComponent},
  {path: 'Solicitar-Demostração', component: CompanyRegistrationComponent},
  {path: 'Aviso-de-Privacidade', component: AvisoComponent},
  {path: 'Usuario', component: UserComponent},
  {path: 'Perfil-Usuario', component: PerfilComponent},
  {path: 'Agenda-usuario', component: AgendaComponent},
  {path: 'Financeiro', component: FinanceiroComponent},
  {path: 'Procedimentos', component: ProcedimentosComponent},
  {path: 'Clientes', component: ClientesComponent},
  {path: 'Configuraçoes', component: ConfigComponent},






]
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class appRoutingModule {}
