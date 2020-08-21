import React from 'react';
import ReactDom from 'react-dom'
import './index.css'
const Person = ({ img, name, job, children }) => {
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
  return (<article className="person">
    <img src={url}
      alt="person"
    />
    <h4>{name}</h4>
    <h4>{job}</h4>
    {children}
  </article>)
}
const PersonList = () => {
  return <section className="person-list">
    <h2>Web Development Team</h2>
    <Person img="30" name='Tesfaye' job='developer'>
    <p>Create applications that address the phases of SDLC (software development life cycl</p>
    </Person>
    <Person img="20" name='Tariku' job='Manager'>
    <p>Assist in updating application development policies to ensure that all future applications meet the latest technical requirements</p>
    </Person>
    <Person img="50" name='Tadios' job='Supervisor'>
    <p>Update existing applications to meet the security and functionality standards as outlined in the company's website policies</p>
    </Person>
    <Person img="60" name='Leul' job='Tester'>
    <p>Develop comprehensive application testing procedures</p>
    </Person>
    <Person img="70" name='Mule' job='Scrum Master'>
      <p>Regular exposure to business stakeholders and executive management, as well as the authority and scope to apply your expertise to many interesting technical problems.</p>
    </Person>
  </section>
}





ReactDom.render(<PersonList />, document.getElementById("root"))
