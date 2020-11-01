import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import ShowAuthorsContainer from './ShowAuthorsContainer.react';

export default function CreateNewBook(props) {
    const [authorName, setAuthorName] = useState(null);

    return (
        <div class="card">
            <div class="card-body">
                <form action="/action_page.php">
                    <div class="form-group">
                        <label for="Name">Name:</label>
                        <input type="text" class="form-control" id="pwd" placeholder="Enter Name" name="name" />
                    </div>
                    <div class="form-group">
                        <label for="description">Description:</label>
                        <input type="text" class="form-control" id="description" placeholder="Enter description" name="email" />
                    </div>
                    <div class="form-group">
                        <label for="Name">Author:</label>
                        <ShowAuthorsContainer 
                            toggleSideColumn= {() => {}}
                            setsideColumnType= {() => {}}
                            setAuthorID={setAuthorName}
                            showAsDropDown={true}
                        />
                    </div>
                    <button type="submit" class="btn btn-primary">
                        {props.sideColumnType === 'CREATE_NEW_BOOK' 
                            ? 'Create'
                            : 'Update'
                        }
                    </button>
                </form>          
            </div>
        </div>
    );
}