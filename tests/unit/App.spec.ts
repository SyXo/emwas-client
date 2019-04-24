import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';

describe('About.vue', () => {
  const $route = {
    path: '/',
  };

  const app = shallowMount(App, {
    stubs: ['router-link', 'router-view'],
    mocks: $route,
  });

  it('should include navigation', () => {
    expect(app.findAll('nav router-link-stub').length).toBe(2);
    // router-link are replaced by stubs so it ACTUALLY tests router-link
  });
});
