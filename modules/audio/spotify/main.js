import SpotifyAudio from './index'
import SpotifyLogin from '../../Pieces/SpotifyLogin'

const queryCode = new URLSearchParams(window.location.search).get("code")

function SpotifyHub() {
    return queryCode ? <SpotifyAudio queryCode={queryCode}/> : <SpotifyLogin/>
} 

export default SpotifyHub