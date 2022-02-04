import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Card from './Card';
import { Avatar, Button, CircularProgress, Skeleton } from '@mui/material';
import { Close, Email, Minimize, OpenInFull } from '@mui/icons-material';
import Author from './Author';
function App() {
  const [dataSet, setDataSet] = useState([])
  const [isLoading, setIsLoading] = useState([true])
  let data

  const getData = () => {
    setIsLoading(true)
    axios.get("https://randompersonapi-app.herokuapp.com/api/").then(res => {
      data = res.data
      setDataSet(data)
      console.log(data)
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 1000);
      return () => clearTimeout(timer);
    }
    )
  }

  useEffect(() => {
    getData()
    return () => {

    }
  }, [])





  return (
    <div className="App">
      <div className="Hero">
        <h1 className='title'>Random User Generator</h1>
        {dataSet.length != 0 &&
          <Card>
            <>
              <Avatar src={dataSet[0].img} sx={{ width: 100, height: 100 }} />
              <h2>
                {dataSet[0].fname}
                &nbsp;
                {dataSet[0].lname}
              </h2>
              <h3>
                {dataSet[0].jobtitle}
              </h3>
              <h3 className='email'>
                <Email /> {dataSet[0].email}
              </h3>
            </>
            {isLoading &&
              <div className='loader'>
              <Skeleton animation="wave" variant="circular">
                  <Avatar sx={{ width: 100, height: 100 }} />
                </Skeleton>
              <Skeleton animation="wave" sx={{ width: 300 }} variant="text"></Skeleton>
              <Skeleton animation="wave" sx={{ width: 300 }} variant="text"></Skeleton>
              <Skeleton animation="wave" sx={{ width: 300 }} variant="text"></Skeleton>
              </div>
            }
          </Card>
        }
        <Button variant="contained" onClick={getData}>
          Get Different Person
        </Button>
      </div>
      <div className='Description'>
        <div>
          <h1>Get JSON for a randomly generated person.</h1>
          <br />
          <p>Example Requests (Axios):</p>
          <br />
          <div className='Code'>
            <div className='codeBar'>
              <Avatar sx={{ width: 14, height: 14, bgcolor: "#f54242" }}>-</Avatar>
              <Avatar sx={{ width: 14, height: 14, bgcolor: "#e8bf3a" }}>-</Avatar>
              <Avatar sx={{ width: 14, height: 14, bgcolor: "#3fb332" }}>-</Avatar>
            </div>
            <div className='codeCode'>
              <div className='codeNote'>
                /* Returns either male or female person. */
              </div>
              axios.get("https://randompersonapi-app.herokuapp.com/api/")
            </div>
          </div>
          <p> <b>JSON Response: </b></p>
          <div className='json'>
            {JSON.stringify([{ "fname": "Ezequiel", "lname": "Crawford", "email": "EzequielCrawford@icloud.com", "img": "https://content.fakeface.rest/male_46_ededd157712589f710232a836159f541cf397ff5.jpg", "jobtitle": "Information Security Analyst" }])}
          </div>

          <div className='Code'>
            <div className='codeBar'>
              <Avatar sx={{ width: 14, height: 14, bgcolor: "#f54242" }}>-</Avatar>
              <Avatar sx={{ width: 14, height: 14, bgcolor: "#e8bf3a" }}>-</Avatar>
              <Avatar sx={{ width: 14, height: 14, bgcolor: "#3fb332" }}>-</Avatar>
            </div>
            <div className='codeCode'>
              <div className='codeNote'>
                /* Returns random male person. */
              </div>
              axios.get("https://randompersonapi-app.herokuapp.com/api/male/")
            </div>
          </div>
          <p> <b>JSON Response: </b></p>
          <div className='json'>
            {JSON.stringify([{ "fname": "Carter", "lname": "Stevenson", "email": "CarterStevenson@yahoo.com", "img": "https://content.fakeface.rest/female_28_2a0463fe12b3a972f6101d5e639f7018608403c5.jpg", "jobtitle": "Content Marketing Manager" }])}
          </div>


          <div className='Code'>
            <div className='codeBar'>
              <Avatar sx={{ width: 14, height: 14, bgcolor: "#f54242" }}>-</Avatar>
              <Avatar sx={{ width: 14, height: 14, bgcolor: "#e8bf3a" }}>-</Avatar>
              <Avatar sx={{ width: 14, height: 14, bgcolor: "#3fb332" }}>-</Avatar>
            </div>
            <div className='codeCode'>
              <div className='codeNote'>
                /* Returns random female person. */
              </div>
              axios.get("https://randompersonapi-app.herokuapp.com/api/female/")
            </div>
          </div>
          <p> <b>JSON Response: </b></p>
          <div className='json'>
            {JSON.stringify([{ "fname": "Legacy", "lname": "Orozco", "email": "LegacyOrozco@outlook.com", "img": "https://content.fakeface.rest/female_40_9bbd91914e65df4a116e82d90afd3794266be1f8.jpg", "jobtitle": "Superintendent" }])}
          </div>
        </div>
      </div>
      <div className="About">
        <p>The api fetches one of <b>2 million</b> possible name combinations for either gender. I made use of <a href="https://hankhank10.github.io/fakeface/">fakeface api</a> by <a href="https://github.com/hankhank10">hankhank10</a> to fetch a <a href="#">thispersondoesnotexist.com</a> face based on specific criteria.  </p>
        <br />
        <h2>That's all, folks.</h2>
        <br />

        <Author />
        <br />
      </div>
    </div>
  );
}

export default App;
