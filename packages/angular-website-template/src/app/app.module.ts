import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb'
import { NzMenuModule } from 'ng-zorro-antd/menu'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzCardMetaComponent, NzCardModule } from 'ng-zorro-antd/card'
import { CommonModule } from '@angular/common'
import { NzTypographyModule } from 'ng-zorro-antd/typography'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    NzBreadCrumbModule,
    NzButtonModule,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    NzMenuModule,
  ],
  providers: [NzTypographyModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
