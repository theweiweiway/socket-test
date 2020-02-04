import React from "react"
import axios from "axios"
import io from "socket.io-client"

const IndexPage = () => (
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
    <button
      onClick={() => {
        const socket = io("https://socket-test-api.azurewebsites.net/chat")
      }}
    >
      TEST SOCKET
    </button>
  </div>
)

export default IndexPage
