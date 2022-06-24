import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AuthGuard } from './auth.guard';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { CustomPreload } from './custom-preload';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path:'home',component:HomeComponent,canDeactivate:[AuthGuard]},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'custom',component:CustomDirectiveComponent,canActivate:[AuthGuard]},
  {path:'emp',component:EmployeeComponent,canActivateChild:[AuthGuard],children:[
    {path:'add',component:AddEmployeeComponent},
    {path:'edit',component:EditEmployeeComponent},
    {path:'delete',component:DeleteEmployeeComponent}
  ]},
  {path:'login',component:LoginComponent},
  {path:'product',loadChildren:()=>import('./product/product.module').then(m=>m.ProductModule),canLoad:[AuthGuard]},
  {path:'customer',loadChildren:()=>import('./customer/customer.module').then(m=>m.CustomerModule),data:{preload:true,delay:true}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:CustomPreload})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
