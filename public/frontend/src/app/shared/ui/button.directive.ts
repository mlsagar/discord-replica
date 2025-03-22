import { computed, Directive, input } from '@angular/core';
import { cva, VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

export const buttonVariants = cva(
	"iniline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
	variants: {
		appearance: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground hober:bg-destructive/90",
			outline: "border border-input bg-background hover: bg-accent hover: text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-10 px-4 py-2",
			sm: "h-9 rounded-md px-3",
			lg: "h-11 rounded-md px-8",
			icon: "h-10 w-10"
		},
	},
	defaultVariants: {
		appearance: 'default',
		size: 'default'
	}
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;

@Directive({
	selector: '[appButton]',
	host: {
		'[class]': 'computedClass()'
	}
})
export class ButtonDirective {

	size = input<ButtonVariants['size']>();
	variant = input<ButtonVariants['appearance']>();

	computedClass = computed(() => {
		return twMerge(
			buttonVariants({appearance: this.variant(), size: this.size()})
		)
	})

}
