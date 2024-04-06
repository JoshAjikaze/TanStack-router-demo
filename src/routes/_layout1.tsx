import { createFileRoute, Outlet, ScrollRestoration } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout1')({
  component: () => <Layout1 />
})



function Layout1() {
  return (
    <div className='w-full min-h-screen'>
      <ScrollRestoration />
      <Outlet />
    </div>
  )
}