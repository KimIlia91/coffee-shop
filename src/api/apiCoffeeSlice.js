import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiCoffeeSlice = createApi({
    reducerPath: 'apiCoffee',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001'
    }),
    tagTypes: ['Coffees', 'BestCoffees', 'Filters'],
    endpoints: builder => ({
        getCoffees: builder.query({
            query: ({ name = '', country = '' }) => country === '' ? `/coffees?q=${name}` : `/coffees?q=${name}&country=${country}`,
            providesTags: ['Coffees']
        }),
        getCoffeeById: builder.query({
            query: id => { console.log(id);  return `/coffees/${id}`},
            providesTags: ['Coffees']
        }),
        getBestCoffees: builder.query({
            query: () => '/bestCoffees',
            providesTags: ['BestCoffees']
        }),
        getFilters: builder.query({
            query: () => '/filters',
            providesTags: ['Filters']
        })
    })
});

export const { 
    useGetBestCoffeesQuery,
    useGetCoffeesQuery,
    useGetFiltersQuery,
    useGetCoffeeByIdQuery
} = apiCoffeeSlice;