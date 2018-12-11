import React from 'react'
import {
  Icon,
  Segment,
  Container,
  Image,
} from 'semantic-ui-react'
import FilesSVG from '../images/sql.svg'
import RailsPNG from '../images/rails.png'

class Icons extends React.Component {
  state = [
    {
      id: 1,
      type: 'icon',
      title: 'HTML5',
      color: 'orange',
      name: 'html5',
    },
    {
      id: 2,
      type: 'icon',
      title: 'CSS3',
      color: 'blue',
      name: 'css3',
    },
    {
      id: 3,
      type: 'icon',
      title: 'javaScript',
      color: 'yellow',
      name: 'js square'
    },
    {
      id: 4,
      type: 'icon',
      title: 'React',
      color: 'teal',
      name: 'react'
    },
    {
      id: 5,
      type: 'icon',
      title: 'Ruby',
      color: 'red',
      name: 'gem outline'
    },
    {
      id: 6,
      type: 'image',
      src: { FilesSVG },
      alt: 'sql logo',
    },
    {
      id: 7,
      type: 'image',
      src: { RailsPNG },
      alt: 'ruby on rails'
    },
  ]

  getIcons = (state) => {
    const { name, title, color, type, id } = this.state
    this.state.map((i => {
      debugger
      if (i.type === 'icon')
        return (
          <Icon key={i.id} name={i.name} color={i.color} size='huge' />
        )
      if (i.type === 'image')
        return (
          <Image as={Icon} src={i.src} alt={i.alt} />
        )
      else
        return (
          console.log('no data in icons array')
        )
    }))
  }

  render() {
    return (
      <Container>
        <Segment>
          {this.getIcons()}
        </Segment>
      </Container>
    )
  }
}

export default Icons
