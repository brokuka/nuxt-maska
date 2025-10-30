declare module 'vue' {
  interface HTMLAttributes {
    /**
     * Mask pattern to apply (string, array of strings or function)
     *
     * @example
     * ```vue
     * <input data-maska="+7 (###) ###-##-##" />
     * <input data-maska="['##-##', '##-##-##']" />
     * ```
     *
     * @see https://beholdr.github.io/maska/v3/#/options
     */
    'data-maska'?: string

    /**
     * Custom tokens object for mask patterns
     *
     * @example
     * ```vue
     * <input data-maska-tokens='{"A": {"pattern": "[A-Z]"}}' />
     * ```
     *
     * @see https://beholdr.github.io/maska/v3/#/tokens
     */
    'data-maska-tokens'?: string

    /**
     * If custom tokens should replace default tokens (if not set, they will merge)
     *
     * @default false
     * @see https://beholdr.github.io/maska/v3/#/options
     */
    'data-maska-tokens-replace'?: boolean | 'true' | 'false'

    /**
     * Eager mode will show static characters before you type them
     *
     * @example
     * When you type `1`, eager mask `#-#` will show `1-`, non-eager will show `1`
     *
     * @default false
     * @see https://beholdr.github.io/maska/v3/#/options
     */
    'data-maska-eager'?: boolean | 'true' | 'false'

    /**
     * In reversed mode mask will grow backwards (useful for numbers)
     *
     * @default false
     * @see https://beholdr.github.io/maska/v3/#/options
     */
    'data-maska-reversed'?: boolean | 'true' | 'false'

    /**
     * Locale for number mode (determines national format for the number)
     *
     * @example "en", "ru", "de"
     * @default "en"
     * @see https://beholdr.github.io/maska/v3/#/options
     */
    'data-maska-number-locale'?: string

    /**
     * Fraction digits for number mode (0 allows only integer numbers)
     *
     * @example "2" for currency with cents, "0" for integers only
     * @default 0
     * @see https://beholdr.github.io/maska/v3/#/options
     */
    'data-maska-number-fraction'?: number | string

    /**
     * Unsigned mode for numbers (accept only positive numbers)
     *
     * @default false
     * @see https://beholdr.github.io/maska/v3/#/options
     */
    'data-maska-number-unsigned'?: boolean | 'true' | 'false'
  }
}

export { }
