import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout1/user')({
  component: () => <UserRoute />
})

function UserRoute() {
  return (
    <section>User Route</section>
  )
}