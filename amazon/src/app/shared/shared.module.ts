import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NzInputModule,
    NzIconModule,
    NzImageModule,
    NzAvatarModule,
    NzBadgeModule
  ],
  exports: [
    NzInputModule,
    NzIconModule,
    NzImageModule,
    NzAvatarModule,
    NzBadgeModule,
  ]
})
export class SharedModule { }
