import { defineCustomElement } from 'vue';
import AccountApp from './AccountApp.ce.vue';

export const AccountMfe = defineCustomElement(AccountApp);

export function register() {
  if (!customElements.get('account-mfe')) {
    customElements.define('account-mfe', AccountMfe);
  }
}
