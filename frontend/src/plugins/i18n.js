import Vue from 'vue';
import VueI18n from 'vue-i18n'

import en from '@/lang/en_US.json'
import es from '@/lang/es_ES.json'

Vue.use(VueI18n)

const messages = {
    'en': {
        lang: en
    },
    'es': {
        lang: es
    }
}



export const i18n = new VueI18n({
  locale: 'en',
  messages
})

