import React, { useRef, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { GET_RESULTS, QueryObj, GET_ALL_LANDLORDS} from './Utils'


function SearchResult ( props: QueryObj | any | undefined ){
  // console.log(props.location.state.query)
  const { loading, data } = useQuery<any, QueryObj>(
    GET_RESULTS,
    {variables: props.location.state.query}
  );

  
  if (loading) {
    return (
      <div>LOADING</div>
    )
  }

  if (data) {
    console.log('server response:',  data)
    return (
      <div>
        Data received <br />
        {JSON.stringify(data)}
      </div>
    )
  }

  return (
    <div>
      nothing
    </div>
  )
}

export default SearchResult