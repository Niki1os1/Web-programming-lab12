import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';


@Directive({ selector: '[trackBy]'})
export class TrackByDirective implements OnChanges {
	
	@Input('trackBy') target: any;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

	
	ngOnChanges(): void {
		
        this.viewContainer.clear();
        this.viewContainer.createEmbeddedView(this.templateRef);

    }

}