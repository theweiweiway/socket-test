import React, { useEffect } from "react"
import axios from "axios"
import io from "socket.io-client"

export default function IndexPage() {
  useEffect(() => {
    const socket = io("https://api.honeybeehub.io/chat", {
      transports: ["websocket"],
      upgrade: false,
    })
    socket.on("test", function(data) {
      console.log(data)
    })
  }, [])

  return (
    <div>
      <button
        onClick={() =>
          axios
            .get("https://socket-test-api.azurewebsites.net/")
            .then(result => console.log(result))
            .catch(error => console.log("ERROR: " + error))
        }
      >
        TEST HTTP
      </button>
    </div>
  )
}
