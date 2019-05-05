import { mount } from '@vue/test-utils';
import VideoComponent from '@/components/VideoComponent.vue';
import longResult from '../../mocks/http/longResult';

describe('VideosList.vue', () => {
  const janeWildeVideoWrapper = mount(VideoComponent, {
    propsData: { vid: longResult[15] },
  });

  const canelaSkinVideoWrapper = mount(VideoComponent, {
    propsData: { vid: longResult[14] },
  });

  it('should have an element with the video-link class', () => {
    expect(janeWildeVideoWrapper.findAll('.video-link').length).toBe(1);
  });

  it('should link to the original video', () => {
    expect(
      janeWildeVideoWrapper.find('.video-link').attributes('href'),
    ).toBe('https://www.julesjordan.com/trial/scenes/Jane-Wilde-Teen-Anal-Facial-Old-Man-Christmas-Porn-4k_vids.html');
  });

  it('should display the length of the video as x minutes and x seconds', () => {
    expect(
      janeWildeVideoWrapper.find('.video-length').text(),
    ).toBe('30 minutes');
    expect(
      canelaSkinVideoWrapper.find('.video-length').text(),
    ).toBe('56 minutes and 1 seconds');
  });

  it('should display the list of performers', () => {
    expect(
      janeWildeVideoWrapper.find('.video-performers').text().replace(/,\n */, ', '),
    ).toBe('Jane Wilde, Steve Holmes');
  });
});
