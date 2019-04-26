import * as axios from 'axios';
import * as variables from '../variables';

class SearchResults {
  static httpClient: axios.AxiosStatic = axios.default;

  static realSearchUrl: string = variables.default.apiUrl + variables.default.searchRoute;

  /**
   * Performs a HTTP request to the emwas API that will aggregate it from different sites
   * @param textSearch the search you want to perform on websites
   * @param filters the filters you want the API to apply
   */
  static async findVideosWithText(textSearch: string, filters: (string)[] = [] || null) {
    if (textSearch.length <= 3) {
      return null;
    }
    if (filters.length > 0) {
      throw new Error('Search filters are not implemented yet');
    }
    let result = null;
    try {
      result = await this.httpClient.get(
        this.realSearchUrl, {
          params: {
            q: textSearch,
          },
        },
      );
    } catch (e) {
      throw new Error(`Failed on calling emwas API : ${e}`);
    }
    return result.data;
  }
}

export default SearchResults;
