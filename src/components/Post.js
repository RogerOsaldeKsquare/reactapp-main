import React from 'react';
import {Card, Grid } from 'semantic-ui-react';


export default function Post({data}){
    return (
        <>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
            <h1> Post </h1>
         </div>
        <Grid columns={3}>
            {data.map((post, i)=>{
                return(
                    <Grid.Column key={i}>
                    <Card>
                        <Card.Content>
                            <Card.Header>User ID: {post.userId}</Card.Header>
                            <Card.Description>
                                <strong>Post ID</strong>
                                <p>{post.id}</p>
                                <strong>Title</strong>
                                <p>{post.title}</p>
                                <strong>Status</strong>
                                <p>{post.completed}</p>

                                <button>More Info</button>
                            </Card.Description>
                        </Card.Content>
                    </Card>
                    </Grid.Column>
                )
            })}
        </Grid>
    </>
    )

}