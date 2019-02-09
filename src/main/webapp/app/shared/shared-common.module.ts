import { NgModule } from '@angular/core';

import { FrontpointSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [FrontpointSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [FrontpointSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class FrontpointSharedCommonModule {}
