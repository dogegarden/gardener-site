import { useState, useEffect } from "react"
import SpotifyPlayer from "react-spotify-web-playback"

export default function AudioPlayer({ accessToken, trackURI }) {
  const [play, setPlay] = useState(false)

  useEffect(() => setPlay(true), [trackURI])

  if (!accessToken) return null
  return (
    <SpotifyPlayer
      styles={{
        activeColor: '#fd6868',
        bgColor: '#242c37',
        color: '#151a21',
        loaderColor: '#fff',
        sliderColor: '#fd6868',
        trackArtistColor: '#ccc',
        trackNameColor: '#dee3ea'
    }}
      token={accessToken}
      showSaveIcon
      callback={state => {
        if (!state.isPlaying) setPlay(false)
      }}
      play={play}
      autoPlay
      syncExternalDevice
      syncExternalDeviceInterval
      maynifySliderOnHover
      uris={trackURI ? [trackURI] : []}
    />
  )
}