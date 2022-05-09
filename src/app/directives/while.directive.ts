import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

interface whileContext {
	$implicit: any,
	index: number,
}


@Directive({ selector: '[while]'})
export class WhileDirective implements OnChanges {
	
	index: number = 0;
	@Input('while') target: Array<any> = []

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

	
	ngOnChanges(): void {
		let save = 0;
		this.viewContainer.clear();
		this.index = 0;

		while(save < 10 && this.index < this.target.length) {
			
			this.viewContainer.createEmbeddedView(this.templateRef, 
				{
					$implicit: this.target[this.index],
					index: this.index
				});

			this.index++;
			save++;
		}
		this.index = 0;			
	}

}