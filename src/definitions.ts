export interface FacebookLoginEnhancePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
