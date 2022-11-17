import './Project.css';
import ProjectItem from './ProjectItem';
import Button from 'react-bootstrap/Button';
import { projectsArray } from '../Details.js';
import React, { useEffect, useState } from 'react';
import { useStateValue } from '../Context/StateProvider';

function Project() {

  const [page, setPage] = useState(1);
  const [array, setArray] = useState([]);

  useEffect(() => {
    updatePage(projectsArray, 2, page);
  }, [page]);

  // Pagination
  function updatePage(array, noOfItems, page) {
    const starting = noOfItems * (page - 1);
    const ending = starting + noOfItems;
    const trimmedItems = array.slice(starting, ending);
    setArray(trimmedItems);
  }

  // Dark Mode 
  const [{ mode }] = useStateValue();
  const dark = {
    color: '#DFF6FF',
    backgroundColor: '#06283D'
  };
  const light = {
    color: 'black',
    backgroundColor: "rgb(241, 241, 241)"
  };

  return (
    <>
      <div className="banner">
        <div className="parallax_project"></div>
        <div className="project_banner_text">
          <p>PROJECTS</p>
        </div>
      </div>
      <div id='projects'>
        <div className='project_main' style={mode ? dark : light}>
          <p>Recent Projects</p>
          <div className="project_items_">
            {
              array.map(element => {
                return <ProjectItem
                  key={element.id}
                  title={element.title}
                  img={element.img}
                  desc={element.description}
                  tech_stack={element.tech_stack}
                  href={element.href}
                />
              })
            }
          </div>
          <div className="button">
            <Button
              variant={mode ? "warning" : "dark"}
              disabled={true ? page <= 1 : false}
              onClick={() => { setPage(prevPage => prevPage - 1) }}
            >&larr; Previous
            </Button>

            <p>
              <strong>Page: </strong>{page} of {Math.ceil(projectsArray.length / 2)}
            </p>

            <Button
              variant={mode ? "warning" : "dark"}
              disabled={true ? page > 2 : false}
              onClick={() => { setPage(prevPage => prevPage + 1) }}
            >Next &rarr;
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
