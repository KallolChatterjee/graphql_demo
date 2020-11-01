import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import graphql from 'babel-plugin-relay/macro';
import { useFragment } from 'react-relay/hooks';
import Select from "react-select";


export default function AuthorsDropDown(props) {
    const [authorName, setAuthorName] = useState(null);

    const authors = useFragment(
        AuthorsDropDownQuery,
        props.authors,
    );

    const options = authors.map(author => {
        return {
            value: author.id,
            label: author.name
        };
    });

    const onChange = (val) => {
        setAuthorName(val);
        props.setAuthorID(val);
    };

    return (
        <Select
            defaultValue={authorName ?? 'Select Author'}
            onChange={onChange}
            options={options}
        />
      );
}

const AuthorsDropDownQuery = graphql`
    fragment AuthorsDropDown_author on Author
    @relay(plural: true) {
      id
      name
    }
  `;