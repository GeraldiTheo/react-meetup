// Component
import NewMeetupForm from "../components/Meetups/NewMeetUpFrom";

// History
import { useHistory } from 'react-router-dom'

function NewMeetup(){

    const history = useHistory();

    function addMeetupHandler(meetupdata){

        fetch(
            'https://react-getting-started-92f27-default-rtdb.firebaseio.com/meetups.json', 
            {
                method: 'POST',
                body: JSON.stringify(meetupdata),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(
            history.replace('/')
        );
    }

    return <section>
        <h1>Add New Meetup</h1>

        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
}

export default NewMeetup;