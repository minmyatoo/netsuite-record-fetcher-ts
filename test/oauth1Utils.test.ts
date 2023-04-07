import { createOAuthHeader } from '../oauth1Utils';

describe('createOAuthHeader', () => {
  it('generates an OAuth header for GET method', () => {
    const url = 'https://example.com/api';
    const method = 'GET';
    const headers = createOAuthHeader(url, method);

    expect(headers.Authorization).toBeDefined();
    expect(headers.Authorization).toContain('OAuth ');
    expect(headers['Content-Type']).toEqual('application/json');
  });

  it('generates an OAuth header for POST method', () => {
    const url = 'https://example.com/api';
    const method = 'POST';
    const headers = createOAuthHeader(url, method);

    expect(headers.Authorization).toBeDefined();
    expect(headers.Authorization).toContain('OAuth ');
    expect(headers['Content-Type']).toEqual('application/json');
  });

  it('generates an OAuth header for PUT method', () => {
    const url = 'https://example.com/api';
    const method = 'PUT';
    const headers = createOAuthHeader(url, method);

    expect(headers.Authorization).toBeDefined();
    expect(headers.Authorization).toContain('OAuth ');
    expect(headers['Content-Type']).toEqual('application/json');
  });

  it('generates an OAuth header for DELETE method', () => {
    const url = 'https://example.com/api';
    const method = 'DELETE';
    const headers = createOAuthHeader(url, method);

    expect(headers.Authorization).toBeDefined();
    expect(headers.Authorization).toContain('OAuth ');
    expect(headers['Content-Type']).toEqual('application/json');
  });

});
