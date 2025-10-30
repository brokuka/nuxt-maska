import { addImports, addPlugin, addTypeTemplate, createResolver, defineNuxtModule } from '@nuxt/kit'

export interface ModuleOptions {
  /**
   * Auto-import Maska composables and directives
   * @default true
   */
  autoImports?: boolean

  /**
   * Register v-maska directive globally
   * @default true
   */
  directive?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-maska',
    configKey: 'maska',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },
  defaults: {
    autoImports: true,
    directive: true,
  },
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url)

    if (options.directive) {
      addPlugin(resolver.resolve('./runtime/plugin'))
    }

    if (options.autoImports) {
      addImports([
        {
          name: 'useMaska',
          from: resolver.resolve('./runtime/composables/useMaska'),
        },
        {
          name: 'vMaska',
          from: resolver.resolve('./runtime/directives/vMaska'),
        },
      ])
    }

    addTypeTemplate({
      filename: 'types/nuxt-maska.d.ts',
      src: resolver.resolve('./runtime/types.d.ts'),
    })

    nuxt.options.build.transpile.push('maska')
  },
})

declare module '@nuxt/schema' {
  interface NuxtConfig {
    maska?: ModuleOptions
  }

  interface NuxtOptions {
    maska: ModuleOptions
  }
}

export type { MaskaDetail, MaskInputOptions, MaskOptions, MaskTokens } from 'maska'
