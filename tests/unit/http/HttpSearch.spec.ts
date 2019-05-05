import * as httpSearch from '@/http/HttpSearch';
import nataliaSearchResult from '../../mocks/http/SearchNatalia';
import MockAdapter from 'axios-mock-adapter';

describe('http/HttpSearch.ts', () => {
  describe('findVideosWithText', () => {
    it('should return what the API returned if it happened well', async () => {
      const mock = new MockAdapter(httpSearch.default.httpClient);
      mock.onGet(/.*\/api.*/).reply(200, nataliaSearchResult);
      const httpOkRes = await httpSearch.default.findVideosWithText('Natalia');
      expect(httpOkRes).toEqual(nataliaSearchResult);
    });

    it('should return null if less than 3 characters were provided', async () => {
      const mock = new MockAdapter(httpSearch.default.httpClient);
      mock.onGet(/.*\/api.*/).reply(200, nataliaSearchResult);
      const httpLessThanThreeChar = await httpSearch.default.findVideosWithText('a');
      expect(httpLessThanThreeChar).toBe(null);
    });

    it('throws an error if filters are provided', async () => {
      const mock = new MockAdapter(httpSearch.default.httpClient);
      mock.onGet(/.*\/api.*/).reply(200, nataliaSearchResult);
      let errorString = '';
      try {
        await httpSearch.default.findVideosWithText('Natalia', ['hello']);
      } catch (e) {
        errorString = e.message;
      }
      expect(errorString).toBe('Search filters are not implemented yet');
    });

    it('throws an error if API HTTP call failed', async () => {
      const mock = new MockAdapter(httpSearch.default.httpClient);
      mock.onGet(/.*\/api.*/).reply(500, 'Server error');
      let errorString = '';
      try {
        await httpSearch.default.findVideosWithText('Nikita');
      } catch (e) {
        errorString = e.message;
      }
      expect(errorString).toContain('Failed on calling emwas API');
    });
  });
});
