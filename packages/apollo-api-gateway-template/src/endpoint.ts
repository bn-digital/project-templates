import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest'
import { URL, URLSearchParams } from 'url'
import { RemoteGraphQLDataSource } from '@apollo/gateway'

class ServiceEndpoint extends RESTDataSource {
  constructor(url: string | undefined) {
    super()
    this.baseURL = new URL('/', url ?? 'http://localhost:1337').toString()
  }

  willSendRequest(request: RequestOptions) {
    request.cacheOptions = { ttl: 0 }
    request.headers.set('Content-Type', 'application/json')
    request.headers.set('Accept', 'application/json')
  }
}

export class TestEndpoint extends ServiceEndpoint {
  async proxy(init?: Record<string, string>): Promise<any> {
    return this.get(`/proxy${init ? `?${new URLSearchParams(init)}` : ''}`)
  }
}

export class StrapiEndpoint extends RemoteGraphQLDataSource {}
