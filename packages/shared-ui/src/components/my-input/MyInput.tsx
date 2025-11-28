import { Component, Prop, Event, EventEmitter, h, Host, Watch, Method, Element } from '@stencil/core';

@Component({
    tag: 'my-input',
    styleUrl: 'my-input.css',
    shadow: true,
})
export class MyInput {
    @Element() hostElement!: HTMLElement;

    private inputElement?: HTMLInputElement;

    @Prop({ mutable: true }) value: string = '';
    @Prop() placeholder: string = '';
    @Prop() label: string = '';
    @Prop() disabled: boolean = false;
    @Prop() type: string = 'text';
    @Prop() required: boolean = false;
    @Prop() name: string = '';

    @Event() myChange!: EventEmitter<string>;
    @Event() myInput!: EventEmitter<string>;
    @Event() myBlur!: EventEmitter<void>;
    @Event() myFocus!: EventEmitter<void>;

    @Watch('value')
    valueChanged(newValue: string) {
        if (this.inputElement && this.inputElement.value !== newValue) {
            this.inputElement.value = newValue || '';
        }
    }

    @Method()
    async setFocus() {
        this.inputElement?.focus();
    }

    @Method()
    async getInputElement() {
        return this.inputElement;
    }

    private handleInput = (event: Event) => {
        const target = event.target as HTMLInputElement;
        this.value = target.value;
        this.myInput.emit(this.value);
    };

    private handleChange = (event: Event) => {
        const target = event.target as HTMLInputElement;
        this.value = target.value;
        this.myChange.emit(this.value);
    };

    private handleBlur = () => {
        this.myBlur.emit();
    };

    private handleFocus = () => {
        this.myFocus.emit();
    };

    render() {
        return (
            <Host>
                <div class="input-wrapper">
                    {this.label && (
                        <label class="input-label" htmlFor={this.name}>
                            {this.label}
                            {this.required && <span class="required">*</span>}
                        </label>
                    )}
                    <input
                        ref={(el) => (this.inputElement = el)}
                        type={this.type}
                        value={this.value}
                        placeholder={this.placeholder}
                        disabled={this.disabled}
                        required={this.required}
                        name={this.name}
                        id={this.name}
                        onInput={this.handleInput}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                        onFocus={this.handleFocus}
                        class="input-element"
                    />
                </div>
            </Host>
        );
    }
}