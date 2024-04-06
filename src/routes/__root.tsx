import { createRootRoute, Link, Outlet, ScrollRestoration } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
    component: () => (
        <main className='w-full min-h-screen pt-16'>
            <div className="fixed top-0 w-full z-[100] bg-white p-2 flex items-center gap-2 h-16">
                <Link to="/" className="[&.active]:font-bold">
                    Home
                </Link>{' '}
                <Link to="/about" className="[&.active]:font-bold">
                    About
                </Link>
                <Link to="/products" className="[&.active]:font-bold">
                    Products
                </Link>
            </div>
            <hr />
            <div className=''>
                <ScrollRestoration />
                <Outlet />
            </div>
            <TanStackRouterDevtools />
        </main>
    ),
})