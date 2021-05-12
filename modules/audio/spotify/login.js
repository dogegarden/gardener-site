import React from "react"

import {accessUrl} from '../../../config/spotify'

export default function Login() {
  return (
    <div
      style={{ minHeight: "100vh" }}
    >
      <a href={accessUrl}>
        Login With Spotify
      </a>
    </div>
  )
}