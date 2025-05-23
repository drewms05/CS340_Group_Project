// Citation for starter code 
// Date: 05/22/2025
// Code adapted from the bsg files from Exploration - Implementing CUD operations in your app
// Code adapted from the bsg files from Exploration - Web Application Technology
// URL: https://canvas.oregonstate.edu/courses/1999601/pages/exploration-web-application-technology-2?module_item_id=25352948
// URL: https://canvas.oregonstate.edu/courses/1999601/pages/exploration-implementing-cud-operations-in-your-app?module_item_id=25352968

import Recording_Sessions_has_Artists from "../../pages/Recording_Sessions_has_Artists";

const UpdateRecordingSessionshasArtistsForm = ({ recording_sessions_has_artists, recording_sessions, artists }) => {

    return (
        <>
        <h2>Update a Session/Artist pairing</h2>

        <form className='cuForm'>

            <label htmlFor="update_recording_sessions_has_artists_id">Pairing: </label>
            <select
                name="update_recording_sessions_has_artists_id"
                id="update_recording_sessions_has_artists_id"
            >
                <option value="">Select a Session/Artist pairing</option>
                {recording_sessions_has_artists.map((recording_sessions_has_artists, index) => (
                    <option value={recording_sessions_has_artists.id} key={index}>{recording_sessions_has_artists.Pairing}</option>
                ))}
            </select>
            
            <label htmlFor="update_session_id">Session: </label>
            <select
                name="update_session_id"
                id="update_session_id"
            >
                <option value="">Select a Session</option>
                {recording_sessions.map((recording_sessions, index) => (
                    <option value={recording_sessions.id} key={index}>{recording_sessions.session_ID}</option>
                ))}
            </select>

            <label htmlFor="update_artist_id">Artist: </label>
            <select
                name="update_artist_id"
                id="update_artist_id"
            >
                <option value="">Select an Artist</option>
                {artists.map((artists, index) => (
                    <option value={artists.id} key={index}>{artists.name}</option>
                ))}
            </select>

            <input type="submit" />
        </form>
        </>
    );

}

export default UpdateRecordingSessionshasArtistsForm