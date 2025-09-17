'use client'
import { useMutation, useQuery } from "convex/react"
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";

export default function Page() {
  const users = useQuery(api.users.getMany, {});
  const addUser = useMutation(api.users.add);

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">apps/web</h1>
         <Button onClick={() => addUser({name: "hi here"})} disabled={users === undefined}>
          Add User
        </Button>
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Users ({users?.length || 0})</h2>
          <ul className="space-y-2">
            {users?.map((user, index) => (
              <li key={user.id || index} className="p-2 border rounded">
                {user.name || `User ${index + 1}`}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
