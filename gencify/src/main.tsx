import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes'


const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
    <ReactQueryDevtools initialIsOpen={true}/>
  </QueryClientProvider>
    
  </StrictMode>,
)
