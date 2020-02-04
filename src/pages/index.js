import React from "react"
import axios from "axios"
import io from "socket.io-client"

const IndexPage = () => (
  <div>
    <button
      onClick={() =>
        axios
          .get("http://localhost:3000")
          .then(result => console.log(result))
          .catch(error => console.log("ERROR: " + error))
      }
    >
      TEST HTTP
    </button>
    <button
      onClick={() => {
        const socket = io("http://localhost:3000/chat")
      }}
    >
      TEST SOCKET
    </button>
  </div>
)

export default IndexPage
