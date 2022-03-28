import { WebPlugin } from '@capacitor/core';

import type { FacebookLoginEnhancePlugin } from './definitions';

export class FacebookLoginEnhanceWeb extends WebPlugin implements FacebookLoginEnhancePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
