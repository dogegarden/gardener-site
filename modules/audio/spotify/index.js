import { useState, useEffect } from "react"
import useAuth from "../../../Backend/spotifyAuth"
import AudioPlayer from "../../Pieces/AudioPlayer"
import SpotifyTrackSearchList from "../../Pieces/SpotifyTrackSearchList"
import SpotifyWebApi from "spotify-web-api-node"
import axios from "axios"

const spotifyApi = new SpotifyWebApi({
  clientId: "8b945ef10ea24755b83ac50cede405a0",
})

export default function SpotifyAudio({ queryCode }) {
  const accessToken = useAuth(queryCode)
  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [playingTrack, setPlayingTrack] = useState()
  const [lyrics, setLyrics] = useState("")

  function chooseTrack(track) {
    setPlayingTrack(track)
    setSearch("")
    setLyrics("")
  }

  useEffect(() => {
    if (!playingTrack) return

    axios
      .get("http://localhost:3050/api/spotify/lyrics", {
        params: {
          track: playingTrack.title,
          artist: playingTrack.artist,
        },
      })
      .then(res => {
        setLyrics(res.data.lyrics)
      })
  }, [playingTrack])

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    if (!search) return setSearchResults([])
    if (!accessToken) return

    let cancel = false
    spotifyApi.searchTracks(search)
        .then(res => {
            if (cancel) return
            setSearchResults(
                res.body.tracks.items.map(track => {
                    //find the smallest image in the album track images list
                const smallestAlbumImage = track.album.images.reduce(
                    (smallest, image) => {
                    if (image.height < smallest.height) return image
                    return smallest
                    },
                    track.album.images[0]
                )

                return {
                    artist: track.artists[0].name,
                    title: track.name,
                    uri: track.uri,
                    albumUrl: smallestAlbumImage.url,
                }
                })
            )
        })

        return () => (cancel = true)
  }, [search, accessToken])

  return (
    <div style={{ height: "100vh" }}>
      <form
        type="search"
        placeholder="Search Songs/Artists"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div style={{ overflowY: "auto" }}>
        {searchResults.map(track => (
          <SpotifyTrackSearchList
            track={track}
            key={track.uri}
            chooseTrack={chooseTrack}
          />
        ))}
        {searchResults.length === 0 && (
          <div style={{ whiteSpace: "pre" }}>
            {lyrics}
          </div>
        )}
      </div>
      <div>
        <AudioPlayer accessToken={accessToken} trackUri={playingTrack?.uri} />
      </div>
    </div>
  )
}