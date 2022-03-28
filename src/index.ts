import { registerPlugin } from '@capacitor/core';

import type { FacebookLoginEnhancePlugin } from './definitions';

const FacebookLoginEnhance = registerPlugin<FacebookLoginEnhancePlugin>('FacebookLoginEnhance', {
  web: () => import('./web').then(m => new m.FacebookLoginEnhanceWeb()),
});

export * from './definitions';
export { FacebookLoginEnhance };
