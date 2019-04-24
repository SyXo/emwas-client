import { mount } from '@vue/test-utils';
import About from '@/views/About.vue';

describe('About.vue', () => {
  const aboutElement = mount(About);

  it('should have an h1 with text "About"', () => {
    expect(aboutElement.find('h1').text()).toBe('About');
  });

  it('Should have a headline with a description', () => {
    expect(aboutElement.findAll('.headline').length).toEqual(1);

    const descriptionElementText = aboutElement.find('.headline').text();
    expect(descriptionElementText).toContain('emwas');
    expect(descriptionElementText).toContain('porn');
    expect(descriptionElementText).toContain('sites');
  });

  it('Should have a FAQ', () => {
    const h2Elements = aboutElement.findAll('h2');

    expect(h2Elements.filter(el => el.text() === 'FAQ').length).toEqual(1);
  });

  it('Should have a Reviewing part', () => {
    const h2Elements = aboutElement.findAll('h2');

    expect(h2Elements.filter(
      el => el.text().search('Reviewing code') > -1,
    ).length).toEqual(1);
  });

  it('Should have a Github link on an image with "Github icon" alt name', () => {
    const linksToGithub = aboutElement.findAll('a').filter(
      (el) => {
        const href = el.attributes('href');
        if (typeof href === 'string') {
          return href.search('https://github.com') === 0;
        }
        return false;
      },
    );

    expect(linksToGithub.length).toBeGreaterThan(1);
    const githubImage = linksToGithub.filter(
      el => el.findAll('img').length === 1,
    ).at(0).find('img');
    expect(githubImage.classes()).toContain('github-icon');
    expect(githubImage.attributes('alt')).toBe('Github icon');
  });
});
