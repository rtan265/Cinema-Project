import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Collapse = styled.div.attrs({
    className: 'collapse navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'narbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collapse navbar-collapse',
})``

class Links extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Link to = "/" className = "navbar-brand">
                    Movie Database
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to = "/movies/list" className = "link-tab">
                                List movies
                            </Link>
                        </Item>
                        <Item>
                            <Link to = "/movies/create" className = "link-tab">
                                Create Movie
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links