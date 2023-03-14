import { Overlay, ComponentType } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import { DialogRef } from './dialog-ref';
import { DIALOG_DATA } from './dialog-tokens';

export interface DialogConfig {
    data?: any;
  }
@Injectable({
    providedIn: 'root',
})
  
export class DialogService{
    //sprivate afterClosedSubject=new Subject<any>();

    constructor(private overlay: Overlay, private injector: Injector) {}

    open<T>(component: ComponentType<T>,config?: DialogConfig):DialogRef{
        const positionStrategy = this.overlay.position()
            .global()
            .centerHorizontally()
            .centerVertically();
        
        /*const overlayRef=this.overlay.create({
            hasBackdrop:true,
            backdropClass: 'overlay-backdrop',
            panelClass: 'overlay-panel',
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy,
        })*/
        const overlayRef=this.overlay.create({
            hasBackdrop:true,
            backdropClass: 'overlay-backdrop',
            scrollStrategy: this.overlay.scrollStrategies.block(),
            disposeOnNavigation:true,
            positionStrategy,
        })
        overlayRef.backdropClick().subscribe(_=>dialogRef.close());
        /*Create dialogRef to return*/
        const dialogRef = new DialogRef(overlayRef);
        /*Create injector to be able to reference the DialogRef from within the component*/
        const injector = Injector.create({
            parent: this.injector,
            providers: [
            { provide: DialogRef, useValue: dialogRef },
            { provide: DIALOG_DATA, useValue: config?.data }
            ]
        });
        /*Attach component portal to the overlay*/
        const portal = new ComponentPortal(component, null, injector);
        overlayRef.attach(portal);

        return dialogRef;
    }
}