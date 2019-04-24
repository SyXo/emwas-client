import { mount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

describe('Home.vue', () => {
  const homeElement = mount(Home);
  it('should render one image with emwas-logo class', () => {
    expect(homeElement.findAll('img.emwas-logo').length).toBe(1);
  });

  it('should have an image with emwas-logo class AND an emwas logo alt attribute', () => {
    expect(homeElement.find('img').attributes('alt')).toBe('emwas logo');
  });
});
