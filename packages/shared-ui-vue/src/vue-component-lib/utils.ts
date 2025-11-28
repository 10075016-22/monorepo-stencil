import { defineComponent, h } from 'vue';

export const defineContainer = <Props extends object>(
    tagName: string,
    defineCustomElement: any = undefined,
    modelConfig: any = undefined
) => {
    if (typeof defineCustomElement === 'function') {
        defineCustomElement();
    }

    return defineComponent({
        name: tagName,
        props: {
            modelValue: {
                type: [String, Boolean, Number],
                default: undefined,
            },
        },
        emits: modelConfig ? [modelConfig.event] : [],
        setup(props, { slots, attrs, emit }) {
            return () => {
                const { modelValue, ...restProps } = props;
                let finalProps: any = { ...restProps, ...attrs };

                if (modelConfig) {
                    finalProps = {
                        ...finalProps,
                        [modelConfig.prop]: modelValue,
                        [`on${modelConfig.event.charAt(0).toUpperCase() + modelConfig.event.slice(1)}`]: (event: any) => {
                            emit(modelConfig.event, event.target.value);
                        }
                    };
                }

                return h(tagName, finalProps, slots);
            };
        },
    });
};
