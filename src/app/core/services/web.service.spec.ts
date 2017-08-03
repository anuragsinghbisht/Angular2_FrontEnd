import { TestBed, inject } from '@angular/core/testing';
import { HttpModule, Http,  BaseRequestOptions, XHRBackend, ResponseOptions, Response } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { WebService } from './web.service';

describe('WebService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [
        WebService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });
  });

  describe('getTitleAndDescription', () => {
    it('should return title and desciption', inject([WebService, XHRBackend], (webService, mockBackend) => {
      const mockResponse = {
        title: 'title',
        description: 'description'
      };

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })))
      })

      webService.getTitleAndDescription().subscribe((exercise) => {
        expect(exercise.title).toBe('title');
        expect(exercise.description).toBe('description');
      })
    }));
  });

  describe('getCategories', () => {
    it('should return categories', inject([WebService, XHRBackend], (webService, mockBackend) => {
      const mockResponse = [
        { categoryName: 'Company' }
      ];

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })))
      })

      webService.getCategories().subscribe((categories) => {
        expect(categories.length).toBe(1);
        expect(categories).toEqual(mockResponse);
      })
    }));
  });

  describe('getProducts', () => {
    it('should return products', inject([WebService, XHRBackend], (webService, mockBackend) => {
      const mockResponse = [
        { _id: '1', title: 'title', category: 'Company', description: 'description', url: 'url', imageHref: 'imageHref' }
      ];

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })))
      })

      webService.getProducts('company').subscribe((products) => {
        expect(products.length).toBe(1);
        expect(products).toEqual(mockResponse);
      })
    }));
  });

  describe('getProduct', () => {
    it('should return product', inject([WebService, XHRBackend], (webService, mockBackend) => {
      const mockResponse = [
        { _id: '1', title: 'title', category: 'Company', description: 'description', url: 'url', imageHref: 'imageHref' }
      ];

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })))
      })

      webService.getProduct({ category: 'company', productId: '1' }).subscribe((products) => {
        expect(products.length).toBe(1);
        expect(products).toEqual(mockResponse);
      })
    }));
  });

  describe('submitProduct', () => {
    it('should submit product', inject([WebService, XHRBackend], (webService, mockBackend) => {
      const mockResponse = { message: 'successfull' };

      mockBackend.connections.subscribe((connection) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })))
      })

      webService.submitProduct({}).subscribe((res) => {
        expect(res.message).toBe(mockResponse.message);
      })
    }));
  });

});
