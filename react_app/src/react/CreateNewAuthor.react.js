import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

export default function CreateNewAuthor(props) {
    return (
        <div class="card">
            <div class="card-body">
                <form action="/action_page.php">
                    <div class="form-group">
                        <label for="Name">Name:</label>
                        <input type="text" class="form-control" id="pwd" placeholder="Enter Name" name="name" />
                    </div>
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" />
                    </div>
                    <button type="submit" class="btn btn-primary">
                        {props.sideColumnType === 'CREATE_NEW' 
                            ? 'Create'
                            : 'Update'
                        }
                    </button>
                </form>          
            </div>
        </div>
    );
}