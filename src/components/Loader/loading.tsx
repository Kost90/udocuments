import { Loader2 } from 'lucide-react'
import React from 'react'

function Loader() {
  return (
    <div className="bg-general-gradient flex justify-center h-screen w-full">
      <Loader2 className="size-24 animate-spin text-orange" />
    </div>
  )
}

export default Loader