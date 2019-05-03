import store from '@/store/store';
import classicalSearchResults from '../../mocks/http/SearchNatalia';
import longResult from '../../mocks/http/longResult';

const lastElementOnPage = {
  service: 1,
  title: "Jane Wilde, All I Want For Christmas Is My Friend's Dad Up My Ass.",
  url: 'https://www.julesjordan.com/trial/scenes/Jane-Wilde-Teen-Anal-Facial-Old-Man-Christmas-Porn-4k_vids.html',
  performers: [
    'Jane Wilde',
    'Steve Holmes',
  ],
  thumbnailUrl: [
    'https://thumbs.julesjordan.com/trial/content//contentthumbs/104381.jpg',
    'https://thumbs.julesjordan.com/trial/content//contentthumbs/104381.jpg',
    'https://thumbs.julesjordan.com/trial/content//contentthumbs/104331.jpg',
    'https://thumbs.julesjordan.com/trial/content//contentthumbs/104321.jpg',
    'https://thumbs.julesjordan.com/trial/content//contentthumbs/104291.jpg',
    'https://thumbs.julesjordan.com/trial/content//contentthumbs/104341.jpg',
    'https://thumbs.julesjordan.com/trial/content//contentthumbs/104351.jpg',
  ],
  description: "It's teen temptress Jean Wilde and Steve Holmes for the holidays in this spirited JulesJordan.com romp. Hard-on creator Jean, heads over to her friend's house for some harmless social networking fun. Her friend is at the mall, but her Daddy, Steve Holmes is more than happy to sub and do the \"mauling\". Jean is a little Tasmanian tart as she disrobes and reveals a teenie-weenie red and white bikini. Dad asks if her friend will approve of her sucking his dick. Mouthy Jean says, \"No. But I'm gonna do it anyway!\" Not only does she suck it, but she swallows it until she gags on the ball-stem. She produces a huge string of slobber-tinsel to decorate Holmes' dick with.The holiday festivities commence as Holmes wants some of that candy and gets to licking his holiday treat. He fingers Jean's asshole as she exclaims that he's making her pussy throb. The \"Hole-aday\" spirit continues as Holmes folds Jean's legs over her head, \"I want you to pile drive me like this.\" the perverted pixie exclaims. Holmes is all too happy to give her what she wants for XXXmas and crams his cock down her ass. The lucky parent has the teen sexpot drop to her knees. He kablooies into Jane's Yuletide yap as she performs a holiday miracle by making it all disappear.",
  date: '2018-12-22T00:00:00.000Z',
  length: 1800,
  tags: [],
};

describe('store/store.ts', () => {
  it('should initialize state', () => {
    const expectedInitalState = {
      videosList: [],
      flashMessage: '',
      currentPage: 1,
      vidPerPage: 8,
    };
    expect(store.state).toEqual(expectedInitalState);
  });

  it('should update values on using setters', () => {
    store.commit('updateVideosList', classicalSearchResults);
    expect(store.state.videosList).toEqual(classicalSearchResults);
    store.commit('setCurrentPage', 2);
    expect(store.state.currentPage).toBe(2);
    store.commit('setFlashMessage', 'Hello, I love Riley Reid');
    expect(store.state.flashMessage).toBe('Hello, I love Riley Reid');
    store.commit('setVideoPerPage', 9);
    expect(store.state.vidPerPage).toBe(9);
  });

  it('should filter correctly on a per page basis', () => {
    store.commit('updateVideosList', longResult);
    store.commit('setCurrentPage', 2);
    store.commit('setVideoPerPage', 10);
    const { currentPageVideosList } = store.getters;
    expect(currentPageVideosList.length).toBe(6);
    expect(currentPageVideosList[currentPageVideosList.length - 1]).toEqual(lastElementOnPage);
  });
});
